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

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.awards}>
                <img src={award_1} />
            </div>
        </div>
    );
}