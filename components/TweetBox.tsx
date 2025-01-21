"use client";
import React from "react";
import {
  CalendarIcon,
  ImageIcon,
  MapPin,
  ScanSearchIcon,
  Smile,
} from "lucide-react";
import { useState } from "react";

export default function TweetBox() {
  const [input, setinput] = useState("");
  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https://pbs.twimg.com/profile_images/1406877230106439684/7Ly-0CED_400x400.jpg"
        alt="photo"
        width={120}
        height={120}
        className="rounded-full mt-4 h-16 w-16"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="What is happening!?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-x">
              <ImageIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <ScanSearchIcon className="h-5 w-5" />
              <Smile className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <MapPin className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="bg-x px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
