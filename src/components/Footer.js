import React from "react";
import styles from '../styles/Footer.module.scss';
import award_1 from "../pictures/footer/award_1.png";
import award_2 from "../pictures/footer/award_2.png";
import award_3 from "../pictures/footer/award_3.png";
import award_4 from "../pictures/footer/award_4.png";
import award_5 from "../pictures/footer/award_5.png";
import award_6 from "../pictures/footer/award_6.png";
import award_7 from "../pictures/footer/award_7.png";
import award_8 from "../pictures/footer/award_8.png";
import award_9 from "../pictures/footer/award_9.png";
import award_10 from "../pictures/footer/award_10.png";

export default function Footer() {

    var solutions = (
        <>
            <div>SOLUTIONS</div>
            <div>
                <li>Email Marketing</li>
                <li>Marketing automation</li>
                <li>Information distribution and media monitoring</li>
                <li>Websites</li>
                <li>Online store</li>
            </div>
        </>
    );

    var industries = (
        <>
            <div>INDUSTRIES</div>
            <div>
                <li>Auto industry</li>
                <li>Education</li>
                <li>Tourist industry</li>
                <li>Media and publishing industry</li>
                <li>Public sector and organizations</li>
                <li>Other industries</li>
            </div>
        </>
    );

    var checkItOut = (
        <>
            <div>CHECK IT OUT</div>
            <div>
                <li>Why Liana?</li>
                <li>Information about us</li>
                <li>History</li>
                <li>Partners</li>
            </div>
            <div>
                <li>Customer stories</li>
                <li>Blog</li>
                <li>Proceedings</li>
            </div>
        </>
    );

    var jobsAndTakeContact = (
        <>
            <div>JOBS</div>
            <div>
                <li>Lianacrew</li>
                <li>Career stories</li>
                <li>We appreciate it</li>
                <li>Open jobs</li>
            </div>
            <div>TAKE CONTACT</div>
            <div>
                <li>Take contact</li>
                <li>Board of Directors and Management Team</li>
            </div>
        </>
    );
    return (
        <div className={styles.footer}>
            <div className={styles.awards}>
                <div className={styles.awardsContent}>
                    <img src={award_1} className={styles.awardElement}/>
                    <img src={award_2} className={styles.awardElement}/>
                    <img src={award_3} className={styles.awardElement}/>
                    <img src={award_4} className={styles.awardElement}/>
                    <img src={award_5} className={styles.awardElement}/>
                    <img src={award_6} className={styles.awardElement}/>
                    <img src={award_7} className={styles.awardElement}/>
                    <img src={award_8} className={styles.awardElement}/>
                    <img src={award_9} className={styles.awardElement}/>
                    <img src={award_10} className={styles.awardElement}/>
                </div>
            </div>
            <div className={styles.footerMenu}>
                <div className={styles.footerMenuContent}>
                    <div className={styles.solutions}>
                        {solutions}
                    </div>
                    <div>
                        {industries}
                    </div>
                    <div>
                        {checkItOut}
                    </div>
                    <div>
                        {jobsAndTakeContact}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}