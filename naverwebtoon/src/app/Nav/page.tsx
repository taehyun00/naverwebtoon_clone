"user client"


export default function Nav() {
  return (
    <div>
        <nav className="w-[100%] h-[5vh] bg-[#FFFFFF] border-b-[1px] border-[#EBEBEB] flex flex-row items-center justify-center">
            <div>
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
        </nav>
    </div>
  );
}
