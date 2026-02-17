import style from './footnote.module.css'
import Image from 'next/image'
import Link from "next/link";



export default function footnote(){
    return(
        <>
        <div className={style.sec1} >
            <div className={style.sec1_1}>
                <div className={style.cont}>
                    <div className={style.cont1}>
                        <div className={style.cont1_1}>
                            <div className={style.logo1}>
                                <Image src="/Logo.png" className={style.logo} alt='logo' width={1500} height={1500} />
                            </div>
                            <div className={style.name}>
                                <h1 data-no-animate className={style.nametxt}>WELFARE<br/>HEALTHTECH</h1>
                            </div>
                        </div>
                        <h1 data-no-animate className={style.paratxt}>"We deliver scalable software, web, and digital solutions that help businesses innovate, optimize operations, and grow securely in a fast-changing tech landscape."</h1>
                        <div className={style.cont1_2}>
                            <div className={style.round1}><a href='https://www.linkedin.com/in/welfare-healthtech-a9703038a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><Image src="/linkedin1.png" className={style.logo2} alt='logo' width={1500} height={1500} /></a></div>
                            <div className={style.round1}><a href='https://www.instagram.com/welfarehealthtech?igsh=dWUxbG5oM2duMWJ6'><Image src="/instagram1.png" className={style.logo2} alt='logo' width={1500} height={1500} /></a></div>
                        </div>
                    </div>
                    <div className={style.cont2}>
                        <div className={style.cont2_1}>
                            <a  href="/" ><p data-no-animate className={style.navtext}>Home</p></a>
                            <a  href="/about_us"><p data-no-animate className={style.navtext}>About Us</p></a>
                            <a  href="/services"><p data-no-animate className={style.navtext}>Services</p></a>
                            <a  href="/career"><p data-no-animate className={style.navtext}>Career</p></a>
                            <a  href="/contact"><p data-no-animate className={style.navtext}>Contact Us</p></a>
                        </div>
                    </div>
                    <div className={style.cont3}>
                        <div className={style.cont2_1}>
                        <h1 data-no-animate className={style.nametxt1}>Quick Links</h1>
                        <a href="#" className={style.navtext}>Gallery</a>
                        <a href="#" className={style.navtext}>Team</a>
                        </div>
                    </div>
                    <div className={style.cont4}>
                        <div className={style.cont4_1}>
                        <iframe
                            title="Welfare HealthTech Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2814421263383!2d78.13266367587565!3d11.674455341986313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf17a651aa6eb%3A0xa615294c66a77469!2sWELFARE%20HEALTHTECH!5e0!3m2!1sen!2sin!4v1764304663011!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "0px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className={style.cont4_2}>
                            <h1 data-no-animate className={style.nametxt2}><b>Address:</b> Gf. 379-1, SS pushpam Complex, Bharadhi street, Opp. Gowri theatre, 5-Roads, Salem – 636 004</h1>
                            <h1 data-no-animate className={style.nametxt2}><b>Email:</b> info@welfarehealthtechslm.com</h1>
                            <h1 data-no-animate className={style.nametxt2}><b>Phone:</b> +9180568 05416</h1>
                        </div>
                    </div>
                </div>
                <div className={style.sec1_2}>
                    <h1 data-no-animate className={style.nametxtc}>© Copyright {new Date().getFullYear()} Welfare HealthTech All Rights Reserved.</h1>
                </div>
            </div>
        </div>
        </>
    )

}
