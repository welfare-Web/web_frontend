"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Contact.module.css";

export default function ContactHero() {
  const router = useRouter();

  function LinkedIn() {
    window.open(
      "https://www.linkedin.com/in/welfare-healthtech-a9703038a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "_blank"
    );
  }
  function Instagram() {
    window.open(
      "https://www.instagram.com/welfarehealthtech?igsh=cGl1cGd2bDhjZWt5",
      "_blank"
    );
  }
  function Twitter() {
    window.open("https://www.linkedin.com/in/your-profile-name/", "_blank");
  }
  function Facebook() {
    window.open("https://www.linkedin.com/in/your-profile-name/", "_blank");
  }
const goToDiv = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          {/* LEFT CONTENT */}
          <div className={styles.heroLeft}>
            <h1>
              CONTACT <span>US</span>
            </h1>
            <p className={styles.heroSubtitle}>Let&apos;s Start a Conversation</p>

            <p className={styles.heroDesc}>
              We&apos;d love to hear from you. Whether you have a question, need
              support, or want to discuss a new project, our team is here to
              help you every step of the way.
            </p>

            <button className={styles.heroButton} onClick={() => goToDiv("reach1")}>Learn More</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.heroRight}>
            <div className={styles.blob}>
              <Image
                src="/Contact.png"
                alt="Contact Illustration"
                width={1000}
                height={1000}
                priority
                className={styles.responsiveImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/*  Card Container  */}
      <div className={styles.Container}>
        <div className={styles.Innercontainer}>
          <div className={styles.SubContainer}>
            <div className={styles.CardCareer}>
              <h2>Careers at Our Company</h2>

              <p>
                We offer a professional IT workplace focused on skill
                development, collaborative teamwork, ethical practices, and
                long-term career growth for both freshers and experienced
                professionals.
              </p>
              <ul className={styles.points}>
                <li>Structured training & upskilling programs</li>
                <li>Hands-on experience with real-world IT projects</li>
                <li>Supportive mentorship and career guidance</li>
                <li>
                  Opportunities for freshers and experienced professionals
                </li>
              </ul>

              <button
                onClick={() => router.push("/career")}
                className={styles.careerBtn}
              >
                Explore Opportunities
              </button>
            </div>
          </div>
          <div className={styles.Imgcontainer}>
            <Image
              className={styles.CareerImg}
              src="/Career.png"
              alt="career"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* Another Card */}
      <div className={styles.meetingSection}>
        <div className={`${styles.Innercontainer} ${styles.reverseMobile}`}>
          <div className={styles.meetingImageWrap}>
            <Image
              className={styles.meetingImage}
              src="/ClientMeeting.png"
              alt="Client Meeting"
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.meetingContent} id="reach1">
            <div className={styles.meetingCard}>
              <h2 className={styles.meetingTitle}>Client Meeting Schedule</h2>

              <p className={styles.meetingDescription}>
                We ensure well-planned and timely client meetings to discuss
                project requirements, progress updates, and strategic alignment
                for successful delivery.
              </p>

              <ul className={styles.meetingPoints}>
                <li>Requirement discussion and project planning sessions</li>
                <li>Regular progress review and status update meetings</li>
                <li>Transparent communication with global clients</li>
                <li>Flexible scheduling based on client availability</li>
              </ul>

              <button className={styles.meetingBtn} onClick={() => router.push("/booking")}>Schedule a Meeting</button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <section className={styles.section}>
        <div className={styles.card}>
          {/* LEFT BLUE CARD */}
          <div className={styles.left}>
            <h3>Contact Information :</h3>
            <p className={styles.desc}>
              We’re here to help you with your IT needs. Reach out to us for
              project inquiries, technical support, or business collaborations.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={`${styles.icon} ${styles.iconSm}`}>
                  <Image src="/Call12.png" alt="call" width={24} height={24} />
                </span>
                <div className={styles.txt}>
                  <h4>Call This Now</h4>
                  <p>+91 9500654148</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={`${styles.icon} ${styles.iconMd}`}>
                  <Image src="/Gmail12.png" alt="call" width={24} height={24} />
                </span>
                <div className={styles.txt}>
                  <h4>General Enquiries</h4>
                  <p>welfarehealthtechslm@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={`${styles.icon} ${styles.iconSm}`}>
                  <Image src="/Locate12.png" alt="call" width={24} height={24} />
                </span>
                <div className={styles.txt}>
                  <h4>Office Address</h4>
                  <p>
                    G.F.379-1, SS Pushpam Complex, <br /> Five Roads,
                    <br />
                    Opposite Gowri Theater,
                    <br />
                    Salem, Tamil Nadu – 636004
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <p>Connect With Us :</p>
              <div className={styles.socialIcons}>
                <Image
                  onClick={LinkedIn}
                  className={styles.socialpng}
                  src="/In.png"
                  alt="LinkedIn"
                  width={34}
                  height={34}
                />
                <Image
                  onClick={Instagram}
                  className={styles.socialpng}
                  src="/Insta2.png"
                  alt="Instagram"
                  width={34}
                  height={34}
                />
                
              </div>
            </div>
          </div>

          {/* CENTER ARROW (Wrapped in div for easy hiding on mobile) */}
          <div className={styles.arrowWrapper}>
            <div className={styles.divider}>
              <span className={styles.line}></span>
              <span className={styles.arrow}></span>
            </div>
            <span className={styles.arrow1}></span>
          </div>

          {/* RIGHT FORM */}
          <div className={styles.right}>
            <span className={styles.subtitle}>« OUR CONTACT US »</span>
            <h2>
              Get free Business touch <br /> Let’s Build Your Digital Future.
            </h2>

            <p className={styles.text}>
              We provide customized IT solutions including software development,
              web & app design, cloud services, and technical support.
            </p>

            <form className={styles.form}>
              <div className={styles.row}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email address" required />
              </div>

              <textarea placeholder="Message" />

              <button type="submit">Send Request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}