"use client";

// import { useState } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <div className={style.Background}>
        <div className={style.NavContainer2}>
          <h1 className={style.txt1}>About</h1>
          <h1 className={style.txt2}>
            <span className={style.hmabt}><a href="/">Home</a></span> / <span className={style.abt}>About</span>
          </h1>
        </div>

        <div className={style.NavContainer3}>
          <div className={style.wholebox}>
          <div className={style.box1}></div>
          <div className={style.box2}></div>
          </div>
          <Image
            className={style.MovingAnimation}
            src="/MovingGirl.png"
            alt="Moving Girl"
            width={350}
            height={350}
          />
        </div>
      </div>
    </>
  );
}
