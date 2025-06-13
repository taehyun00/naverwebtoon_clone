"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Nav() {
    const pathname = usePathname();

    const baseStyle = "text-[1.3vh] font-bold flex items-center justify-center min-w-[4vh] px-[1vh] ";
  const activeStyle = "flex items-center justify-center min-w-[4vh] px-[1vh] bg-[#00DC64] text-[1.3vh] font-bold text-[#FFFFFF]";

  return (
    <div>
        <nav className="w-[100%] h-[5vh] bg-[#FFFFFF] border-b-[1px] border-[#EBEBEB] flex flex-row items-center justify-center gap-[55vh]">
            <div className="flex  h-[100%] ">
            <Link href="/" className={pathname === "/" ? activeStyle : baseStyle}>
          홈
        </Link>
        <Link href="/webtoon" className={pathname === "/webtoon" ? activeStyle : baseStyle}>
          웹툰
        </Link>
        <Link href="/bestChallenge" className={pathname === "/bestChallenge" ? activeStyle : baseStyle}>
          베스트도전
        </Link>
        <Link href="/challenge" className={pathname === "/challenge" ? activeStyle : baseStyle}>
          도전만화
        </Link>
        <Link href="/mypage/favorite" className={pathname === "/mypage/favorite" ? activeStyle : baseStyle}>
          마이페이지
        </Link>
            </div>
            <div className="w-[11vh] h-[2.8vh] bg-[#00DC64] flex justify-center items-center rounded-[3px] ">
                <p className="text-[1.3vh] text-[#FFFFFF]">CREATER'S</p>
            </div>
        </nav>
    </div>
  );
}
