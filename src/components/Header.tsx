"use client";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { RiMovie2Line } from "react-icons/ri";
import { usePathname, useSearchParams } from "next/navigation";
const Header = () => {
  const path = usePathname();

  return (
    <header className="bg-slate-100/50 dark:bg-gray-900/50 sticky top-0 z-[99] p-5 backdrop-blur">
      <div className="flex items-center justify-between gap-3 mobile:block">
        {/* brand & menu */}
        <div className="flex items-center gap-6">
          {/* brand */}
          <Link aria-label="home" href={"/"}>
            <RiMovie2Line size={30} />
          </Link>
          {/*  menu */}
          <div
            className="
        pt-1.5
        flex 
        items-center 
        gap-6
        "
          >
            <Link
              prefetch={false}
              href={"/movie"}
              className={
                path == "/movie"
                  ? "border-b-2 border-purple-800 dark:border-purple-400"
                  : "transition-all hover:scale-110"
              }
            >
              Movie
            </Link>
            <Link
              prefetch={false}
              href={"/tv"}
              className={
                path == "/tv"
                  ? "border-b-2 border-purple-800 dark:border-purple-400"
                  : "transition-all hover:scale-110"
              }
            >
              TV
            </Link>
          </div>
        </div>

        {/* search */}
        <Search />
      </div>
    </header>
  );
};

export default Header;
