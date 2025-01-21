import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import React from "react";

export default function Home() {
  return (
    <div className="lg:max-w-6xl lg:mx-auto max-h-screen overflow-hidden">
      <div className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}
