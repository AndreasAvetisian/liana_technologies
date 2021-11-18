import React from "react";
import logo from "../lianatech_logo.svg";
import styles from '../styles/Topbar.module.scss';

export default function Topbar() {
    return (
        <div className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.headerTopContent}>
                    <div className={styles.news}>News</div>
                    <div className={styles.intarnet}>Intranet</div>
                    <div>
                        <button type="button" className={styles.input}>In English</button>
                    </div>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <div className={styles.headerBottomContent}>
                    <div className={styles.logoComProCon}>
                        <div className={styles.logo}>
                            <img src={logo} width="130px" height="55px"/>
                        </div>
                        <div className={styles.comProCon}>
                            <div>Company</div>
                            <div className={styles.product}>Product</div>
                            <div>Contact Us</div>
                        </div>
                    </div>
                    <div className={styles.searchBox}>
                        <input type="text" placeholder="Search" className={styles.searchInput}/>
                        <button type="button" className={styles.searchButton}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}