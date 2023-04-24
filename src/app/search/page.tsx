export const dynamic = "force-dynamic";
import { getSearch } from "@/apiHandle/apis";
import List from "@/components/List";
import Pagination from "@/components/Pagination";
import type { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams: { param },
}: any): Promise<Metadata> {
  return {
    title: `search-${decodeURIComponent(param)}`,
  };
}

export default async function Pages({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { [key: string]: string };
}) {
  const { param, page = 1 } = searchParams;
  const pr = decodeURIComponent(param);
  const data = await getSearch(pr, page);
  console.log(params);

  return (
    <div>
      <h1 className="text-xl mb-2">
        {pr} page:{page}
      </h1>
        <List {...data} />
    </div>
  );
}
