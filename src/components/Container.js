import React from "react";
import styles from "../styles/Container.module.scss";
import BlogComponent from "./BlogComponentsList";
import lianacast from "../pictures/blog/lianacast.jpg";
import milloin_integroida from "../pictures/blog/milloin_integroida_kassajarjestelma.jpg";
import onboarding from "../pictures/blog/onboarding.jpg";

export default function Container() {

    const dataa = [
        {
            id: 0, 
            img: <img src={lianacast} className={styles.lianaCastPicture}/>,
            title: 'LianaCast: Dubai Expo 2020', 
            time: '29.10.2021'
        },
        {
            id: 1, 
            img: <img src={milloin_integroida} className={styles.milloin_integroidaPicture}/>,
            title: 'A Successful Customer Onboarding Process – What Is It?', 
            time: '29.10.2021'
        },
        {
            id: 2, 
            img: <img src={onboarding} className={styles.onboardingPicture}/>,
            title: 'Webinar recording: Boost your event communication', 
            time: '29.10.2021'
        }
    ];

    var backgroundPictureContent = (
        <div className={styles.backgroundPictureContent}>
            <div className={styles.bgPicTitle}><h1>Your complete Marketing & PR Technology Stack</h1></div>
            <div className={styles.bgPicButtonBox}>
                <button type="button" className={styles.bgPicButton}>Get your free demo</button>
            </div>
        </div>
    );

    var blog = (
        <div className={styles.blogContent}>
            <div className={styles.blogContentTop}>
                <div className={styles.blogTitle}>Blog</div>
                <div className={styles.moreBlogButtonBox}>
                    <button type="button" className={styles.moreBlogButton}>More blog articles</button>
                </div>
            </div>
            <div className={styles.blogContentBottom}>
                <div className={styles.blogComponents}>
                   <BlogComponent data={dataa}/>
                   <BlogComponent/>
                   <BlogComponent/>
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.containerContent}>
            <div className={styles.backgroundPicture}>
                {backgroundPictureContent}
            </div>
            <div className={styles.blog}>
                {blog}
            </div>
            <div className={styles.CliEmpDai}>

            </div>
            <div className={styles.latestNews}>

            </div>
            <div className={styles.references}>

            </div>
            <div className={styles.subscribe}>

            </div>
        </div>
    );
}