"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./carrier.module.css";
import './globals.css'
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

import { CAREER } from "./careerierdata";

// Assuming these images exist in your public folder or imported
import img1 from "@/public/1010.jpg";
import img3 from "@/public/sideimg4.png";
import img2 from "@/public/sideimg5.png";
import { useRouter } from "next/navigation";




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
    <h2 ref={ref} className={style.statnumber}>
      {count}
      {suffix}
    </h2>
  );
}

export default function Career() {
  const router = useRouter();
  useFadeInOnScroll();
  const handleClick = () => {
    const target = document.getElementById("section3");
    target?.scrollIntoView({ behavior: "smooth" });
  };


  // Typing Effect State
  const words = ["Future", "Growth", "Success"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typeSpeed = 100;
  const deleteSpeed = 80;
  const delayAfterWord = 1000;

  // Image Slider State
  const [currentImg, setCurrentImg] = useState(img1);
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000); // Speed up slightly for better UX
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentImg(images[index]);
  }, [index]);

  // Typing Effect Logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;
    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayAfterWord);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className={style.pageWrapper}>
      {/* --- HERO SECTION --- */}
      <div className={style.mainhero}>
        <div className={style.hero}>
          <div className={style.sec1}>
            <div className={style.bgimg}>
              <div className={style.circleimg}>
                <Image className={style.cirimg} src="/round.png" alt="circle" width={200} height={200} loading="lazy" />
              </div>
              <div className={style.sec2}>
                <div className={style.rec}></div>
                <div className={style.content}>
                  <h1 className={style.htext}>
                    Build Your <br />
                    <span className={style.typeWrapper}>
                      <span className={style.typing}>
                        {text}
                        <span className={style.cursor}>|</span>
                      </span>
                    </span>{" "}
                    <span className={style.withUs}>With us</span>
                  </h1>
                  <p className={style.ptext}>
                    If you are passionate about technology, digital solutions, or innovation and want to build a meaningful career, we would love to hear from you.
                  </p>
                  <p className={style.ptext}><span className={style.lipa}><a href="/">Home</a></span> / <span className={style.lipa1}>Career</span></p>
                  <div className={style.buttonexp}>
                    <button className={style.btnexp} onClick={handleClick}>
                      <span>Explore</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={style.triangleimg}>
                <Image className={style.triimg} src="/arr.png" alt="triangle" width={100} height={100} />
              </div>
            </div>
          </div>
          <div className={style.sideimg}>
            <Image src={currentImg} alt="slide-img" className={style.sideimg1} width={1000} height={1000} loading="lazy" />
          </div>
        </div>
      </div>

     {/* --- SECTION 2 (About/Stats) --- */}
<div className={style.section2}>
  <div className={style.sec2Wrapper}>
    
    {/* LEFT SIDE: Image Composition */}
    <div className={style.leftSide}>
      
      {/* Background Animated Shape */}
      <div className={style.animShape}>
        <Image src="/anisec.png" width={500} height={500} alt="shape" loading="lazy" />
      </div>

      <div className={style.imageGrid}>
        {/* Top Image (Group) */}
        <div className={style.imgTop}>
          <Image src="/proimg1.png" width={500} height={500} alt="Team" className={style.coverImg} loading="lazy" />
        </div>
        
        {/* Bottom Image (Man at desk) */}
        <div className={style.imgBottom}>
          <Image src="/proimg21.png" width={500} height={500} alt="Work" className={style.coverImg} loading="lazy" />
        </div>

        {/* Blue Badge Overlay */}
        <div className={style.blueBadge}>
          <div className={style.badgeContent}>
             <div className={style.checkIconBadge}>
                 <Image src="/checkimg2.png" className={style.checkimg} width={50} height={30} alt="check" loading="lazy" />
            </div>
             {/* Using your existing Counter component here */}
            <div className={style.bluecircon}>
                   <Counter className={style.countnum} target={25} suffix="+" />
                  <p className={style.leftcentexsec2t}>Completed Project</p>
            </div>
           
          </div>
          {/* Rotating text or ring image */}
          <Image className={style.badgeRing} src="/bluesec2.png" width={900} height={900} alt="ring" />
          
        </div>
        
      </div>
     
    </div>

    {/* RIGHT SIDE: Text Content */}
    <div className={style.rightSide}>
      <div className={style.contentBox}>
        <h4 className={style.subHeading}>--- WE ARE HIRING ---</h4>
        <h1 className={style.mainHeading}>GROW YOUR CAREER WITH US</h1>
        <p className={style.description}>
          Join our team of innovators and make a global impact.
        </p>
         <p className={style.ptext2_2}>We offer real-time project exposure across multiple domains, continuous learning and skill development opportunities, mentorship from experienced industry professionals, performance-driven career growth and recognition, and a healthy work culture focused on teamwork and innovation.</p>
          <p className={style.ptext2_3}>We invest in continuous learning and career development through:</p>
              

        {/* Checkboxes */}
        <div className={style.checklist}>
          <div className={style.checkItem}>
            <span className={style.iconBox}><Image src="/checkimg1.png" width={20} height={20} alt="tick"  loading="lazy"/></span>
            <span className={style.checkText}>Innovative Environment</span>
          </div>
          <div className={style.checkItem}>
            <span className={style.iconBox}><Image src="/checkimg1.png" width={20} height={20} alt="tick"  loading="lazy"/></span>
            <span className={style.checkText}>Global Impact Projects</span>
          </div>
          <div className={style.checkItem}>
            <span className={style.iconBox}><Image src="/checkimg1.png" width={20} height={20} alt="tick"  loading="lazy"/></span>
            <span className={style.checkText}>Professional Growth</span>
          </div>
        </div>

        {/* Button */}
            <Link href="/about_us">
              <button className={style.ctaButton}>
                <span>About More</span>
              </button>
            </Link>
      </div>

      {/* 3D Character (Absolute Positioned at Bottom Right) */}
      <div className={style.avatarContainer}>
        {/* Make sure to use the path to your 3D character image here */}
        <Image src="/rightimgsec2_11.png" width={300} height={300} alt="Avatar" className={style.avatarImg} loading="lazy" />
         
      </div>
      
    </div>

  </div>
