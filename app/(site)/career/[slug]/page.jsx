"use client";

import style from '../car.module.css';
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import { CAREER_PAGES } from "../careerierdata";

export default function Car() {
    useFadeInOnScroll();
    const params = useParams();
    const router = useRouter();

    const slug = params?.slug;
    const page = CAREER_PAGES?.[slug];

    const videoRef = useRef(null);
    const [active] = useState(0);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    const handleClick1 = () => {
        const target = document.getElementById("Section3");
        target?.scrollIntoView({ behavior: "smooth" });
    };


  

    return (
        <div className={style.pageWrapper}>
            {/* Video Background */}
            <div className={style.videoBackground}>
                <video autoPlay muted loop playsInline ref={videoRef}>
                    <source src="/vid.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Main Content Overlay */}
            <div className={style.white_screen}>
                <div className={style.main}>
                    
                    {/* --- SECTION 1 --- */}
                    <div className={style.sec1}>
                        <div className={style.sec1_2}>
                            <div className={style.sec1_2_1}>
                                <div className={style.sec1_2_11}>
                                    <h1 className={style.h1txt}>Join Us</h1>
                                    <h1 className={style.h1txt2}>Grow, Learn, and Succeed Together</h1>
                                    <p className={style.sec1para1}>
                                        At our company, we believe great work starts with great people. Discover a workplace where your skills are valued, your growth is supported, and your work truly matters.
                                    </p>
                                    <p className={style.sec1para1}><span className={style.libt} onClick={() => router.push("/")}>Home</span> / <span className={style.libt} onClick={() => router.push("/career")}>Career</span> / <span className={style.libt1}>{page.hero.title}</span></p>
                                </div>
                                <div className={style.sec1_2_12}>
                                    <button className={style.sec1btn1} onClick={handleClick1}>I am Interested</button>
                                </div>
                            </div>

                            <div className={style.sec1_2_2}>
                                <Image 
                                    src="/trilge.png" 
                                    className={style.veclog} 
                                    alt='Hero Image' 
                                    width={1000} 
                                    height={1000} 
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- SECTION 2 --- */}
                    <div className={style.sec2}>
                        <div className={style.sec2_1}>
                            <h1 className={style.tit1}>Your Life at Our Company</h1>
                            <p className={style.cont1}>Our workplace is built around people, not just processes. We believe great results come when individuals feel encouraged, respected, and confident in what they do. Every day, we strive to create an environment where growth, fairness, and positivity shape the way we work.</p>
                            <p className={style.cont1}>We welcome individuals who are curious, driven, and ready to evolve. Whether you are taking your first steps in your career or building on years of experience, you will find opportunities to learn, experiment, and make meaningful contributions. Your ideas are valued, and your efforts never go unnoticed.</p>
                            <p className={style.cont1}>The way we succeed is by working together with openness and mutual respect. Team members communicate honestly, exchange ideas freely, and support one another in overcoming challenges. Responsibility and trust are shared, allowing everyone to take pride in their work.</p>
                            <p className={style.cont1}>Being part of our organization means more than holding a role. It means belonging to a supportive team that values well-being, continuous learning, and long-term progress. Here, your contributions create real impact, and your future grows alongside the company.</p>
                        </div>
                        <div className={style.sec2_2}>
                            <h1 className={style.tit1}>Why You'll Love Working With Us</h1>
                            <ul className={style.whyList}>
                                <li className={style.cont2}>A workplace that truly puts people and inclusion at the center</li>
                                <li className={style.cont2}>Clear opportunities to grow your skills and advance your career</li>
                                <li className={style.cont2}>A team environment built on support, cooperation, and mutual respect</li>
                                <li className={style.cont2}>Work that creates real value and makes a positive difference</li>
                                <li className={style.cont2}>Leaders who guide, support, and mentor you at every stage</li>
                                <li className={style.cont2}>A culture that respects personal time and overall well-being</li>
                                <li className={style.cont2}>An environment that celebrates diversity and treats everyone fairly</li>
                            </ul>
                        </div>
                    </div>

                    {/* --- SECTION 3 --- */}
                    <div className={style.sec3} id='Section3'>
                        <div className={style.sec3_0}>
                            <h1 className={style.jtit}>{page.hero.title}</h1>
                        </div>
                        
                        <div className={style.sec3_01}>
                            <div className={style.sec3_1}>
                                <div className={style.sec3_1_1}>
                                    <h1 className={style.tit2}>Job Overview</h1>
                                    <p className={style.cont1}>{page.hero.joboverview_cont}</p>
                                </div>
                                <div className={style.sec3_1_2}>
                                    <h1 className={style.tit2}>Job Description</h1>
                                    <p className={style.cont1}>{page.hero.jobodesc_cont}</p>
                                </div>
                                <div className={style.sec3_1_2}>
                                    <h1 className={style.tit2}>Key Responsibilities</h1>
                                    <ul className={style.list}>
                                        {page.hero.key_responsiblities.map((item, index) => (
                                            <li key={index} className={style.cont1}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={style.sec3_1_3}>
                                    <h1 className={style.tit2}>Qualifications & Requirements</h1>
                                    <ul className={style.list}>
                                        {page.hero.qualification_requirements.map((item, index) => (
                                            <li key={index} className={style.cont1}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className={style.sec3_02}>
                            <button className={style.sec1btn2}>
                                <span className={style.sec1btn2con}>Apply Now</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}