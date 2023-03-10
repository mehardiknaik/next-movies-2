import Link from "next/link";
import React from "react";
import Search from "./Search";
import { RiMovie2Line } from "react-icons/ri";

const Header = () => (
  <header className="bg-slate-100/50 dark:bg-gray-900/50 sticky top-0 z-[99] p-5 backdrop-blur">
    <div className="flex items-center justify-between gap-3 mobile:block">
      {/* brand & menu */}
      <div className="flex items-center gap-6">
        {/* brand */}
          <Link href={"/"}><RiMovie2Line size={30}/></Link>
        {/*  menu */}
        <div
          className="
        pt-1.5
        flex 
        items-center 
        gap-6
        "
        >
          <Link href={"/movies"}>Movies</Link>
          <Link href={"/tv"}>TV</Link>
        </div>
      </div>

      {/* search */}
      <Search />
      
    </div>
  </header>
);

export default Header;
