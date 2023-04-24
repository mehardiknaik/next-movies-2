"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch, IoMdSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "@wits/next-themes";
import { MdAutoFixHigh } from "react-icons/md";
const Search = () => {
  const [items, setItems] = useState([]);
  const searchTimeout = useRef<any>("");
  const inputRef = useRef<any>(null);
  const { theme, setTheme } = useTheme();

  async function getData(e: any) {
    const { value } = e.target;
    clearTimeout(searchTimeout.current);
    if (value.length < 3) {
      setItems([]);
      return;
    }
    try {
      searchTimeout.current = setTimeout(async () => {
        let search: any = await fetch(`/api/search?query=${value}`);
        search = await search.json();
        setItems(search.results);
      }, 300);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  const themeIcon = () => {
    switch (theme) {
      case "dark":
        return (
          <button className="text-2xl" onClick={() => setTheme("light")}>
            <IoMdSunny />
          </button>
        );
      case "light":
        return (
          <button className="text-2xl" onClick={() => setTheme("system")}>
            <IoMdMoon />
          </button>
        );
      default:
        return (
          <button className="text-2xl" onClick={() => setTheme("dark")}>
            <MdAutoFixHigh />
          </button>
        );
    }
  };

  const onWindowClick = () => {
    inputRef.current.value = "";
    setItems([]);
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);

    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);
  return (
    <div className="flex flex-[0.5] items-center">
      <div
        className="border-b-[1.5px] 
      border-black flex-1 focus-within:border-slate-900
      relative
      mobile:mt-1
      dark:border-white
      dark:focus-within:border-yellow-100"
      >
        <IoIosSearch className="absolute h-full self-center" />
        <input
          onInput={getData}
          type="search"
          className="bg-transparent outline-0 w-full pl-6"
          placeholder="Search..."
          ref={inputRef}
        />

        {!!items.length && (
          <div
            className="
            absolute
            top-[48px]
            left-0
            right-0
            rounded-md
            bg-slate-100 dark:bg-gray-900
            shadow-lg
        "
          >
            <div className="max-h-[480px] overflow-y-auto scrollbar-thumb-slate-400 dark:scrollbar-thumb-slate-700 scrollbar-thin pr-3">
              {items.map((film: any) => (
                <Link
                  href={`/${film.media_type}/${film.id}`}
                  key={film.id}
                  className="flex items-start p-1.5 rounded-lg hover:bg-slate-200 hover:dark:bg-slate-800 cursor-pointer m-1.5"
                >
                  {/* image */}
                  <Image
                    alt={film.title}
                    width={102}
                    height={72}
                    src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                        : "/noposter.jpg"
                    }
                    className="h-[72px] min-w-[102px] w-[102px] rounded-md bg-primary"
                  ></Image>
                  {/* title and genres */}
                  <div className="px-3 truncate">
                    <p className="text-base truncate">
                      {film.title || film.name}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {film.media_type}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              className="block text-center p-2 bg-slate-300  dark:bg-slate-600"
              //@ts-ignore
              href={{
                pathname: "/search",
                query: { param: encodeURIComponent(inputRef.current.value) },
              }}
            >
              See More
            </Link>
          </div>
        )}
      </div>
      {themeIcon()}
    </div>
  );
};

export default Search;
