"use client";
import { useState } from "react";
import styles from "./VisionMissionTabs.module.css";

const tabs = [
  {
    id: 1,
    label: "Our Commitment to Clients",
    title: " Building trusted partnerships that deliver lasting value.",
    desc: "We don’t just deliver services—we build long-term partnerships. Our commitment is to support our clients at every stage of their digital journey, from strategy and implementation to optimization and growth.",
  },
  {
    id: 2,
    label: "Looking Ahead",
    title: "Shaping the future through innovation, intelligence, and impact.",
    desc: "As technology continues to evolve, we remain focused on AI-driven innovation, automation, healthcare transformation, and digital excellence. Our goal is to help organizations stay future-ready while creating sustainable value and meaningful impact",
  },
  {
    id: 3,
    label: "Let’s Build the Future Together",
    title:
      "Collaborating to create innovative, scalable, and lasting solutions.",
    desc: "Whether you’re looking to modernize your systems, scale your operations, or develop skilled talent, we’re here to help.",
  },
];

export default function VisionMissionTabs() {
  const [active, setActive] = useState(1);
  const current = tabs.find((t) => t.id === active);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Pills */}
        {/* <div className={styles.pills}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`${styles.pill} ${
                active === tab.id ? styles.active : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div> */}
    <div className={styles.pills}>
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActive(tab.id)}
      className={`${styles.pill} ${
        active === tab.id ? styles.active : ""
      }`}
    >
      <span>{tab.label}</span>
    </button>
  ))}
</div>


        {/* Text-only Card */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>{current.title}</h3>
            <p className={styles.desc}>{current.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
