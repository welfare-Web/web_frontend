"use client";
import style from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const redirect = () => {
    router.push("/");
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShow(true);
      } else {
        setShow(false);
        setMenuOpen(false); // close menu on scroll
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);



  return (

    <div className={`${style.nav} ${show ? style.show : style.hide}`}>
      <div className={style.nav1}>
        {/* LOGO */}
        <div  className={style.cmpimg}>
          <div className={style.cmpimg1}>
            <a href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                className={style.logo}
                width={150}
                height={150}
              />
            </a>

          </div>
          <a href="/">
          <h1 className={style.cmpname}>
            WELFARE <br /> HEALTHTECH
          </h1></a>
        </div>

        {/* MENU */}
        <div className={`${style.nav2} ${menuOpen ? style.active : ""}`}>
          <a href="/" >Home</a>
          <a href="/about_us">About Us</a>
          <a href="/services">Services</a>
          <a href="/career">Career</a>
          <a href="/contact"><p className={style.ctnbtn} >Contact Us</p></a>
        </div>

        {/* DESKTOP BUTTON */}
        <div className={style.started}>
          <button className={style.started1} onClick={() => router.push("/contact")}>Contact Us</button>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div
          className={`${style.menuBtn} ${menuOpen ? style.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}