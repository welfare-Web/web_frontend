"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import style from "@/app/(site)/services/service.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "@/public/work_team_8k.jpg";
import img2 from "@/public/image_2_8k.jpg";
import img3 from "@/public/image_3_8k.jpg";
import { SERVICES } from "./serviceData";
import './globals.css'
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";


export default function Services() {
  useFadeInOnScroll();

  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ rotating circle image (your same design)
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const onIteration = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIndex((prev) => (prev + 1) % images.length);
        });
      });
    };

    circle.addEventListener("animationiteration", onIteration);
    return () => circle.removeEventListener("animationiteration", onIteration);
  }, [images.length]);


  const goToDiv = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
      <div className={style.main}>

        {/*section1*/}
        <section className={style.sec1}>
          <div className={`${style.sec1_1} reveal-group`}>
            <div className={style.cont}>
              <h1 className={style.txt4}>
                Services <br />
                <span>
                  <a className={style.serbttn} href="/">Home</a> /<span className={style.ser}> Services</span>
                </span>
              </h1>
              <h1 className={style.txt1}>WE ARE IT EXPERTS</h1>
              <h1 className={style.txt2}>Smart Digital Solutions For Your Growth.</h1>
              <h2 className={style.txt3}>
                Our team builds reliable and responsive IT systems tailored to meet your unique business
                needs.
              </h2>
              <button className={style.btn1} onClick={() => goToDiv("section2")} >Explore</button>
            </div>
          </div>

          <div className={style.sec1_2}>
            <div className={style.tri}>
              <Image
                src="/bg23-remove.png"
                className={style.trimg}
                loading="lazy"
                alt="arrow"
                width={1500}
                height={1500}
              />
            </div>

            <div ref={circleRef} className={`${style.cir}`}>
              <Image
                src={images[index]}
                alt="service"
                loading="lazy"
                fill
                className={style.circleImage}
              />
            </div>
          </div>
        </section>

        {/* Marquee */}
        <section className={style.sec2}>
          <div className={style.marquee}>
            <span>Growth</span>
            <span className={style.spantxt}>Innovation</span>
            <span>Success</span>
            <span className={style.spantxt}>Impact</span>
            <span>Technology</span>

            {/* duplicate */}
            <span className={style.spantxt}>Growth</span>
            <span>Innovation</span>
            <span className={style.spantxt}>Success</span>
            <span>Impact</span>
            <span className={style.spantxt}>Technology</span>
          </div>
        </section>

        {/* About */}
        <section className={`${style.sec3}`}>
          <div className={`${style.sec3_1}`}>
            <div className={style.rect}></div>
            <div className={style.circle}></div>
          </div>

          <div className={style.sec3_2}>
            <div className={style.lineo}>
              <div className={style.line_wrapper}>
                <div className={style.line}></div>
                <div className={style.dot}></div>
              </div>
              <div className={style.txt}>
                <h2 className={style.sec3txt3}>OUR COMPANY</h2>
              </div>
            </div>

            <h1 className={`${style.sec3txt2} ${style.sec3txt21}`}>Our Technology Services</h1>
            <h1 className={style.sec3para1}>
              We deliver reliable and scalable technology solutions tailored to your business needs. Our
              services are designed to improve performance, security, and efficiency.
            </h1>

            <h1 className={style.sec3txt2}>What We Do Best</h1>
            <h1 className={style.sec3para1}>
              We turn complex business challenges into smart digital solutions. Our expertise lies in
              building stable, high-performance systems.
            </h1>

            <h1 className={style.sec3txt2}>Our Expertise & Solutions</h1>
            <h1 className={style.sec3para1}>
              Our team combines experience with modern technology to deliver results. We provide customized
              solutions across software, infrastructure, and support.
            </h1>
          </div>
        </section>

        {/* Heading */}
        <section className={`${style.sec4} reveal-section`} id="section2">
          <div className={style.sec4_1}>
            <div className={style.lineo1}>
              <div className={style.line_wrapper}>
                <div className={style.line}></div>
                <div className={style.dot}></div>
              </div>
              <div className={style.txtt}>
                <h2 className={style.sec1txt4}>OUR BEST SERVICES</h2>
              </div>
              <div className={style.line_wrapper}>
                <div className={style.line}></div>
                <div className={style.dot}></div>
              </div>
            </div>
            <h1 className={style.sec4txt2}>We Are Service Your Business</h1>
          </div>
        </section>

        {/* ✅ Dynamic Services Cards */}
        <section className={`${style.sec5} reveal-section`}>
          {SERVICES.map((item, i) => (
            <div className={style.card1} key={item.slug}>
              <div className={style.sec5img1}>
                <Image
                  src={item.img}
                  className={style.sec5img1_1}
                  alt={item.title}
                  loading="lazy"
                  width={1500}
                  height={1500}
                />
              </div>

              <div className={style.cir1}>
                <Image src={item.icon} className={style.cir1img} loading="lazy" alt="icon" width={1500} height={1500} />
              </div>

              <h1 className={style.sec5txt1}>{item.title}</h1>
              <h1 className={style.sec5para1}>{item.desc}</h1>

              <div className={style.sec5btn}>
                <div className={style.blueLine}></div>

                <div className={style.arr}>
                  <span className={style.readIndex}>{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className={style.arr1}>
                  <button
                    className={style.sec5btn1}
                    onClick={() => router.push(`/services/${item.slug}`)}
                  >
                    Explore <RiArrowRightDoubleFill className={style.arrimg} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={`${style.sec6} reveal-section`}>
                <div className={style.sec6_1}>
                    <h1 className={style.sec6para1}>&lt;&lt; WHY CHOOSE US &gt;&gt;</h1>
                    <h1 className={style.sec6txt1}>We Power Your Digital Growth</h1>
                    <h1 className={style.sec6txt1}>Choose the Right Service for Your Business</h1>
                    <h1 className={style.sec6para2}>We deliver business-focused IT solutions with smart design, seamless management, and reliable support. Our services are crafted to help companies scale faster, operate smarter, and stay competitive in the digital era.</h1>
                    <div className={style.line_wrapper1}>
                        <div className={style.line1}></div>
                        <div className={style.dot1}></div>
                    </div>
                    <div className={style.sec6_1_1}>
                    <div className={style.sec6img1}>
                        <Image src="/imgs10045.jpg" className={style.sec6img1_1} loading="lazy" alt='arrow' width={1500} height={1500} />
                    </div>
                    <div className={style.sec6box}>
                        <div className={style.sec6box1}>
                            <div className={style.sec6imgbox}>
                                <Image src="/Expert.png" className={style.sec6boximg1} loading="lazy" alt='arrow' width={1500} height={1500} style={{width:"60px", height:"60px"}}/>
                            </div>
                            <div className={style.sec6boxtxt}>
                                <h1 className={style.sec6boxtxt1}>Expert Development Team</h1>
                                <h1 className={style.sec6boxpara1}>Our skilled engineers, designers, and strategists work together to deliver high-quality, scalable digital solutions tailored to your goals.</h1>
                            </div>
                        </div>

                        <div className={style.sec6box1}>
                            <div className={style.sec6imgbox}>
                                <Image src="/Delivery.png" className={style.sec6boximg1} loading="lazy" alt='arrow' width={1500} height={1500} style={{width:"80px", height:"80px"}}/>
                            </div>
                            <div className={style.sec6boxtxt}>
                                <h1 className={style.sec6boxtxt1}>Professional Service Delivery</h1>
                                <h1 className={style.sec6boxpara1}>We follow industry best practices, transparent processes, and strict quality standards to ensure reliable and timely project execution.</h1>
                            </div>
                        </div>

                        <div className={style.sec6box1}>
                            <div className={style.sec6imgbox}>
                                <Image src="/Modern.png" className={style.sec6boximg1} loading="lazy" alt='arrow' width={1500} height={1500} style={{width:"60px", height:"60px"}}/>
                            </div>
                            <div className={style.sec6boxtxt}>
                                <h1 className={style.sec6boxtxt1}>Modern Technology Stack</h1>
                                <h1 className={style.sec6boxpara1}>We leverage the latest frameworks, tools, and platforms to build secure, high-performance applications that future-proof your business.</h1>
                            </div>
                        </div>
                        
                        <div className={style.sec6box1}>
                            <div className={style.sec6imgbox}>
                                <Image src="/Long-term.png" className={style.sec6boximg1} loading="lazy" alt='arrow' width={1500} height={1500} style={{width:"70px", height:"70px"}}/>
                            </div>
                            <div className={style.sec6boxtxt}>
                                <h1 className={style.sec6boxtxt1}>Long-Term Support & Experience</h1>
                                <h1 className={style.sec6boxpara1}>With years of hands-on experience, we provide continuous support, maintenance, and guidance even after project delivery.</h1>
                            </div>
                        </div>
                    </div>

                    
                    </div>
                </div>

                <div className={style.sec6_2}>
                    <div className={style.sec6_2_1}>
                    <Image src="/business-team-meeting.jpg" className={style.sec6sec2img1} loading="lazy" alt='arrow' width={1500} height={1500} />
                    <Image src="/circle1.png" className={style.sec6sec2img2} loading="lazy" alt='arrow' width={1500} height={1500} />
                    </div>
                    <div className={style.sec6_2_2}>
                        <h1 className={style.sec6_2txt1}><span className={style.sec6_2spantxt1}>Strategically:</span>  deliver customer-focused digital solutions that emphasize quality, performance, and long-term business value through modern technology.</h1>
                    </div>
                </div>
            </section>
      </div>
    </>
  );
}