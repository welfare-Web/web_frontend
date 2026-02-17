"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import style from "@/app/(site)/services/software-web-development.module.css";
import Image from "next/image";
import '../globals.css'

import { SERVICE_PAGES } from "../serviceData";

// =======================================================
// ✅ COUNTER
// =======================================================
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className={style.stat_number}>
      {count}
      {suffix}
    </span>
  );
}

export default function DepartmentSlugPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params?.slug;
  const page = SERVICE_PAGES?.[slug];

  // ✅ if slug doesn't exist
  if (!page) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h1>Service Not Found</h1>
        <button style={{ marginTop: 12 }} onClick={() => router.push("/services")}>
          Back to Services
        </button>
      </div>
    );
  }

  const data = page.tabs;

  // =======================================================
  // ✅ Scroll button
  // =======================================================
  const handleClick1 = () => {
    const target = document.getElementById("section");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  // =======================================================
  // ✅ PROGRESS CIRCLE
  // =======================================================
  const ProgressCircle = ({ value }) => {
    const target = Number(value);
    const [progress1, setProgress1] = useState(0);
    const wrapperRef = useRef(null);
    const hasAnimated = useRef(false);

    const size = 60;
    const stroke = 6;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress1 / 100) * circumference;

    useEffect(() => {
      let interval;
      setProgress1(0);
      hasAnimated.current = false;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let current = 0;

            interval = setInterval(() => {
              current += 1;
              if (current >= target) {
                setProgress1(target);
                clearInterval(interval);
              } else {
                setProgress1(current);
              }
            }, 25);

            observer.disconnect();
          }
        },
        { threshold: 0.6 }
      );

      if (wrapperRef.current) observer.observe(wrapperRef.current);

      return () => {
        observer.disconnect();
        if (interval) clearInterval(interval);
      };
    }, [target]);

    return (
      <div ref={wrapperRef} className={style.progress_wrapper}>
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e5e5"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#3b6cff"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className={style.progress_text}>{progress1}%</div>
      </div>
    );
  };

  // ======================================================
  // ✅ ACTIVE SECTION SYSTEM
  // ======================================================
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleClick = (i) => {
    setActiveSection(i);

    if (isMobile) {
      requestAnimationFrame(() => {
        const el = document.getElementById("mob-content");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    if (!isMobile) {
      const onScroll = () => {
        const rect = containerRef.current.getBoundingClientRect();
        const scrolled = Math.max(0, -rect.top);
        const index = Math.min(
          data.length - 1,
          Math.floor(scrolled / window.innerHeight)
        );
        setActiveSection(index);
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [isMobile, data.length]);

useEffect(() => {
  const check = () => {
    setIsMobile(window.innerWidth <= 1180); // ✅ iPad Air included
  };
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);


  // =======================================================
  // ✅ SLIDER SYSTEM
  // =======================================================
  const slides = page.slides;
  const [activeSlide, setActiveSlide] = useState(0);

  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const isDown = useRef(false);

  const sliderRef = useRef(null);
  const [sliderW, setSliderW] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [showIncomingBg, setShowIncomingBg] = useState(false);

  const autoTimer = useRef(null);
  const AUTO_DELAY = 10000;

  useEffect(() => {
    const updateW = () => {
      if (sliderRef.current) setSliderW(sliderRef.current.offsetWidth);
    };
    updateW();
    window.addEventListener("resize", updateW);
    return () => window.removeEventListener("resize", updateW);
  }, []);

  const getNextIndex = () => (activeSlide + 1) % slides.length;
  const getPrevIndex = () => (activeSlide - 1 + slides.length) % slides.length;

  const goToSlide = (dir = "next") => {
    if (isAnimating || isDown.current || !sliderW) return;
    const goingNext = dir === "next";
    setIsAnimating(true);
    setShowIncomingBg(true);

    const snap = goingNext ? -sliderW : sliderW;
    setDragX(snap);

    setTimeout(() => {
      setActiveSlide((prev) =>
        goingNext ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
      );
      setDragX(0);
      setIsAnimating(false);
      setShowIncomingBg(false);
    }, 350);
  };

  useEffect(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      if (!isAnimating && !isDown.current) goToSlide("next");
    }, AUTO_DELAY);

    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
    };
  }, [activeSlide, sliderW, isAnimating]);

  const handleDown = (e) => {
    if (isAnimating) return;
    if (autoTimer.current) clearInterval(autoTimer.current);

    isDown.current = true;
    setShowIncomingBg(true);
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!isDown.current || isAnimating) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDragX(x - startX.current);
  };

  const handleUp = () => {
    if (!isDown.current) return;
    isDown.current = false;

    const threshold = 180;
    const goingNext = dragX < 0;

    if (Math.abs(dragX) > threshold) {
      setIsAnimating(true);
      const snap = goingNext ? -sliderW : sliderW;
      setDragX(snap);

      setTimeout(() => {
        setActiveSlide((prev) =>
          goingNext ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
        );
        setDragX(0);
        setIsAnimating(false);
        setShowIncomingBg(false);
      }, 350);
    } else {
      setIsAnimating(true);
      setDragX(0);

      setTimeout(() => {
        setIsAnimating(false);
        setShowIncomingBg(false);
      }, 300);
    }

    setTimeout(() => {
      if (autoTimer.current) clearInterval(autoTimer.current);
      autoTimer.current = setInterval(() => {
        if (!isAnimating && !isDown.current) goToSlide("next");
      }, AUTO_DELAY);
    }, 400);
  };

  const activeSlideData = slides[activeSlide];
  const incomingIndex = dragX < 0 ? getNextIndex() : getPrevIndex();
  const incomingSlide = slides[incomingIndex];

  const STITCH = 2;
  const px = (v) => Math.round(v);

  const incomingX = dragX + (dragX < 0 ? sliderW - STITCH : -sliderW + STITCH);
  const showIncoming = showIncomingBg || isAnimating || isDown.current;

  return (
    <>
      <div className={style.main}>
        {/* ✅ HERO SLIDER */}
        <section className={style.headerSection}>
          <div
            ref={sliderRef}
            className={style.sliderWrap}
            style={{ backgroundImage: `url('${activeSlideData.bg}')` }}
            onMouseDown={handleDown}
            onMouseMove={handleMove}
            onMouseUp={handleUp}
            onMouseLeave={handleUp}
            onTouchStart={handleDown}
            onTouchMove={handleMove}
            onTouchEnd={handleUp}
          >
            <div
              key={activeSlide}
              className={style.slide}
              style={{
                backgroundImage: `url('${activeSlideData.bg}')`,
                transform: `translate3d(${px(dragX)}px,0,0)`,
                transition: isAnimating ? "transform 0.35s ease" : "none",
              }}
            >
              {/* LEFT */}
              <div className={style.sec1_1}>
                <Image
                  src="/vectr009.png"
                  className={style.vect}
                  alt="vector"
                  loading="lazy"
                  width={1500}
                  height={1500}
                  style={{ transform: `translate3d(${px(dragX * 0.12)}px,0,0)` }}
                />

                <Image
                  src={activeSlideData.men}
                  className={style.pic1}
                  alt="person"
                  loading="lazy"
                  width={1500}
                  height={1500}
                  style={{ transform: `translate3d(${px(dragX * 0.28)}px,0,0)` }}
                />
              </div>

              {/* RIGHT */}
              <div className={style.sec1_2}>
                <div
                  className={style.text_container}
                  style={{ transform: `translate3d(${px(dragX * 0.08)}px,0,0)` }}
                >
                  <h1 className={style.reveal}>
                    <span className={style.text}>{page.hero.title1} </span>
                  </h1>

                  <h1 className={`${style.reveal} ${style.delay1}`}>
                    <span className={style.text}>{page.hero.title2}</span>
                  </h1>

                  <h2 className={`${style.reveal} ${style.delay2} ${style.blue}`}>
                    <span className={style.text}>{page.hero.subtitle}</span>
                  </h2>

                  <p className={style.ptxt}>{page.hero.para}</p>

                  <button onClick={handleClick1} className={style.sec1btn1}>
                    Our Services
                  </button>

                  <div className={style.serv}>
                    <span>
                      <button onClick={() => router.push("/Home")} className={style.li}>Home /</button> <button className={style.li} onClick={() => router.push("/services")}>Services /</button><span className={style.ser}> {page.hero.service}</span>
                  </span>
                  </div>

                </div>
              </div>

              <Image
                src="/slider-3-shape-2-8k.png"
                alt="arrow"
                loading="lazy"
                width={180}
                height={80}
                className={style.curveArrow}
              />

              <div className={style.ringWrapper} style={{ transform: `translate3d(${px(dragX * 0.06)}px,0,0)` }}>
                <div className={style.whiteRing}>
                  <div className={style.blueRing}></div>
                </div>
              </div>
              
            </div>

            {showIncoming && (
              <div
                className={`${style.slide} ${style.incoming}`}
                style={{
                  backgroundImage: `url('${incomingSlide.bg}')`,
                  transform: `translate3d(${px(incomingX)}px,0,0)`,
                  transition: isAnimating ? "transform 0.35s ease" : "none",
                }}
              />
            )}
          </div>

          {/* ✅ BOTTOM FEATURE BAR */}
          <div className={style.bottomBar}>
            <div className={style.bottomItems}>
              <div className={style.item}>
                <Image
                  src="/megaphone_icon_cropped_500x500.png"
                  alt="Grow Technology"
                  width={170}
                  loading="lazy"
                  height={170}
                  className={style.icon}
                />
                <h3>Grow Technology</h3>
                <div className={style.hoverUnderline}>
                  <span className={style.triangle}></span>
                </div>
              </div>

              <div className={style.item}>
                <Image
                  src="/business_services_icon_blue_500x500 (1).png"
                  alt="Business Services"
                  width={170}
                  height={170}
                  loading="lazy"
                  className={style.icon}
                />
                <h3>Business Services</h3>
                <div className={style.hoverUnderline}>
                  <span className={style.triangle}></span>
                </div>
              </div>

              <div className={style.item}>
                <Image
                  src="/project_complete_icon_blue_500x500.png"
                  alt="Project Complete"
                  width={170}
                  height={170}
                  loading="lazy"
                  className={style.icon}
                />
                <h3>Project Complete</h3>
                <div className={style.hoverUnderline}>
                  <span className={style.triangle}></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ✅ SERVICES SECTION */}
        <section
          ref={containerRef}
          className={style.section}
          id="section"
          style={{
            height: isMobile ? "auto" : `${data.length * 100}vh`,
          }}
        >
          {/* ✅ DESKTOP */}
          {!isMobile && (
            <div className={style.sticky}>
              {/* LEFT */}
              <div className={style.left}>
                {data.map((item, i) => (
                  <h2
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`${style.title} ${activeSection === i ? style.active : ""}`}
                  >
                    {item.title}
                  </h2>
                ))}
              </div>

              {/* RIGHT */}
              <div className={style.right}>
                <div key={activeSection} className={`${style.righthead} ${style.rightAnimate}`}>
                  <div className={style.rightheadtxt}>
                    <h1 className={style.secl1txt1}>{data[activeSection].title}</h1>
                    <h1 className={style.secl1para1}>{data[activeSection].desc}</h1>
                  </div>

                  <div className={style.rightheadbox}>
                    <div className={style.rightheadbox1}>
                      <div className={style.rightheadbox1head}>
                        <h1 className={style.secl1para1}>{data[activeSection].desc1}</h1>
                      </div>

                      <div className={style.rightheadbox1tail}>
                        {/* LEFT */}
                        <div className={style.rightheadbox1tailleft}>
                          <div className={style.rightheadbox1tailleftanibox}>
                            <div className={style.rightheadbox1tailleftaniboxlogo}>
                              <ProgressCircle value={data[activeSection].perc1} />
                            </div>
                            <div className={style.rightheadbox1tailleftaniboxtxt}>
                              <h1 className={style.secl1tit1}>Core Capabilities</h1>
                              <h1 className={style.secl1titp1}>Level is high</h1>
                            </div>
                          </div>

                          <div className={style.cont}>
                            <div className={style.cont1}>
                              <span className={style.tickWrap}>
                                <Image src="/checkimg1.png" className={style.tick} loading="lazy" alt="tick" width={40} height={40} />
                              </span>
                              <h1 className={style.tickpara1}>{data[activeSection].cont1}</h1>
                            </div>

                            <div className={style.cont1}>
                              <span className={style.tickWrap}>
                                <Image src="/checkimg1.png" className={style.tick} loading="lazy" alt="tick" width={40} height={40} />
                              </span>
                              <h1 className={style.tickpara1}>{data[activeSection].cont2}</h1>
                            </div>
                          </div>
                        </div>

                        {/* RIGHT */}
                        <div className={style.rightheadbox1tailright}>
                          <div className={style.rightheadbox1tailleftanibox}>
                            <div className={style.rightheadbox1tailleftaniboxlogo}>
                              <ProgressCircle value={data[activeSection].perc2} />
                            </div>
                            <div className={style.rightheadbox1tailleftaniboxtxt}>
                              <h1 className={style.secl1tit1}>Service Highlights</h1>
                              <h1 className={style.secl1titp1}>Level is high</h1>
                            </div>
                          </div>

                          <div className={style.cont}>
                            <div className={style.cont1}>
                              <span className={style.tickWrap}>
                                <Image src="/checkimg1.png" className={style.tick} loading="lazy" alt="tick" width={40} height={40} />
                              </span>
                              <h1 className={style.tickpara1}>{data[activeSection].cont11}</h1>
                            </div>

                            <div className={style.cont1}>
                              <span className={style.tickWrap}>
                                <Image src="/checkimg1.png" className={style.tick} loading="lazy" alt="tick" width={40} height={40} />
                              </span>
                              <h1 className={style.tickpara1}>{data[activeSection].cont12}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={style.rightheadbox2}>
                      <Image src={data[activeSection].img143} className={style.rectimg} loading="lazy" alt="service" width={1500} height={1500} />
                    </div>
                  </div>

                  <div className={style.righttail}>
                    <h1 className={style.tickpara34}>
                      <b>Solution: </b>
                      {data[activeSection].para1}
                    </h1>
                    <h1 className={style.tickpara34}>{data[activeSection].para2}</h1>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ✅ MOBILE */}
          {isMobile && (
            <div className={style.mobProcess}>
              <div className={style.mobTabs}>
                <div className={style.mobcenter}>
                  {data.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleClick(i)}
                      className={`${style.mobTab} ${
                        activeSection === i ? style.mobTabActive : ""
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className={style.mobStepsWrap} id="mob-content">
                <div className={style.mobStep}>
                  <div className={style.mobCard}>
                    <h1 className={style.mobTitle}>{data[activeSection].title}</h1>
                    <p className={style.mobDesc}>{data[activeSection].desc}</p>

                    <div className={style.mobGrid}>
                      <div className={style.mobRow}>
                        <ProgressCircle value={data[activeSection].perc1} />
                        <div className={style.mobRowTxt}>
                          <h3>Core Capabilities</h3>
                          <p>Level is high</p>
                        </div>
                      </div>

                      <div className={style.mobRow}>
                        <ProgressCircle value={data[activeSection].perc2} />
                        <div className={style.mobRowTxt}>
                          <h3>Service Highlights</h3>
                          <p>Level is high</p>
                        </div>
                      </div>

                      <div className={style.mobImgWrap}>
                        <Image
                          src={data[activeSection].img143}
                          className={style.mobImg}
                          alt="service"
                          loading="lazy"
                          width={1500}
                          height={1500}
                        />
                      </div>
                    </div>

                    <p className={style.mobSolution}>
                      <b>Solution: </b> {data[activeSection].para1}
                    </p>
                    <p className={style.mobSolution}>{data[activeSection].para2}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ✅ COUNTER SECTION */}
        <div className={style.sec4}>
          <div className={style.sec4_1}>
            <div className={style.Review}>
              <div className={style.Iconsec}>
                <div className={style.Icon1}>
                  <div>
                    <Image className={style.Task} src="/Task_Complted.png" alt="Task" loading="lazy" width={1000} height={1000} />
                  </div>
                  <div className={style.Count1}>
                    <h1 className={style.Subcount}>
                      <Counter target={50} suffix="+" />
                    </h1>
                    <span className={style.label1}>Complete Projects</span>
                  </div>
                </div>

                <div className={style.Strline}></div>

                <div className={style.Iconsec1}>
                  <div className={style.Icon1}>
                    <div>
                      <Image className={style.Task1} src="/Rating_Stars.png" alt="Task" loading="lazy" width={1000} height={1000} />
                    </div>
                    <div className={style.Count2}>
                      <h1 className={style.Subcount1}>
                        <Counter target={25} suffix="+" />
                      </h1>
                      <span className={style.label2}>Happy Clients</span>
                    </div>
                  </div>
                  <div className={style.Strline1}></div>
                </div>

                <div className={style.Iconsec1}>
                  <div className={style.Icon1}>
                    <div>
                      <Image className={style.Task1} src="/Award.png" alt="Task" loading="lazy" width={1000} height={1000} />
                    </div>
                    <div className={style.Count2}>
                      <h1 className={style.Subcount}>
                        <Counter target={15} suffix="+" />
                      </h1>
                      <span className={style.label1}>Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}