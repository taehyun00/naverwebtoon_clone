"user client"


export default function Nav() {
  return (
    <div>
        <nav className="w-[100%] h-[5vh] bg-[#FFFFFF] border-b-[1px] border-[#EBEBEB] flex flex-row items-center justify-center gap-[58vh]">
            <div className="flex gap-[15px]">
                <button className="text-[1.3vh]">
                    홈
                </button>

                <button className="text-[1.3vh]">
                    웹툰
                </button>

                <button className="text-[1.3vh]">
                    베스트도전
                </button>

                <button className="text-[1.3vh]">
                    도전만화
                </button>

                <button className="text-[1.3vh]">
                    마이페이지
                </button>
            </div>
            <div className="w-[11vh] h-[2.8vh] bg-[#00DC64] flex justify-center items-center rounded-[3px] ">
                <p className="text-[1.3vh] text-[#FFFFFF]">CREATER'S</p>
            </div>
        </nav>
    </div>
  );
}
