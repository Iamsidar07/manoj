import React from "react";
import { useRouter } from "next/router";
import requests from "../utils/requests";
const Navbar = () => {
  const router=useRouter();
  return (
    <nav className="relative ">

      <div className="space-x-10 px-10 scrollbar-hide sm:px-20 sm:space-x-20 flex w-full items-center  overflow-x-scroll whitespace-nowrap">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={()=>router.push(`/?genre=${key}`)}
            key={key}
            className=" cursor-pointer hover:text-green-400 transition duration-100 transform hover:scale-125 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-1/12 h-5 bg-gradient-to-l from-[#06202A] " />
    </nav>
  );
};

export default Navbar;
