import React from "react";
import styles from '../styles/Footer.module.scss';

export default function Footer() {

    var socialNetworkButton = (
        <div className={styles.buttonStyle}>1</div>
    );
    
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeftSide}>
                    <div className={styles.contactInfoBox}>
                        <div className={styles.title, styles.fontWeight}>Liana Technologies</div>
                        <div className={styles.contactInfo, styles.fontWeight}>Sales and inquiries</div>
                        <div className={styles.contactInfo}>Email: sales@lianatech.com</div>
                        <div className={styles.contactInfo}>Phone: +358 10 387 7053</div>
                    </div>
                    <div className={styles.contactUsButtonDiv}>
                        <button type="button" className={styles.contactUsButton}>Contact Us</button>
                    </div>
                </div>
                <div className={styles.footerRightSide}>
                    <div className={styles.CPCNI}>
                        <div className={styles.components}>Company</div>
                        <div className={styles.components}>Products</div>
                        <div className={styles.components}>Contact Us</div>
                        <div className={styles.components}>News</div>
                        <div className={styles.components}>Intranet</div>
                    </div>
                    <div className={styles.socialNetworkButtons}>
                        <div>{socialNetworkButton}</div>
                        <div>{socialNetworkButton}</div>
                        <div>{socialNetworkButton}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}