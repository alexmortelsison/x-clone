"use client";
import TimeAgo from "javascript-time-ago";
import React from "react";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
import ReactTimeAgo from "react-time-ago";

interface Post {
  created_At: string;
}

export default function TimeAgoComponent({ post }: { post: string }) {
  const date = new Date(post);

  return (
    <ReactTimeAgo
      date={date}
      locale="en-US"
      className="text-sm text-gray-500"
    />
  );
}
