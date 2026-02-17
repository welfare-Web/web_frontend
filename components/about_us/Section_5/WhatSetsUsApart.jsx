"use client";
import styles from "./WhatSetsUsApart.module.css";
import { ShieldCheck, Layers, CheckCircle, TrendingUp } from "lucide-react";

export default function WhatSetsUsApart() {
  return (
    <section className={styles.section} id="about-sec5">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>What Sets Us Apart</h2>
          <p className={styles.description}>
            We combine technology, expertise, and execution excellence to
            deliver scalable and secure digital solutions across industries.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <Layers className={styles.icon} />
            <h3>Multi-Domain Expertise</h3>
            <p>
              We bring together expertise across IT services, AI & data,
              healthcare operations, and publishing—delivering integrated,
              cross-functional solutions under one roof.
            </p>
          </div>

          <div className={styles.card}>
            <CheckCircle className={styles.icon} />
            <h3>Quality-Driven Delivery</h3>
            <p>
              Every project follows structured workflows, rigorous quality
              checks, and best practices to ensure consistency, accuracy, and
              performance excellence.
            </p>
          </div>

          <div className={styles.card}>
            <ShieldCheck className={styles.icon} />
            <h3>Security & Compliance First</h3>
            <p>
              We prioritize data security, confidentiality, and regulatory
              compliance, especially in healthcare and AI-driven projects.
            </p>
          </div>

          <div className={styles.card}>
            <TrendingUp className={styles.icon} />
            <h3>Scalable Engagement Models</h3>
            <p>
              From pilot projects to enterprise-scale implementations, our
              flexible delivery models adapt to your business needs and growth
              plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
