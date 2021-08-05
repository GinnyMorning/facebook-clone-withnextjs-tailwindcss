import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import firebase from "firebase";

const InputPost = ({ src }) => {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    // check if input is empty or not
    if (!inputRef.current.value) return;

    // save message to fire cloud
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImageFromPost();
          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              //when upload completed
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };
  const addFiletoPost = (e) => {
    //   create new file reader
    const reader = new FileReader();

    //if element holding a url to the file => reader read that url of file index 0
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    //when reader read file success, a call back will be return, and we set that result to the state
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImageFromPost = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white text-gray-500 rounded-2xl mt-6 p-2 shadow-md font-medium">
      <div className="flex space-x-2 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form action="" className="flex flex-1">
          <input
            placeholder={`What is in your mind ${session.user.name}`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none "
            type="text"
            ref={inputRef}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImageFromPost}
            className="flex flex-col filter hover:brightness-125 transition duration-75 transform hover:scale-105 cursor-pointer"
          >
            <img src={imageToPost} alt="" className="h-10 object-contain" />
            <p className="text-red-500 text-xs text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="text-green-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addFiletoPost}
            ref={filePickerRef}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputPost;
