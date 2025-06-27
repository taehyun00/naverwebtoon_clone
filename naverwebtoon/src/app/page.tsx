import Header from "@/app/Header/page"
import Main_slidebar from "@/app/Main_slidebar/page"
import Sub_slider from "@/app/Sub_slider/page"
import Adv from "@/app/Adv/page"
import Footer from "@/app/footer/page"


export default function Home() {
  return (

    <div className="h-[auto] mb-[10vh]">
      <Header />
    
      <div className="flex flex-col items-center w-[auto]">
        
        <Main_slidebar />
        <Adv />
      </div>
      <div className="flex flex-col items-center w-[auto]">
        <div className="flex ml-[34vh]">
          <div className="flex flex-col items-start mt-[3vh] mb-[3vh] ml-[5vh]">
            <p className="text-[1.5vh] font-bold mb-[2vh]">xogus님, 이 웹툰들 최신 이야기를 놓치고 계신 것 같아요!</p>
            <Sub_slider />
          </div>
          <div className="bg-[#00DC64] w-[25vh] h-[20vh] rounded-[3px] relative left-[-39vh] top-[7vh]">
          <p className="text-[#FFFFFF] text-[2vh] font-bold">더 레전드 오브 김태현 후원하기</p>
          <p className="text-[#FFFFFF] text-[1.7vh] font-bold">1908 5345 0866</p>
          </div>
        </div>

        <div className="flex flex-col items-start mt-[3vh] mb-[3vh] ml-[14vh]">
            <p className="text-[1.5vh] font-semibold mb-[2vh]">가장 핫한 <span className="text-[1.5vh] font-[900]">판타지</span>웹툰만 모아봤어요!</p>
            <Sub_slider />
          </div>

      <Footer />

      </div>
    </div>
  );
}
