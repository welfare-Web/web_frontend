"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Layout.module.css";
import Image from "next/image";

const reviews = [
  {
    name: "Ashwin Murugan",
    role: "Backend Developer",
    image: "/Review0011.png",
    text: "Outstanding problem-solving skills and modern technology approach.They consistently exceed expectations with their work.",
  },
  {
    name: "Ranjith Babu",
    role: "Front-End Developer",
    image: "/Review002.png",
    text: "Great work culture with supportive and skilled colleagues.They truly value innovation and client satisfaction..",
  },
  {
    name: "Sathyavel Saravanan",
    role: "Python Developer",
    image: "/Review012.jpeg",
    text: "Their expertise in modern technologies and proactive approach helped us stay competitive in a fast-changing digital environment.",
  },
  {
    name: "Sridhar Saravanan",
    role: "Java Developer",
    image: "/Review04.jpeg",
    text: "The project was handled efficiently, and the final outcome exceeded our expectations. Strongly recommend them for IT services.",
  },
  {
    name: "Harish Ravi",
    role: "React Developer",
    image: "/Review066.png",
    text: "They truly value client satisfaction.Professional team delivering high-quality solutions on time. Excellent communication and strong technical expertise.",
  },
  {
    name: "PS Mohan Raj",
    role: "Cyber Security",
    image: "/Review006.png",
    text: "Their expertise in modern technologies and proactive approach helped us stay competitive in a fast-changing digital environment.",
  },
];

export default function Reviewcontent() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  /* 🔁 CONTINUOUS AUTO SLIDE */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, [totalSlides]);

  /* 🔄 Restart auto slide after dot click */
  const handleDotClick = (i) => {
    setIndex(i);
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  return (
    <div className={styles.bgreview} id="section7">
      <section className={styles.section}>
        <h5 className={styles.subTitle}>
          « OUR TEAM  »
        </h5>
        <h2 className={styles.title}>Meet the Experts Behind Our Success</h2>

        {/* SLIDER */}
        <div className={styles.sliderWrapper}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className={styles.slide} key={slideIndex}>
                {reviews
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((item, i) => (
                    <div className={styles.reviewWrapper} key={i}>
                      <div className={styles.card}>
                        <div className={styles.stars}>★★★★★</div>
                        <p className={styles.reviewText}>{item.text}</p>
                      </div>

                      <div className={styles.userBox}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={1000}
                          height={1000}
                          className={styles.avatar}
                        />
                        <div>
                          <h4 className={styles.userName}>{item.name}</h4>
                          <span className={styles.userRole}>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className={styles.dots}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${index === i ? styles.active : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}