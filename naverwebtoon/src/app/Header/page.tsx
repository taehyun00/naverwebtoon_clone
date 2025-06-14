"use client"

import Image from "next/image";
import Nav from "../Nav/page"
import Images from "../Images/page";



export default function Header() {
  return (
    <div>
        <header className="w-[100%] h-[5vh] bg-[#FFFFFF] border-b-[1px] border-[#EBEBEB] flex flex-row items-center justify-center">
            <div className="flex flex-row gap-[36vh] ">
                <div className="flex flex-row gap-[0.6vh] items-center">
                    <div className="flex gap-[0.5vh]">
                        <Image 
                        src="/logo.svg"
                        alt="로고"
                        width={45}
                        height={50} />
                        <p className="text-[2vh] font-bold">웹툰</p>
                    </div>
                    <div className="border-[0.7px] h-[1.5vh] border-[#BBBBBB]"></div>
                    <p className="text-[1.5vh] font-bold text-[#BBBBBB]">웹소설</p>
                    <div className="border-[0.7px] h-[1.5vh] border-[#BBBBBB]"></div>
                    <p className="text-[1.5vh] font-bold text-[#BBBBBB]">시리즈</p>
                </div>
                <div className="flex flex-row gap-[1vh] justify-center items-center">
                    <div>
                        <input type="text"  className="w-[22vh] h-[2.8vh] border-[1px] border-[#BBBBBB] text-[1.1vh] p-[0.5vh] focus:outline-none" placeholder="제목/작가로 검색할 수 있습니다"/>
                    </div>

                    <div className="flex gap-[1vh]">
                        <div className="flex justify-center items-center gap-[0.5vh]">
                            <div className="bg-[#AAAAAA] w-[2vh] h-[2vh] rounded-[3vh]">

                            </div>
                            <p className="text-[1vh]">xogus</p>
                        </div>
                        <Images />
                    </div>
                </div>
            </div>
        </header>
        <Nav/>
    </div>
  );
}
