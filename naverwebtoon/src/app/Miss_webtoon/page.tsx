import { webtoonList } from "../missing_webtoon_";

export default function Adv() {
  return (
    <div className="flex gap-[8px] mt-[10px]">
      {webtoonList.map((i) => (
        <div key={i.id} className="w-[13vh] h-[19vh] overflow-hidden rounded-[3px] flex flex-col">
          <div className="w-full h-[20vh] overflow-hidden rounded-[3px] border-[0.5px] border-[#121212]">
            <img
              src={i.thumbnail}
              alt={i.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h2 className="text-[1.2vh] font-semibold mt-[2px] truncate">{i.title}</h2>
        </div>
      ))}
    </div>
  );
}
