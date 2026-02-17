"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import styles from "./home.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

import { useRouter } from "next/navigation";
import { TiTick } from "react-icons/ti";
import Link from 'next/link'


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


const clientReviews = [
  {
    img: "/client.png",
    text: "Their team delivered our project on time with exceptional quality. Highly professional and reliable.",
    author: "Healthcare Client, India",
  },
  {
    img: "/client1.png",
    text: "Excellent collaboration and precise execution throughout the project. The outcome was polished, reliable, and exceeded expectations.",
    author: "Technology Partner, India",
  },
  {
    img: "/client3.png",
    text: "Outstanding technical expertise and excellent support throughout the development process.",
    author: "Startup Founder, India",
  },
  {
    img: "/client5.png",
    text: "Delivered high-quality work on schedule with great professionalism.",
    author: "Business Client, India",
  },
  {
    img: "/client4.png",
    text: "Clear collaboration and precise execution led to excellent results.",
    author: "Digital Solutions Partner, India",
  },
  {
    img: "/client6.png",
    text: "Strong technical skills with dependable support throughout.",
    author: "Product Manager, India",
  },
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

const images1 = ["/web5.png", "/web4.png", "/web2.png"];
const images2 = ["/ai3.png", "/ai2.png", "/ai1.png"];
const images3 = ["/digital1.png", "/automate.png", "/digital3.png"];
const images4 = ["/publish.png", "/medical1.png", "/medical2.png"];

export default function CenterStage() {

  useFadeInOnScroll();

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // ⬅️ slower
    }
  }, []);

  const router = useRouter();



  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % timings.length);
    }, timings[active]);

    return () => clearTimeout(timeoutRef.current);
  }, [active]);


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images1.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  const trackRef = useRef(null);
  const indexRef = useRef(6); // start from middle (after first duplicate set)

  useEffect(() => {
    const track = trackRef.current;
    const cardWidth = track.children[0].offsetWidth;

    // initial position
    track.style.transform = `translateX(-${cardWidth * 6}px)`;

    const interval = setInterval(() => {
      indexRef.current += 1;

      track.style.transition = "transform 0.8s ease";
      track.style.transform = `translateX(-${indexRef.current * cardWidth}px)`;

      // reached end duplicate → silently jump back
      if (indexRef.current === 12) {
        setTimeout(() => {
          track.style.transition = "none";
          indexRef.current = 6;
          track.style.transform = `translateX(-${cardWidth * 6}px)`;
        }, 800);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  // ================= DATA =================
  const services = useMemo(() => [
    "Software & Web Development",
    "Python Development & AI Solutions",
    "Data Annotation & AI Training Data",
    "Digital Transformation & Automation",
    "UI/UX & Creative Design",
    "Training & Consulting",
    "Publishing Services",
    "Medical Coding & Medical Billing Services",
  ], []);

  const industries = useMemo(() => [
    "Healthcare",
    "Education & E-Learning",
    "Publishing & Media",
    "Retail & E-Commerce",
    "Finance & Banking",
    "Startups & Enterprises",
    "AI & Machine Learning Companies",
  ], []);





  // ================= SCROLL SYSTEM =================
  const sectionRef = useRef(null);

  // Data lengths
  const leftSteps = 8; // Services length
  const rightSteps = 7; // Industries length

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
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

  // 2. Handle Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      // Total scrollable height of the section
      const totalScroll = section.offsetHeight - window.innerHeight;
      // Current scroll position within the section (0 to totalScroll)
      const currentScroll = Math.min(Math.max(-rect.top, 0), totalScroll);

      // Global Progress (0 to 1)
      const p = currentScroll / totalScroll;

      if (window.innerWidth < 768) {
        // === MOBILE LOGIC (Sequential) ===
        // First 50% scroll is for Left Side
        const pLeft = Math.min(Math.max(p * 2, 0), 1);
        const lIdx = Math.min(Math.ceil(pLeft * leftSteps), leftSteps);
        setLeftIndex(lIdx);

        // Remaining 50% scroll is for Right Side
        // Starts only after p > 0.5
        const pRight = Math.min(Math.max((p - 0.5) * 2, 0), 1);
        const rIdx = Math.min(Math.ceil(pRight * rightSteps), rightSteps);
        setRightIndex(rIdx);
      } else {
        // === DESKTOP LOGIC (Simultaneous) ===
        setLeftIndex(Math.min(Math.ceil(p * leftSteps), leftSteps));
        setRightIndex(Math.min(Math.ceil(p * rightSteps), rightSteps));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set positions
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [leftSteps, rightSteps]);

  // Calculate percentage for CSS --fill variable
  const leftProgress = leftIndex / leftSteps;
  const rightProgress = rightIndex / rightSteps;


  const goToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
      
      <div className={styles.sec2} id="section-2">
        <div className={styles.sec2_2}>
          <div className={styles.content}>
            <div className={styles.innercontent}>
              <h2>What We Do</h2>
              <p>We combine technical expertise, industry knowledge, and innovation to deliver high-impact solutions:</p>
            </div>
            <div className={styles.get}>
              <button className={styles.cta} onClick={() => router.push("/services")}>
                Service <span className={styles.dot} />
              </button>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardcontent}>
              <div className={styles.top}>
                {images1.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    fill
                    alt="web"
                    className={`${styles.topimg} ${i === index ? styles.active : ""
                      }`}
                    priority={i === 0}
                  />
                ))}
              </div>
              <div className={styles.bottom}>
                <h4>Build High-Performance Software & Web Applications</h4>
                <p>We design and develop scalable, secure, and user-friendly web and software applications tailored to your business goals.</p>
              </div>
            </div>
            <div className={styles.cardcontent}>
              <div className={styles.top}>
                {images2.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    fill
                    alt="web"
                    className={`${styles.topimg} ${i === index ? styles.active : ""
                      }`}
                    priority={i === 0}
                  />
                ))}
              </div>
              <div className={styles.bottom}>
                <h4>Deliver AI Training Data & Data Annotation Services</h4>
                <p>We provide accurate, high-quality training datasets for AI and machine learning models, enabling smarter and more reliable AI systems.</p>
              </div>
            </div>
            <div className={styles.cardcontent}>
              <div className={styles.top}>
                {images3.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    fill
                    alt="web"
                    className={`${styles.topimg} ${i === index ? styles.active : ""
                      }`}
                    priority={i === 0}
                  />
                ))}
              </div>
              <div className={styles.bottom}>
                <h4>Enable Digital Transformation & Automation</h4>
                <p>We modernize business processes through automation, workflow optimization, and digital transformation strategies that increase productivity and reduce costs.</p>
              </div>
            </div>
            <div className={styles.cardcontent}>
              <div className={styles.top}>
                {images4.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    fill
                    alt="web"
                    className={`${styles.topimg} ${i === index ? styles.active : ""
                      }`}
                    priority={i === 0}
                  />
                ))}
              </div>
              <div className={styles.bottom}>
                <h4>Provide Publishing & Medical Services</h4>
                <p>From digital publishing and content conversion to medical coding and billing services, we ensure compliance, precision, and operational excellence.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.banner}>
        {/* LEFT – FIXED */}
        <div className={styles.left}>
          Fueling growth with <br />scalable IT services worldwide
        </div>

        <div className={styles.divider}></div>

        {/* RIGHT – MOVING LOGOS */}
        <div className={styles.right}>
          <div className={styles.logoTrack}>
            <Image src="/reactlgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/pythonlgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/djangolgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/sqllgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/nodejslgo.png" width={80} height={10} alt="bannerlogo" />
            <Image src="/awslgo.png" width={60} height={10} alt="bannerlogo" />


            {/* duplicate for seamless loop */}
            <Image src="/reactlgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/pythonlgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/djangolgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/sqllgo.png" width={100} height={10} alt="bannerlogo" />
            <Image src="/nodejslgo.png" width={80} height={10} alt="bannerlogo" />
            <Image src="/awslgo.png" width={60} height={10} alt="bannerlogo" />
          </div>
        </div>
      </div>

      <h2 className={styles.heading}>
        Our Core Services & Industries We Serve
      </h2>

      <section
        ref={sectionRef}
        className={styles.section}
        style={{ height: `${(leftSteps + 1) * (isMobile ? 70 : 100)}vh` }}
      >

        <div className={styles.sticky}>
          <div className={styles.stickycontainer}>

            <div className={styles.wrapper}>
              {/* LEFT COLUMN */}
              <div className={styles.col}>
                <div
                  className={`${styles.stickyTitle} ${styles.leftTitle}`}
                  style={{ "--fill": leftProgress }} // First progress bar
                >
                  <span className={styles.titleText}>Our Core Services</span>
                </div>

                <div className={styles.stackWrap}>
                  {services.map((item, i) => (
                    <div
                      key={i}
                      className={`${styles.stackCard} ${i < leftIndex ? styles.stackActive : styles.stackInactive
                        }`}
                    >
                      <span className={styles.tick}>✔</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className={`${styles.col} ${styles.col2mobile}`}>
                <div
                  className={`${styles.stickyTitle} ${styles.rightTitle}`}
                  style={{ "--fill": rightProgress }} // Second progress bar
                >
                  <span className={styles.titleText}>Industries We Serve</span>
                </div>

                <div className={styles.stackWrap}>
                  {industries.map((item, i) => (
                    <div
                      key={i}
                      className={`${styles.stackCard} ${i < rightIndex ? styles.stackActive : styles.stackInactive
                        }`}
                    >
                      <span className={styles.tick}>✔</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.sec_3}>
        <div className={styles.container1}>


          <div className={styles.cards2}>
            <div className={styles.card1}>
              <h2>Why Choose Us</h2>
              <p>
                We are committed to delivering excellence at every stage of
                engagement.
              </p>

              <button className={styles.cta1} onClick={() => router.push("/about_us")}>
                Get Started <span className={styles.dot} />
              </button>
            </div>


            <div className={styles.card2}>
              <span className={styles.icon}>👨‍💼</span>
              <h4>Industry-Experienced Professionals</h4>
              <p>
                Skilled experts with deep domain knowledge across IT, AI,
                healthcare, and publishing.
              </p>
            </div>

            <div className={styles.card2}>
              <span className={styles.icon}>🔐</span>
              <h4>Scalable & Secure Solutions</h4>
              <p>
                Future-ready solutions designed to scale while ensuring data
                security and compliance.
              </p>
            </div>

            <div className={styles.card2}>
              <span className={styles.icon}>🎯</span>
              <h4>Quality-Driven Processes</h4>
              <p>
                Structured workflows and quality checks ensure reliable and
                consistent outcomes.
              </p>
            </div>

            <div className={styles.card2}>
              <span className={styles.icon}>💰</span>
              <h4>Cost-Effective Engagement Models</h4>
              <p>
                Flexible pricing models designed to maximize value without
                compromising quality.
              </p>
            </div>

            <div className={styles.card2}>
              <span className={styles.icon}>🤝</span>
              <h4>Dedicated Support & Partnership</h4>
              <p>
                Long-term collaboration with continuous support to help your
                business grow.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.sec_5}>
        <div className={styles.client}>
          <div className={styles.headtitle}>
            <div className={styles.clienttitle}>
              <h2>Client Success Stories</h2>
              <p>Our success is measured by the trust our clients place in us and the results we help them achieve.</p>
            </div>
            <button className={styles.cta1} onClick={() => router.push("/contact")}>
              Get Started <span className={styles.dot} />
            </button>
          </div>
          <div className={styles.clientcard}>
            <div className={styles.track} ref={trackRef}>
              {clientReviews.concat(clientReviews, clientReviews).map((item, index) => (
                <div className={styles.clicard} key={index}>
                  <div className={styles.img}>
                    <Image
                      className={styles.clientimg}
                      src={item.img}
                      fill
                      alt="client"
                    />
                  </div>

                  <div className={styles.review}>
                    <p data-no-animate className={styles.clientpara}>“{item.text}”</p>
                    <p data-no-animate>— {item.author}</p>
                  </div>
                </div>
              ))}
              {clientReviews.concat(clientReviews, clientReviews).map((item, index) => (
                <div className={styles.clicard} key={index}>

                  <div className={styles.img}>
                    <Image
                      className={styles.clientimg}
                      src={item.img}
                      fill
                      alt="client"
                    />
                  </div>

                  <div className={styles.review}>
                    <p data-no-animate className={styles.clientpara}>“{item.text}”</p>
                    <p data-no-animate>— {item.author}</p>
                  </div>
                </div>
              ))}
              {clientReviews.concat(clientReviews, clientReviews).map((item, index) => (
                <div className={styles.clicard} key={index}>
                  <div className={styles.img}>
                    <Image
                      className={styles.clientimg}
                      src={item.img}
                      fill
                      alt="client"
                    />
                  </div>

                  <div className={styles.review}>
                    <p data-no-animate className={styles.clientpara}>“{item.text}”</p>
                    <p data-no-animate>— {item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}