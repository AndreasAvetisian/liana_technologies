import React from "react";
import styles from "../styles/Blogs.module.scss";
import lianacast from "../pictures/blog/lianacast.jpg";
import milloin_integroida from "../pictures/blog/milloin_integroida_kassajarjestelma.jpg";
import onboarding from "../pictures/blog/onboarding.jpg";
import dateIcon from "../pictures/blog/clock.png";

export default function Blogs(props) {

    const data = [
    {
        id: 0,
        img: "<img src={lianacast} className={styles.blogPictureSize}/>",
        title: "LianaCast: Dubai Expo 2020", 
        time: "29.10.2021"
    }

    ];

    return (
        <div className={styles.blogComponentStyle}>
            <div className={styles.blogField}>
                <div><img src={lianacast} className={styles.blogPictureSize}/></div>
                <div className={styles.blogText}>LianaCast: Dubai Expo 2020</div>
                <div className={styles.blogDate}><img src={dateIcon} width="11" height="11"/>&ensp;29.10.2021</div>
            </div>
            <div className={styles.blogField}>
                <div><img src={onboarding} className={styles.blogPictureSize}/></div>
                <div className={styles.blogText}>A Successful Customer Onboarding Process – What Is It?</div>
                <div className={styles.blogDate}><img src={dateIcon} width="11" height="11"/>&ensp;29.10.2021</div>
            </div>
            <div className={styles.blogField}>
                <div><img src={milloin_integroida} className={styles.blogPictureSize}/></div>
                <div className={styles.blogText}>Webinar recording: Boost your event communication</div>
                <div className={styles.blogDate}><img src={dateIcon} width="11" height="11"/>&ensp;29.10.2021</div>
            </div>
        </div>
    );
}