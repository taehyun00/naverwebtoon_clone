"use client";

import { useState } from "react";
import { webtoonList } from "../missing_webtoon_";

const ITEMS_PER_PAGE = 5;

export default function Sub_slider() {
  const [page, setPage] = useState(0);

  const maxPage = Math.ceil(webtoonList.length / ITEMS_PER_PAGE);
  const translateX = `-${page * 100}%`;

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < maxPage - 1) setPage(page + 1);
  };

  return (
    <div className="w-[110vh] flex flex-col">
      <div className="w-[60%]">

        {/* 슬라이더 */}
        <div className="relative top-[-4px]">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="absolute top-1/2 -translate-y-1/2 
                       bg-white shadow-md rounded-full w-8 h-8 
                       flex items-center justify-center z-10
                       text-gray-800 hover:bg-gray-100 disabled:opacity-30"
          >
            ⟨
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX})` }}
            >
              {Array.from({ length: maxPage }).map((_, i) => {
                const start = i * ITEMS_PER_PAGE;
                const pageData = webtoonList.slice(start, start + ITEMS_PER_PAGE);
                return (
                  <div key={i} className="flex shrink-0 w-[66vh]  justify-between">
                    {pageData.map((webtoon) => (
                      <div key={webtoon.id} className="flex flex-col items-start gap-[10px]">
                        <div className="w-[13vh] aspect-[3.1/4] overflow-hidden rounded-[3px]">
                          <img
                            src={webtoon.thumbnail}
                            alt={webtoon.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col justify-start">
                          <h2 className="mt-2 text-base font-bold truncate text-[1.3vh]">
                            {webtoon.title}
                          </h2>
                          <p className="text-base font-semibold text-[1.1vh]">
                            {webtoon.author}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={page >= maxPage - 1}
            className="absolute right-[-18px] top-1/2 -translate-y-1/2 
                       bg-white shadow-md rounded-full w-8 h-8 
                       flex items-center justify-center z-20
                       text-gray-800 hover:bg-gray-100 disabled:opacity-30"
          >
            〉
          </button>
        </div>
      </div>
    </div>
  );
}
