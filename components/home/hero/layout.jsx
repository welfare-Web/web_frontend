"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import styles from "../hero.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import { useRouter } from "next/navigation";


const avatars = [
  // Top Left
  { src: "/css.png", x: "20%", y: "30%", mx: "13%", my: "25%" },

  // Top Right
  { src: "/html.png", x: "70%", y: "20%", mx: "75%", my: "20%" },

  // Bottom Right
  { src: "/js.png", x: "75%", y: "55%", mx: "70%", my: "65%" },

  // Bottom Left
  { src: "/react.png", x: "21%", y: "60%", mx: "15%", my: "60%" },

  // Middle Top/Center
  { src: "/android.png", x: "40%", y: "15%", mx: "45%", my: "10%" },

  // Bottom Center
  { src: "/sql.png", x: "52%", y: "73%", mx: "45%", my: "80%" },
];


const titleLine1 = "Reliable IT Solutions";
const titleLine2 = "for Modern Businesses";

function Row({ before, after }) {
  return (
    <div className={styles.pipelineRow}>
      <div className={styles.pipelineItem}>
        <div className={styles.pipelineIcon} />
        <div className={styles.textContainer}>
          <span className={styles.beforeText}>{before}</span>
          <span className={styles.afterText}>{after}</span>
        </div>
      </div>
    </div>
  );
}
//const timings = [7000, 15500, 3500, 10000];
const timings = [7000, 3500, 10000, 15500];




