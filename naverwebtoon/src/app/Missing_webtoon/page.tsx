"use client"
import React, { useEffect, useState } from "react";

const weekdays = ["월요웹툰", "화요웹툰", "수요웹툰", "목요웹툰", "금요웹툰", "토요웹툰", "일요웹툰"];

export default function Miss_webtoon() {
  const [images, setImageList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/images');
        const contentType = res.headers.get("content-type");

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("응답이 JSON이 아닙니다:", text);
          return;
        }

        const data = await res.json();
        setImageList(data);
      } catch (err) {
        console.error("fetch 에러:", err);
        setError("이미지를 가져오는 데 문제가 발생했습니다.");
      }
    };

    fetchImages();
  }, []);

  // 요일별로 60개씩 잘라서 분류 (전체 420개 기준, 실제로는 300개면 마지막은 부족해도 됨)
  const chunkByWeekday = (images) => {
    const chunkSize = Math.ceil(images.length / 7);
    const chunks = [];
    for (let i = 0; i < 7; i++) {
      chunks.push(images.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return chunks;
  };

  const weekdayChunks = chunkByWeekday(images);

  return (
    <div>

      <div className="p-10 px-5 flex flex-row  justify-center ">
        {weekdayChunks.map((chunk, index) => (
          <div key={index} className="flex flex-col  items-center border-[1px] border-[#434343]">
            <p>{weekdays[index]}</p> {/* 요일 표시 */}
            {chunk.map((name, idx) => (
              <img
                key={idx}
                src={`/real/${name}`}
                className="w-[13vh] h-[16vh] rounded-[3px] m-1"
                alt={`webtoon-${name}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
