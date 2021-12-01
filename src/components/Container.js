import React from "react";
import styles from "../styles/Container.module.scss";
import Blogs from "./Blogs";
import LianaCloud from "./LianaCloud";

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

    var lianaCloud = (
        <div className={styles.lianaCloudContent}>
            <div className={styles.lianaCloudTitle}>
                <div className={styles.title}>Liana®Cloud is the Technology Stack for Marketing Teams</div>
                <div className={styles.underText}>With Liana®Cloud, we offer you the right solutions for everything you need in your digital marketing and communications. All Liana® tools are integrated with each other and made to custom fit your individual marketing needs. Liana®Cloud powers your marketing and communications team with a single-sign-on platform that takes the data-driven marketing to the next level with no integration or IT headache.</div>
            </div>
            <div>
                <LianaCloud/>
            </div>
        </div>
    ); 

    return (
        <div className={styles.containerContent}>
            <div className={styles.backgroundPicture}>
                {backgroundPictureContent}
            </div>
            <div className={styles.lianaCloud}>
                {lianaCloud}
            </div>
            <div className={styles.blogStyle}>
                {blogBox}
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