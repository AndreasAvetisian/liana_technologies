import React from "react";
import styles from "../styles/LianaCloud.module.scss";

export default function LianaCloud() {
    return (
        <div className={styles.lianaCloudContent}>
            <div className={styles.lianaCloudLogo} />
            <div className={styles.lianaCloudComponents}>
                <div className={styles.lianaCloud_Component}>
                    <div className={styles.solution_email_marketing}></div>
                    <div className={styles.componentTitle}>Email Marketing</div>
                    <div className={styles.componentText}>Tool for professional newsletters</div>
                </div>
                <div className={styles.lianaCloud_Component}>
                    <div className={styles.solution_marketing_automation}></div>
                    <div className={styles.componentTitle}>Marketing Automation</div>
                    <div className={styles.componentText}>Platform for multichannel marketing automation</div>
                </div>
                <div className={styles.lianaCloud_Component}>
                    <div className={styles.solution_pr_media}></div>
                    <div className={styles.componentTitle}>PR & Media</div>
                    <div className={styles.componentText}>Solutions for press releases and media monitoring</div>
                </div>
                <div className={styles.lianaCloud_Component}>
                    <div className={styles.solution_website_mobile}></div>
                    <div className={styles.componentTitle}>Websites</div>
                    <div className={styles.componentText}>Websites for easy content management</div>
                </div>
                <div className={styles.lianaCloud_ComponentX}>
                    <div className={styles.solution_commerce}></div>
                    <div className={styles.componentTitle}>Commerce</div>
                    <div className={styles.componentText}>Tailored online stores</div>
                </div>
            </div>
        </div>
    );
}