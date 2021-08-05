import React from "react";
import InputPost from "./InputPost";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = ({ posts }) => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-2xl">
        {/* Stories */}
        <Stories />
        {/* Input Post */}
        <InputPost />
        {/* Post */}
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
