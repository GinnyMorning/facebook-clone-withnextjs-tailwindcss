import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ name, message, timestamp, image, postImage }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white rounded-t-2xl shadow-sm mt-5">
        <div className="flex space-x-2 items-center">
          <Image src={image} className="rounded-full" height={40} width={40} />
          <div>
            <p className="font-medium">{name}</p>
            {/* if posts got from server before rendering in client, so the timestamp will be null, so that we need make it loading until got timestamp from realtimePost */}
            {timestamp ? (
              <p className="font-light text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString("vi-VN")}
              </p>
            ) : (
              <p className="text-xs text-gray-400">loading</p>
            )}
          </div>
        </div>
        <p className="mt-2">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
