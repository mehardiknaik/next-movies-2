import React, { useCallback } from "react";
import Card from "./Card";
import Link from "next/link";
import Pagination from "./Pagination";
type proptype = {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
  type: string;
};

const List = ({
  page,
  results,
  total_pages,
  total_results,
  type,
}: proptype) => {
  return (
    <div>
      <div className="grid grid-cols-5 mobile:grid-cols-2 mb-2">
        {results?.map((film: any) => (
          <Card
            title={film?.title || film?.name}
            poster={film?.poster_path}
            id={film?.id}
            type={film?.media_type || type}
            name={film?.name}
            key={film?.id}
          />
        ))}
      </div>
      <Pagination page={page} total_pages={total_pages} />
    </div>
  );
};

export default List;
