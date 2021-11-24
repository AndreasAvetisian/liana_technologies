import React from "react";
import styles from "../styles/Container.module.scss";
import Blogs from "./Blogs";

export default function Container() {
    var backgroundPictureContent = (
        <div className={styles.backgroundPictureContent}>
            <div className={styles.bgPicTitle}><h1>Your complete Marketing & PR Technology Stack</h1></div>
            <div className={styles.bgPicButtonBox}>
                <button type="button" className={styles.bgPicButton}>Get your free demo</button>
            </div>
        </div>
    );
    
    var blogBox = (
        <div className={styles.blogContent}>
            <div className={styles.blogContentTop}>
                <div className={styles.blogTitle}>Blog</div>
                <div className={styles.moreBlogButtonBox}>
                    <button type="button" className={styles.moreBlogButton}>More blog articles</button>
                </div>
            </div>
            <div className={styles.blogContentBottom}>
                <Blogs/>
            </div>
        </div>
    );

    return (
        <div className={styles.containerContent}>
            <div className={styles.backgroundPicture}>
                {backgroundPictureContent}
            </div>
            <div className={styles.blogStyle}>
                {blogBox}
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