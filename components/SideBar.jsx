import React from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/outline";

import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";

const SideBar = () => {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] lg:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UserGroupIcon} title={"Group"} />
      <SidebarRow Icon={ShoppingBagIcon} title={"Marketplace"} />
      <SidebarRow Icon={DesktopComputerIcon} title={"Watch"} />
      <SidebarRow Icon={CalendarIcon} title={"Events"} />
      <SidebarRow Icon={ClockIcon} title={"Memories"} />
      <SidebarRow Icon={ChevronDownIcon} title={"See More"} />
    </div>
  );
};

export default SideBar;
