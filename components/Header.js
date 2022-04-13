import React from "react";
import Image from "next/image";
import Icon from "./Icon";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchCircleIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex py-5 items-center h-auto flex-col sm:flex-row sm:justify-between sm:m-2 m-4">
      <div className="flex items-center ">
        <Icon Icon={HomeIcon} name={"Home"} />
        <Icon Icon={LightningBoltIcon} name={"Trending"} />
        <Icon Icon={BadgeCheckIcon} name={"Verfied"} />
        <Icon Icon={CollectionIcon} name={"Collections"} />
        <Icon Icon={SearchIcon} name={"Search"} />
        <Icon Icon={UserIcon} name={"Account"} />
      </div>
      <Image
          src={"https://pngimg.com/uploads/netflix/netflix_PNG15.png"}
          width={60}
          height={40}
          className="object-contain"
      />

    </header>
  );
}

export default Header;