</div>

      {/* --- SECTION 3 (Cards) --- */}
      <div className={style.section3} id="section3">
        <h2 className={style.htext1}>We are Hiring!</h2>
        <div className={style.s3Container}>
          <div className={style.s3CardGrid}>
            {CAREER.map((item) => (
              <div key={item.slug} className={style.s3ServiceCard}>
                <div className={style.s3TopArc}>
                  <div className={style.s3WhiteLine}></div>
                </div>
                <div
                  className={style.s3HoverBg}
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                <div className={style.s3ImageHolder}>
                  <img src={item.img} alt={item.title} />
                  <span className={style.s3NumberBadge}>{item.index}</span>
                </div>

                <div className={style.s3Content}>
                  <div className={style.s4TextFields}>
                    <h3 className={style.s3Title}>{item.title}</h3> 
                  </div>
                  <Link href={`/career/${item.slug}`} className={style.s3ArrowButton}>
                    <span>Apply →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 4 (Why Choose Us) --- */}
      <div className={style.section4}>
        <div className={style.sec4_1}>
          <div className={style.sec4_1htxt}>
            <h2>Why choose us</h2>
          </div>
          <div className={style.sec4_1con}>
            {/* Left Card */}
            <div className={style.sec4_1conleft}>
              <div className={style.sec4_1conleftimg}>
              <Image
                    src="/growthser.png"
                    alt="check"
                    className={style.sec4_1imglef}
                    width={1000}
                    height={1000}
                    loading="lazy"
                  />
              </div>
              <div className={style.sec4_1conleftcon}>
                <div className={style.sec4_1conleftconhtxt}>
                  <h3>Driving Business Growth</h3>
                </div>
                <div className={style.sec4_1conleftconptxt}>
                  <p>To deliver innovative, secure, and scalable IT solutions that empower businesses to grow in a digital world.</p>
                </div>
                <Link href="/about_us#about-sec1" className={style.sec4_1conrightconlink}>
                  <span className={style.linkText}>Read More</span>
                  <span className={style.arrow}>»</span>
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className={style.sec4_1conright}>
              <div className={style.sec4_1conrightimg}>
                <Image
                    src="/secureser.png"
                    alt="check"
                    className={style.sec4_1imgrigh}
                    width={1000}
                    height={1000}
                    loading="lazy"
                  />
              </div>
              <div className={style.sec4_1conrightcon}>
                <div className={style.sec4_1conrightconhtxt}>Secure & Scalable Solutions</div>
                <div className={style.sec4_1conrightconptxt}>
                  <p>We combine technology, expertise, and execution excellence to deliver scalable and secure digital solutions across industries.</p>
                </div>
                <Link href="/about_us#about-sec5" className={style.sec4_1conrightconlink}>
                  <span className={style.linkText}>Read More</span>
                  <span className={style.arrow}>»</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

