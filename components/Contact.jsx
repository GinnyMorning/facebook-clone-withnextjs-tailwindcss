import React from "react";
import Image from "next/image";

const Contact = ({ name, src }) => {
  return (
    <div className="flex space-x-3 items-center mb-2 relative hover:bg-gray-300 cursor-pointer p-2 rounded-2xl">
      <Image
        src={src}
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
        className="rounded-full"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-6 bg-green-500 w-3 h-3 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Contact;
