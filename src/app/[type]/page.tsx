import { getTabData } from "@/apiHandle/apis";
import List from "@/components/List";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params: { type },
}: any): Promise<Metadata> {
  return {
    title: type,
    description: "this is movies app developed by Hardik Naik",
  };
}

export default async function Pages({
  params: { type },
  searchParams: { page = 1 },
}: any) {
  // Initiate both requests in parallel
  const data = await getTabData(type, page);

  return <List {...data} type={type} />;
}
