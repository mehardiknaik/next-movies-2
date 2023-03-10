"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button className="bg-slate-800 px-3 mt-2 py-2 transition rounded-sm hover:bg-slate-700" onClick={() => reset()}>Try again</button>
    </div>
  );
}
