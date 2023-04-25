"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const Pagination = ({ page, total_pages }: any) => {
  const [pages, setPages] = useState<number[]>([]);
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setPages(
      Array(total_pages)
        .fill(1)
        .map((_, i) => i + 1)
    );
  }, [searchParams]);

  return (
    <div className="space-x-2 flex mobile:overflow-auto mobile:flex-nowrap flex-wrap">
      <Link
        href={pathname + "?" + createQueryString("page", "1")}
        prefetch={false}
        replace
        className={clsx(
          "py-1 px-2  rounded-md",
          page == 1
            ? "dark:bg-slate-600 bg-slate-400"
            : "bg-slate-100 dark:bg-slate-900"
        )}
      >
        1
      </Link>
      <Link
        href={pathname + "?" + createQueryString("page", "2")}
        prefetch={false}
        replace
        className={clsx(
          "py-1 px-2  rounded-md",
          page == 2
            ? "dark:bg-slate-600 bg-slate-400"
            : "bg-slate-100 dark:bg-slate-900"
        )}
      >
        2
      </Link>
    </div>
  );
};

export default Pagination;
