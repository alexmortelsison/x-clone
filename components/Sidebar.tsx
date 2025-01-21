import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import SidebarRow from "./SidebarRow";
import {
  BellIcon,
  BookMarkedIcon,
  CircleEllipsisIcon,
  FoldersIcon,
  Hash,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <FaXTwitter />
      <SidebarRow Icon={HomeIcon} title={"Home"} />
      <SidebarRow Icon={Hash} title={"Explore"} />
      <SidebarRow Icon={BellIcon} title={"Notifications"} />
      <SidebarRow Icon={MailIcon} title={"Messages"} />
      <SidebarRow Icon={BookMarkedIcon} title={"BookMarks"} />
      <SidebarRow Icon={FoldersIcon} title={"Lists"} />
      <SidebarRow Icon={UserIcon} title={"Sign In"} />
      <SidebarRow Icon={CircleEllipsisIcon} title={"More"} />
    </div>
  );
}
