import { LucideProps } from "lucide-react";
import React from "react";
import { RefAttributes } from "react";
import { ForwardRefExoticComponent } from "react";

interface Props {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit *:items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-x">{title}</p>
    </div>
  );
}

export default SidebarRow;
