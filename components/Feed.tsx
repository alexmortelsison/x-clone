import { RefreshCwIcon } from "lucide-react";
import React from "react";

export default function Feed() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshCwIcon className="mr-5 mt-5 cursor-pointer text-x transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
}