export default function hero(){
    useFadeInOnScroll();

const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // ⬅️ slower
    }
  }, []);






  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % timings.length);
    }, timings[active]);

    return () => clearTimeout(timeoutRef.current);
  }, [active]);




  const [isMobile, setIsMobile] = useState(false);

  // 1. Handle Screen Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);





    return(
        <>
              <div className={styles.hero}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.bgVideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.container}>
          <div className={styles.border}>
            <p data-no-animate>🔐 Trusted IT Services</p>
          </div>
          <div className={styles.title} >
            <h1 data-no-animate>
              <div className={styles.line}>
                {titleLine1.split("").map((char, i) => (
                  <span
                    key={i}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>

              <div className={styles.line}>

                {titleLine2.split("").map((char, i) => (
                  <span
                    key={i}
                    style={{ animationDelay: `${(i + titleLine1.length) * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </h1>
          </div>
          <div className={styles.para}>
            <p data-no-animate>We empower businesses to accelerate growth through cutting-edge technology, intelligent automation, artificial intelligence, and digital innovation.</p>
          </div>
          <button data-no-animate className={styles.cta} onClick={() => goToDiv("section-2")}>
            Get Started <span className={styles.dot} />
          </button>




          <div className={styles.animationStage}>
            <div className={styles.centerStage}>
              <div className={styles.centerLogo}>
                <Image className={styles.loading} src="/circle.png" width={80} height={80} alt="logo" />
              </div>


              <div className={styles.animationSwitcher}>
                {/* ===== 1️⃣ RADAR ===== */}
                {active === 0 && (
                  <div className={styles.radarWrapper}>
                    <div className={styles.radarRipple} />
                    <div className={`${styles.radarRipple} ${styles.Delay1}`} />

                    <div className={styles.radarCenter}>
                      <div className={styles.radarCenterInner} />
                    </div>

                    {avatars.map((a, i) => (
                      <div key={i} className={styles.radarAvatar} style={{
                        left: isMobile ? a.mx : a.x,
                        top: isMobile ? a.my : a.y
                      }}>
                        <Image src={a.src} alt="" width={35} height={35} />
                      </div>
                    ))}
                  </div>
                )}

                {active === 1 && (
                  <div className={styles.spinWrapper}>
                    <svg viewBox="0 0 300 300" className={styles.spinSvg}>
                      <circle cx="150" cy="150" r="110" className={styles.spinRing} />
                    </svg>

                    <div className={styles.spinLabel}>
                      <span className={styles.statusDot}></span>
                      Processing
                    </div>
                  </div>
                )}


                {active === 3 && (
                  <div className={styles.pipeline}>
                    <div className={styles.centerBar} />
                    <Row before="System Downtime" after="24/7 System Monitoring" />
                    <Row before="Unresolved Support Tickets" after="Automated Ticket Resolution" />
                    <Row before="Security Vulnerabilities" after="Enhanced Cybersecurity" />
                    <Row before="Performance Bottlenecks" after="Optimized Performance" />
                  </div>

                )}


                {/* ===== 4️⃣ INTEL GRAPH ===== */}
                {active === 2 && (
                  <div className={styles.intelWrapper}>
                    <svg

                      viewBox="0 0 1200 700"

                      className={styles.intelSvg}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SCALE GROUP */}
                      <g className={styles.mobileScale} transform="translate(600 350) scale(1.25) translate(-600 -350)">

                        {/* DEFINITIONS */}
                        <defs>

                          <pattern id="av1" width="1" height="1">
                            <image href="/python.png" width="45" height="45" />
                          </pattern>
                          <pattern id="av2" width="1" height="1">
                            <image href="/java.png" width="45" height="45" />
                          </pattern>
                          <pattern id="av3" width="1" height="1">
                            <image href="/nodejs.png" width="45" height="45" />
                          </pattern>
                          <pattern id="av4" width="1" height="1">
                            <image href="/kotlin.png" width="45" height="45" />
                          </pattern>
                          <pattern id="av5" width="1" height="1">
                            <image href="/php.png" width="45" height="45" />
                          </pattern>
                          <pattern id="av6" width="1" height="1">
                            <image href="/fluter.png" width="45" height="45" />
                          </pattern>
                        </defs>

                        {/* STATIC LINES */}
                        <g className={styles.static}>
                          <path d="M600 350 L420 210 L335 210" />
                          <path d="M600 350 L780 210 L865 210" />
                          <path d="M600 350 L335 350" />
                          <path d="M600 350 L865 350" />
                          <path d="M600 350 L420 490 L335 490" />
                          <path d="M600 350 L780 490 L865 490" />
                        </g>

                        {/* FLOW */}
                        <g className={styles.flow}>
                          <path d="M600 350 L420 210 L335 210" />
                          <path d="M600 350 L780 210 L865 210" />
                          <path d="M600 350 L335 350" />
                          <path d="M600 350 L865 350" />
                          <path d="M600 350 L420 490 L335 490" />
                          <path d="M600 350 L780 490 L865 490" />
                        </g>

                        {/* AVATARS */}
                        {/* AVATARS */}
                        <g className={styles.avatars}>

                          {/* Python */}
                          <g transform="translate(300 210)">
                            <circle r="32" fill="#fff" />
                            <image href="/python.png" x="-22" y="-22" width="44" height="44" />
                            <circle r="32" fill="none" stroke="#fff" strokeWidth="4" />
                          </g>

                          {/* Java */}
                          <g transform="translate(900 210)">
                            <circle r="32" fill="#fff" />
                            <image href="/java.png" x="-22" y="-22" width="44" height="44" />
                            <circle r="32" fill="none" stroke="#fff" strokeWidth="4" />
                          </g>

                          {/* Node.js */}
                          <g transform="translate(300 350)">
                            <circle r="32" fill="#fff" />
                            <image href="/nodejs.png" x="-22" y="-22" width="44" height="44" />
                            <circle r="32" fill="none" stroke="#fff" strokeWidth="4" />
                          </g>

                          {/* Kotlin */}
                          <g transform="translate(900 350)">
                            <circle r="32" fill="#fff" />
                            <image href="/kotlin.png" x="-22" y="-22" width="44" height="44" />
                            <circle r="32" fill="none" stroke="#fff" strokeWidth="4" />
                          </g>

                          {/* PHP */}
                          <g transform="translate(300 490)">
                            <circle r="32" fill="#fff" />
                            <image href="/php.png" x="-22" y="-22" width="44" height="44" />
                            <circle r="32" fill="none" stroke="#fff" strokeWidth="4" />
                          </g>

                          {/* Flutter */}
                          <g transform="translate(900 490)">
                            <circle r="32" fill="#fff" />
                            <image href="/fluter.png" x="-22" y="-22" width="44" height="44" />
                            <circle r="32" fill="none" stroke="#fff" strokeWidth="4" />
                          </g>

                        </g>


                      </g>
                    </svg>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
        </>
    )
}