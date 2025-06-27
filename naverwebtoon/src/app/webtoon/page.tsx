import Header from "@/app/Header/page"
import Miss_webtoon from "@/app/Missing_webtoon/page"
import Adv from "@/app/Adv/page"
export default function webtoon() {
  return (
    <div className="">
      <Header />

      <div className="flex flex-col items-center">
      <Adv />
      <p className="text-[1.7vh] font-bold">요일별 전체 웹툰</p>
      <Miss_webtoon />
      </div>
      
    </div>
  );
}