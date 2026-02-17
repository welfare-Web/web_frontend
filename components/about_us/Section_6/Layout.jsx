"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Layout.module.css";

export default function FaqSection() {
  const [open, setOpen] = useState(1);

  const faqs = [
    {
      q: "What IT services do you offer?",
      a: "We provide end-to-end IT solutions including custom software development, web and mobile applications, cloud services, IT consulting, AI automation, and ongoing technical support.",
    },
    {
      q: "Do you develop custom solutions for businesses?",
      a: "Yes. All our solutions are custom-built to match your business goals, processes, and scalability requirements.",
    },
    {
      q: "How do you ensure data security and confidentiality?",
      a: "We follow industry-standard security practices, data encryption, access controls, and strict confidentiality agreements to protect client data.",
    },
    {
      q: "Do you provide support after project delivery?",
      a: "Absolutely. We offer post-launch support, maintenance, updates, and performance optimization to ensure long-term success.",
    },
    {
      q: "How can we start a project with you?",
      a: "Simply contact us through our website or email. Our team will discuss your requirements and propose the best solution for your business.",
    },
  ];

  return (
    <section className={styles.section} >
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.tag}>« OUR FAQ US »</span>

          <h1 className={styles.title}>
            We Fast Frequently Asked <br /> The Questions Now
          </h1>

          <div className={styles.profileRow}>
            <div className={styles.imageWrap}>
              <Image
                src="/Faq2.png" /* replace image */
                alt="team"
                width={260}
                height={260}
              />
            </div>

            <div className={styles.expBox}>
              <div className={styles.expyear}>  
                <p className={styles.expNum}>1+</p>
              <p className={styles.expText}>
                Years <br /> Experience
              </p>
              </div>

            </div>
          </div>
          <div className={styles.linetxt}>
            <div className={styles.line}></div>
            <div className={styles.txtcont}>
              <h3 className={styles.subTitle}>
                Trusted IT Solutions, Clear Answers
              </h3>
              <p className={styles.desc}>
                We believe clarity builds confidence. Our FAQ section answers
                the most common questions about our IT services, processes, and
                support so you can make informed decisions with ease and trust.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {faqs.map((item, i) => {
            const active = open === i;

            return (
              <div key={i} className={styles.faqItem}>
                <div
                  className={`${styles.faqHead} ${
                    active ? styles.activeHead : ""
                  }`}
                  onClick={() => setOpen(active ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={styles.icon}>{active ? "−" : "+"}</span>
                </div>

                {active && item.a && <p className={styles.faqBody}>{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
