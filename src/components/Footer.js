import React from "react";
import styles from '../styles/Footer.module.scss';
import award_1 from "../pictures/footer/awards/award_1.png";
import award_2 from "../pictures/footer/awards/award_2.png";
import award_3 from "../pictures/footer/awards/award_3.png";
import award_4 from "../pictures/footer/awards/award_4.png";
import award_5 from "../pictures/footer/awards/award_5.png";
import award_6 from "../pictures/footer/awards/award_6.png";
import award_7 from "../pictures/footer/awards/award_7.png";
import award_8 from "../pictures/footer/awards/award_8.png";
import award_9 from "../pictures/footer/awards/award_9.png";
import award_10 from "../pictures/footer/awards/award_10.png";
import right_arrow from "../pictures/footer/buttons/right-arrow.png";
import facebook from "../pictures/footer/buttons/facebook.png";
import instagram from "../pictures/footer/buttons/instagram.png";
import twitter from "../pictures/footer/buttons/twitter.png";
import linkedin from "../pictures/footer/buttons/linkedin.png";
import youtube from "../pictures/footer/buttons/youtube.png";

export default function Footer() {

    var solutions = (
        <>
            <div className={styles.titles}>SOLUTIONS</div>
            <div>
                <li>Email Marketing</li>
                <li>Marketing automation</li>
                <li>PR & Media</li>
                <li>Websites</li>
                <li>Commerce</li>
            </div>
        </>
    );

    var industries = (
        <>
            <div className={styles.titles}>INDUSTRIES</div>
            <div>
                <li>Auto industry</li>
                <li>Education</li>
                <li>Hospitality</li>
                <li>Media & Publishing</li>
                <li>Public Sector & NGO</li>
                <li>Other industries</li>
            </div>
        </>
    );

    var checkItOut = (
        <>
            <div className={styles.titles}>CHECK IT OUT</div>
            <div>
                <li>Why Liana?</li>
                <li>Information about us</li>
                <li>History</li>
                <li>Partners</li>
            </div>
            <div className={styles.checkItOutBottom}>
                <li>Customer stories</li>
                <li>Blog</li>
                <li>Proceedings</li>
            </div>
        </>
    );

    var jobsAndTakeContact = (
        <>
            <div className={styles.titles}>JOBS</div>
            <div>
                <li>Lianacrew</li>
                <li>Career stories</li>
                <li>We appreciate it</li>
                <li>Open jobs</li>
            </div>
            <div className={styles.titles, styles.takeContact}>TAKE CONTACT</div>
            <div>
                <li>Contact</li>
                <li>Management</li>
            </div>
        </>
    );

    var buttons = (
        <>
            <div className={styles.linkBox}>
                <div className={styles.buttonLink}><img src={right_arrow} className={styles.rightArrowStyle}/><a className={styles.links}>Media</a></div>
                <div className={styles.buttonLink}><img src={right_arrow} className={styles.rightArrowStyle}/><a className={styles.links}>Subscribe to newsletter</a></div>
                <div className={styles.buttonLink}><img src={right_arrow} className={styles.rightArrowStyle}/><a className={styles.links}>Request demo</a></div>  
            </div>
            <div className={styles.subButton}>
                <div className={styles.subButtonSize}><img src={facebook} className={styles.facebook}/></div>
                <div className={styles.subButtonSize}><img src={twitter} className={styles.twitter}/></div>
                <div className={styles.subButtonSize}><img src={instagram} className={styles.instagram}/></div>
                <div className={styles.subButtonSize}><img src={linkedin} className={styles.linkedin}/></div>
                <div className={styles.subButtonSize}><img src={youtube} className={styles.youtube}/></div>
            </div>
            <div>
                <div className={styles.lianatech}>© Liana Technologies</div>
                <div className={styles.copyright}>
                    <div className={styles.copyrightComponent}>Imprint</div>
                    <div className={styles.copyrightComponent}>Privacy policy</div>
                </div>
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
                    <div className={styles.solutions, styles.footerMenuContentStyle}>
                        {solutions}
                    </div>
                    <div className={styles.industries, styles.footerMenuContentStyle}>
                        {industries}
                    </div>
                    <div className={styles.checkItOut, styles.footerMenuContentStyle}>
                        {checkItOut}
                    </div>
                    <div className={styles.jobsAndTakeContact, styles.footerMenuContentStyle}>
                        {jobsAndTakeContact}
                    </div>
                    <div className={styles.buttons}>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    );
}