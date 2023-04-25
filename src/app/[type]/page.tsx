import { getTabData } from "@/apiHandle/apis";
import List from "@/components/List";
import React from "react";

export default async function Pages({
  params: { type },
  searchParams: { page = 1 },
}: any) {
  // Initiate both requests in parallel
  const data = await getTabData(type,page);
  console.log(data.results);

  return <List {...data} type={type} />;
}
