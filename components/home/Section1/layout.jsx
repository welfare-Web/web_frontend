"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import styles from "../hero.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import { useRouter } from "next/navigation";


const images1 = ["/web5.png", "/web4.png", "/web2.png"];
const images2 = ["/ai3.png", "/ai2.png", "/ai1.png"];
const images3 = ["/digital1.png", "/automate.png", "/digital3.png"];
const images4 = ["/publish.png", "/medical1.png", "/medical2.png"];



export default function section(){

useFadeInOnScroll();

const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images1.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

    return(
        <>
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
        </>
    )
}