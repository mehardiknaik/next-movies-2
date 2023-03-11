import React from "react";
import dayjs from "dayjs";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="p-6 text-center">
      <p className="text-sm opacity-[0.7]">
        &#169; {dayjs().format("YYYY")}, All Right Reserved.
      </p>
      <p className="text-md mt-2 opacity-[0.5] flex justify-center items-center gap-1">
        Made with
        <span>
          <BsSuitHeart />
        </span>
        for
        <span>
          <BsSuitHeartFill className="text-red-600 dark:text-red-500 animate-heart-beat" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
