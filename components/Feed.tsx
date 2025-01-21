import { RefreshCwIcon } from "lucide-react";
import React from "react";
import TweetBox from "./TweetBox";
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";
import PostComponent from "./PostComponent";

export default async function Feed() {
  const posts = await client.fetch(query);
  return (
    <div className="col-span-7 lg:col-span-5 border-x border-x-gray-200">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshCwIcon className="mr-5 mt-5 cursor-pointer text-x transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <TweetBox />
      </div>
      <div>
        {posts.map((post: any) => (
          <PostComponent key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
