"use client"
import React, { useEffect, useState } from "react";


export default function Miss_webtoon() {
  const [images, setImageList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("../api/images");
        if (!res.ok) throw new Error("API 요청 실패");
  
        const filenames = await res.json(); // 예: ["123.jpg", "abc.png", ...]
        setImageList(filenames);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchImages();
  }, []);

  return (
    <div>
      {images.length === 0 && <p>이미지 목록 불러오는 중...</p>}
      <div className="grid grid-cols-5 gap-2">
            {images.map((name, idx) => (
        <img key={idx} src={`/real/${name}`} className="w-[100px]" />
      ))}
      </div>
    </div>
  );
}
