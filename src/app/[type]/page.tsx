import React from "react";

export default async function Pages({ params: { type } }: any) {
  // Initiate both requests in parallel

  return <div>{type} Coming Soon.....</div>;
}
