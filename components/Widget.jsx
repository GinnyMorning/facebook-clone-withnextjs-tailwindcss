import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "Zeff",
    id: "1",
  },
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "Bill gate",
    id: "2",
  },
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "Elon Musk",
    id: "3",
  },
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "Harry Potter",
    id: "4",
  },
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "ToanPLQ",
    id: "5",
  },
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "Tim Cook",
    id: "6",
  },
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "Mark Facebook",
    id: "7",
  },
  {
    src: "https://images.unsplash.com/photo-1627997990521-0136773be810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    name: "Hinde",
    id: "8",
  },
];

const Widget = () => {
  return (
    <div className="hidden flex-col lg:flex w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contact</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widget;
