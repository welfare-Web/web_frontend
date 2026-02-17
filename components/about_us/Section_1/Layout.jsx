"use client";
import { useEffect, useState, useRef } from "react";
import style from "./Layout.module.css";
import Image from "next/image";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 } // trigger when 40% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  // Count animation
  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000; // total animation time (ms)
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
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function Service() {
  useFadeInOnScroll();
   const [showVideo, setShowVideo] = useState(false);
  const target = 93;
  const [progress, setProgress] = useState(0);
  const wrapperRef = useRef(null);
  const hasAnimated = useRef(false);

  const size = 60;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    let interval;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let current = 0;
          interval = setInterval(() => {
            current += 1;

            if (current >= target) {
              setProgress(target);
              clearInterval(interval);
            } else {
              setProgress(current);
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
  }, []);
  
  

  return (
    <>
      <div className={style.Hero} id="about-sec1">
        <div className={style.HeroSection}>
          <div className={style.LeftImg}>
            <Image
              className={style.Crleimg}
              src="/BounceCircle.png"
              alt="Circle"
              width={1000}
              height={1000}
              style={{ objectFit: "cover" }}
            />
            <Image
              className={style.ConversationImg}
              src="/Conversation.png"
              alt="Conversation"
              width={1000}
              height={1000}
              style={{ objectFit: "cover" }}
            />
            <div className={style.wrapper1}>
              <div className={style.pointer}></div>

              <div className={style.badge}>
                <div className={style.icon}>✓</div>

                <div className={style.text}>
                  <span className={style.count}>
                    <Counter target={50} suffix="+" />
                  </span>
                  <span className={style.label}>Complete Project</span>
                </div>
              </div>
            </div>
            <div className={style.RightImg}>
              <Image
                className={style.MovingBox}
                src="/LineBox.png"
                alt="MovingBox"
                width={1000}
                height={1000}
              />
              <Image
                className={style.WomanImg}
                src="/Women.png"
                alt="WomanImg"
                width={350}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className={style.RightContainer}>
          <div className={style.AboutContent}>
            <h2>« ABOUT US »</h2>
            <p className={style.paracont}>
              Driving Digital Excellence Through
              <br /> Technology, AI, and Expertise
            </p>
            <p className={style.paracont1}>
              We are a technology-driven solutions company delivering end-to-end
              services across software development, artificial intelligence,
              healthcare revenue cycle management, and digital publishing. Our
              purpose is to help organizations innovate faster, operate smarter,
              and grow sustainably through intelligent digital solutions.
            </p>
          </div>
          <div className={style.line_wrapper}>
            <div className={style.line}></div>
            <div className={style.dot}></div>
          </div>
          <div className={style.container}>
            <div className={style.left}>
              <p>
                <span className={style.dot1}></span>
                Software & Web Development
              </p>
              <p>
                <span className={style.dot1}></span>
                Mobile App Development
              </p>
              <p>
                <span className={style.dot1}></span>
                Data Annotation & AI Training Data
              </p>
              <p>
                <span className={style.dot1}></span>
                Digital Marketting
              </p>
              <p>
                <span className={style.dot1}></span>
                Bussiness Process Outsourcing
              </p>
            </div>
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
                  className={style.progress_ring}
                />
              </svg>

              <div className={style.progress_text}>{progress}%</div>
            </div>
            <div className={style.right}>
              <h3>Solution Business</h3>
              <p>Level is high</p>
            </div>
          </div>
          <div className={style.wrapper}>
            <div className={style.quoteBox}>
              <span className={style.quoteIcon}>“</span>
              <div className={style.Highlitedtxt}>
                <p>
                  Our solutions are built to be secure, scalable, and
                  future-ready, enabling our clients to stay competitive in an
                  ever-evolving digital ecosystem.
                </p>
              </div>
            <div className={style.triangle}></div>
            </div>
          </div>
          <div className={style.video_container}>
            <div className={style.container1}>
               <div
        className={style.play_wrapper}
        onClick={() => setShowVideo(true)}
      >
        <span className={`${style.pulse} ${style.pulse1}`}></span>
        <span className={`${style.pulse} ${style.pulse2}`}></span>
        <span className={`${style.pulse} ${style.pulse3}`}></span>

        <div className={style.play_btn}>
          <Image
            className={style.ArrowR}
            src="/Mxplay.png"
            alt="Play Video"
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className={style.video_modal}>
          <div className={style.video_box}>
            <span
              className={style.close}
              onClick={() => setShowVideo(false)}
            >
              ✕
            </span>

            <video
              src="/Welfare.MP4"
              controls
              autoPlay
              muted        // REQUIRED for mobile autoplay
              playsInline  // REQUIRED for iOS
            />
          </div>
        </div>
      )}
              <div className={style.text}>
                <h4>Watching video</h4>
              </div>
              <div className={style.Container2}>
                <div className={style.NmeRle}>
                  <span>Alise</span>
                  <p>Founder</p>
                </div>
                <Image
                  className={style.profile}
                  src="/Founder_Man.png"
                  alt="profile"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Review}>
        <div className={style.Iconsec}>
          <div className={style.Icon1}>
            <div>
              <Image
                className={style.Task}
                src="/Task_Complted.png"
                alt="Task"
                width={1000}
                height={1000}
              />
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
            <div className={style.Icon2}>
              <div>
                <Image
                  className={style.Task1}
                  src="/Rating_Stars.png"
                  alt="Task"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className={style.Count2}>
                <h1 className={style.Subcount}>
                  <Counter target={25} suffix="+" />
                </h1>
                <span className={style.label2}>Happy Clients</span>
              </div>
            </div>
            <div className={style.Strline1}></div>
          </div>
          <div className={style.Iconsec1}>
            <div className={style.Icon2}>
              <div>
                <Image
                  className={style.Task1}
                  src="/Award.png"
                  alt="Task"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className={style.Count3}>
                <h1 className={style.Subcount}>
                  <Counter target={15} suffix="+" />
                </h1>
                <span className={style.label1}>Award Winning</span>
              </div>
            </div>
            <div className={style.Strline}></div>
          </div>
        </div>
      </div>
    </>
  );
}
