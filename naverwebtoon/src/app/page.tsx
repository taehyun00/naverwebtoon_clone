import Header from "@/app/Header/page"
import Main_slidebar from "@/app/Main_slidebar/page"
import Adv from "@/app/Adv/page"
import Missing_webtoon from "@/app/Missing_webtoon/page"


export default function Home() {
  return (

    <div className="h-[auto] mb-[10vh]">
      <Header />
    
      <div className="flex flex-col items-center w-[auto]">
        
        <Main_slidebar />
        <Adv />
      </div>
      <div className="flex flex-col items-center w-[auto]">
        <Missing_webtoon />
      </div>
    </div>
  );
}
