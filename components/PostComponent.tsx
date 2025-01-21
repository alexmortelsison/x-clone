import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";
import React from "react";
import TimeAgoComponent from "./TimeAgoComponent";
import {
  ArrowRightLeftIcon,
  HeartIcon,
  MessagesSquareIcon,
  UploadIcon,
} from "lucide-react";

export default async function PostComponent({ post }: { post: any }) {
  const posts = await client.fetch(query);
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-200">
      <div className="flex space-x-3">
        <img src={post.profileImg} alt="" className="h-10 w-10 rounded-full" />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{post.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{post.username.replace(/\s+/g, "").toLowerCase()} ·
            </p>
            <TimeAgoComponent post={post._createdAt} />
          </div>
          <p className="pt-1">{post.text}</p>
          {post.image && (
            <img
              src={post.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <MessagesSquareIcon className="h-5 w-5" />
          <p>5</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ArrowRightLeftIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
