"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [items, setItems] = useState([]);
  const searchTimeout = useRef<any>("");
  const inputRef = useRef<any>(null);

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
    <div
      className="
      border-b-[1.5px] 
      border-black
     flex
      items-center
      p-1
      flex-[0.5]
      focus-within:border-slate-900
      relative
      mobile:mt-1
      dark:border-white
      dark:focus-within:border-yellow-100
      "
    >
      <div className="mr-2">
        <IoIosSearch></IoIosSearch>
      </div>
      <input
        onInput={getData}
        type="search"
        className="bg-transparent outline-0 flex-1"
        placeholder="Search..."
        ref={inputRef}
      />

      {/* search result */}

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
                  <p className="text-sm text-neutral-400">{film.media_type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;