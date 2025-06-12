"use client"
import Image from "next/image";

import bell from "../image/bell.svg"
import etc from "../image/etc.svg"
import mail from "../image/mail.svg"
import talk from "../image/talk.svg"

export default function Images() {
  return (
    <div className="flex flex-row gap-[1.5vh]">
        <Image 
        src={talk}
        alt="이미지"/>
        <Image 
        src={bell}
        alt="이미지"/>
        <Image 
        src={mail}
        alt="이미지"/>
        <Image 
        src={etc}
        alt="이미지"/>
    </div>
  );
}
