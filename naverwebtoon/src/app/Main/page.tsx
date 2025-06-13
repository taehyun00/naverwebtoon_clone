"use client";

import { useState } from "react";
import { webtoonList } from "../mockData";

export default function Main() {
  const date = new Date();
  const day = date.getDay();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  const label = dayList[day];

  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(0);
  const [sortType, setSortType] = useState("인기순");

  const handleNext = () => {
    if (page < maxPage - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleSort = (type: string) => {
    setSortType(type);
    setPage(0); // 정렬 시 첫 페이지로 초기화
  };

  const sortWebtoonList = () => {
    const sorted = [...webtoonList];
    switch (sortType) {
      case "인기순":
        return sorted.sort((a, b) => b.popularity - a.popularity);
      case "업데이트순":
        return sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      case "조회순":
        return sorted.sort((a, b) => b.views - a.views);
      case "별점순":
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  };

  const sortedWebtoons = sortWebtoonList();
  const maxPage = Math.ceil(sortedWebtoons.length / ITEMS_PER_PAGE);
  const translateX = `-${page * 100}%`;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[55%]">
        <div className="flex flex-row gap-[12px]">
          <h1 className="text-[1.5vh] font-bold mb-4 mt-4">{label}요웹툰</h1>
          <div className="flex flex-row items-center justify-center gap-[3px]">
          {["인기순", "업데이트순", "조회순", "별점순"].map((type, index, array) => (
            <div key={type} className="flex items-center">
              <button
                onClick={() => handleSort(type)}
                className={`text-[1.2vh] ${sortType === type ? "font-bold text-[#00DC64]" : ""}`}
              >
                {type}
              </button>
              {index < array.length - 1 && <span className="mx-[3px] text-[1.2vh]">·</span>}
            </div>
          ))}
        </div>

        </div>

        <div className="relative top-[-4px]">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="absolute left-[-18px] top-1/2 -translate-y-1/2 
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
                const pageData = sortedWebtoons.slice(start, start + ITEMS_PER_PAGE);
                return (
                  <div key={i} className="flex shrink-0 w-full justify-between">
                    {pageData.map((webtoon) => (
                      <div key={webtoon.id} className="flex flex-col items-start gap-[1px]">
                        <div className="w-[18.5vh] aspect-[3.1/4] overflow-hidden rounded-[3px]">
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
