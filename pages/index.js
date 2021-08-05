import { getSession } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Widget from "../components/Widget";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Fack book</title>
      </Head>
      {/* header */}
      <Header />
      <main className="flex">
        {/* sidebar */}
        <SideBar />
        {/* feed */}
        <Feed posts={posts} />
        {/* widget */}
        <Widget />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  //get user from server
  const session = await getSession(context);

  //get posts while using the server rendering
  const post = await db.collection("posts").orderBy("timestamp", "desc").get();
  //store posts to variable
  const doc = post.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  // return user session as a props to use later on application
  //return posts got from server before render in client site start and feed to the main app
  return {
    props: {
      session,
      posts: doc,
    },
  };
}
