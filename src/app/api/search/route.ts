import { getSearch } from "@/apiHandle/apis";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //@ts-ignore
  const { searchParams } = request.nextUrl;
  const query = searchParams.get("query");
  let search: any = await getSearch(query);
  return NextResponse.json(search);
}
