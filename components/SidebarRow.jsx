import React from "react";
import Image from "next/image";
const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex space-x-5 items-center rounded-xl hover:bg-gray-300 cursor-pointer p-3">
      {src && (
        <Image
          src={src}
          className="rounded-full cursor-pointer ml-5"
          height={30}
          width={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
