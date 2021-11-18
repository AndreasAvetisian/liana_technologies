import React from "react";
import styles from '../styles/Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeftSide}>
                    <div className={styles.contactInfo}>
                        <div>Liana Technologies</div>
                        <div>Sales and inquiries</div>
                        <div>Email: sales@lianatech.com</div>
                        <div>Phone: +358 10 387 7053</div>
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
                    <div>button</div>
                </div>
            </div>
        </div>
    );
}