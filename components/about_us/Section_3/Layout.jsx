"use client"
import { MoveRight } from "lucide-react";
import Image from "next/image";
import style from "./Layout.module.css";
import { useRouter } from "next/navigation";

const SolutionSystem = () => {
const goToDiv = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <div className={style.solution_container}>
      <div className={style.solution_wrapper}>
        <div className={style.content_panel}>
          <div className={style.blue_accent}></div>
          <div className={style.entirebox}>
            <div className={style.boxcont}>
              <div className={style.icon_box}>
                <Image
                  src="/Dumb.png"
                  alt="Dum Impression and Doller Symbol"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className={style.Conttxt}>
                <h2 className={style.title}>Our Team & Culture</h2>
                <div className={style.description}>
    <p> Our success is driven by a diverse team of experts working together in a
    collaborative, inclusive, and growth-focused culture.</p>
 

  <ul className={style.bulletList}>
    <li>Skill development and certifications</li>
    <li>Hands-on project exposure</li>
    <li>Mentorship and leadership development</li>
    <li>Ethical and transparent work practices</li>
  </ul>
   </div>
              </div>
            </div>
            <div className={style.action_row}>
              <div className={style.avatar_group}>
                <div className={style.avatar}></div>
                <div className={style.avatar1}></div>
                <div className={style.avatar2}></div>
              </div>

              <button className={style.more_btn} onClick={() => goToDiv("section7")}>
                More
                <span className={style.btnArrow}>
                  <MoveRight size={16} />
                </span>
              </button>
            </div>

            {/* <p className={style.footer_text}>
              Partnering with businesses of all sizes to solve complex
              challenges and unlock new opportunities. [{" "}
              <span>Lets Started</span> ]
            </p> */}
          </div>
        </div>
        {/* CENTER IMAGE PANEL - Creates the white gaps */}
        <div className={style.image_panel}>
          <div className={style.image_frame}>
            <Image
              src="/Impress.png"
              alt="Person working"
              fill
              priority
               style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* RIGHT CURVED PANEL */}
        <div className={style.curve_panel}></div>
      </div>
    </div>
  );
};

export default SolutionSystem;
