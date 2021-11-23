import React from "react";
import styles from "../styles/Container.module.scss";
import lianacast from "../pictures/blog/lianacast.jpg";

export default function Container() {

    var backgroundPictureContent = (
        <div className={styles.backgroundPictureContent}>
            <div className={styles.bgPicTitle}>Software fueling digital marketing</div>
            <div className={styles.bgPicButtonBox}>
                <button type="button" className={styles.bgPicButton}>Learn more</button>
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
                <div className={styles.lianaCast}>
                    <div>
                        <img src={lianacast}/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.milloin_integroida}>2</div>
                <div className={styles.onboarding}>3</div>
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