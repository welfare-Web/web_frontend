"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";

const data = [
  {
    title: "Our Vision",
    desc: "To become a globally trusted IT, AI, and healthcare services partner, recognized for delivering innovative, ethical, and high-quality digital solutions that empower businesses and professionals worldwide.",
  },
  {
    title: "Our Mission",
    desc: "Our mission is to create meaningful impact through technology, automation, and knowledge.",
    list: [
      "Deliver reliable and scalable digital solutions that align with evolving business requirements",
      "Automate and optimize complex business workflows to improve productivity and operational efficiency",
      "Enhance healthcare revenue performance through accurate, compliant, and data-driven RCM services",
      "Develop skilled professionals through industry-aligned training, internships, and consulting programs",
    ],
  },
  {
    title: "Our Core Values",
    sections: [
      {
        title: "Innovation",
        desc: "We embrace emerging technologies, AI-driven approaches, and continuous improvement to build forward-thinking solutions.",
      },
      {
        title: "Integrity",
        desc: "We believe in ethical practices, transparency, and accountability in every engagement.",
      },
      {
        title: "Quality Excellence",
        desc: "Our commitment to quality ensures reliable, secure, and high-performance deliverables.",
      },
      {
        title: "Customer-Centricity",
        desc: "We listen, understand, and collaborate closely with our clients to deliver measurable business outcomes.",
      },
      {
        title: "Continuous Growth",
        desc: "We foster a culture of learning and improvement for our team, partners, and clients.",
      },
    ],
  },
];

export default function ScrollSync() {
  const [active, setActive] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const containerRef = useRef(null);

  /* ✅ Detect Mobile */
  // useEffect(() => {
  //   const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);
  useEffect(() => {
  const check = () => setIsTabletOrMobile(window.innerWidth <= 1024);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

  /* ✅ Scroll Sync ONLY for Desktop */
  useEffect(() => {
    // if (isMobile) return;
    if (isTabletOrMobile) return;


    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const index = Math.min(
        data.length - 1,
        Math.floor(scrolled / window.innerHeight)
      );
      setActive(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isTabletOrMobile
]);
  
  /* ✅ Click Handler */
  const handleClick = (index) => {
    setActive(index); // Always update content

    if (isTabletOrMobile) return; // ❌ No scroll on mobile

    if (!containerRef.current) return;

    window.scrollTo({
      top:
        window.scrollY +
        containerRef.current.getBoundingClientRect().top +
        index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section 
      ref={containerRef}
      className={styles.section}
      // style={{
      //   height: isMobile ? "auto" : `${data.length * 100}vh`,
      // }}
      style={{
  height: isTabletOrMobile ? "auto" : `${data.length * 100}vh`,
}}

    >
      <div className={styles.sticky}>
        {/* LEFT / TOP BUTTONS */}
        <div className={styles.left}>
          {data.map((item, i) => (
            <h2
              key={i}
              onClick={() => handleClick(i)}
              className={`${styles.title} ${
                active === i ? styles.active : ""
              }`}
            >
              {item.title}
            </h2>
          ))}
        </div>

        {/* CONTENT */}
        <div className={styles.right}>
          <div className={styles.content}>
            <h1>{data[active].title}</h1>

            {data[active].desc && <p>{data[active].desc}</p>}

            {data[active].list && (
              <ul className={styles.bulletList}>
                {data[active].list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {data[active].sections && (
              <div className={styles.values}>
                {data[active].sections.map((item, idx) => (
                  <div key={idx} className={styles.valueCard}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}