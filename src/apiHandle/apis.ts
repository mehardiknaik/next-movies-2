import dayjs from "dayjs";

const revalidate = 43200;
export async function getNowPlaying() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PRIVATE_API_PATH}/movie/now_playing?api_key=${process.env.NEXT_PRIVATE_API_KEY}&with_original_language=hi|mr`,
      { next: { revalidate } }
    );
    return res.json();
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}
export async function getPopular(type: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PRIVATE_API_PATH}/${type}/popular?api_key=${process.env.NEXT_PRIVATE_API_KEY}&with_original_language=hi|mr`,
      { next: { revalidate } }
    );
    return res.json();
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}
export async function getTrending(type: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PRIVATE_API_PATH}/trending/${type}/week?api_key=${process.env.NEXT_PRIVATE_API_KEY}&with_original_language=hi|mr`,
      { next: { revalidate } }
    );
    return res.json();
  } catch (e) {
    throw new Error("Failed to fetch data");
  }

  // Recommendation: handle errors
}

export async function getSearch(params: string, page: string | number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PRIVATE_API_PATH}/search/multi?api_key=${process.env.NEXT_PRIVATE_API_KEY}&language=en-US&query=${params}&page=${page}`
    );
    return res.json();
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}

export async function getDetailData(slug: string, type: string) {
  const res = await fetch(
    `${process.env.NEXT_PRIVATE_API_PATH}/${type}/${slug}?api_key=${process.env.NEXT_PRIVATE_API_KEY}&language=en-US&append_to_response=videos,credits`,
    { next: { revalidate: 30 } }
  );
  if (!res.ok) return undefined;
  return res.json();
}

export async function getTabData(type: string,page:string|number) {
  try {
    const date = dayjs().format("YYYY-MM-DD");
    const res = await fetch(
      `${process.env.NEXT_PRIVATE_API_PATH}/discover/${type}?api_key=${process.env.NEXT_PRIVATE_API_KEY}&sort_by=release_date.desc&page=${page}&release_date.lte=${date}&with_original_language=mr%7Chi`,
      { next: { revalidate } }
    );
    if (!res.ok) return undefined;
    return res.json();
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}
