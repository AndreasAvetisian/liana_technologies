import React from "react";
import logo from "../pictures/logo/lianatech_logo.svg";
import searchIcon from "../pictures/topbar/search.png";
import styles from '../styles/Topbar.module.scss';

export default function Topbar() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logoBox}><img src={logo} width="110px" height="35px"/></div>
                <div className={styles.navItems}>
                    <div className={styles.navItemsChild}>Solutions</div>
                    <div className={styles.navItemsChild}>Industries</div>
                    <div className={styles.navItemsChild}>Services</div>
                    <div className={styles.navItemsChild}>Resources</div>
                    <div className={styles.navItemsChild}>Contact Us</div>
                </div>
                <div className={styles.navButtons}>
                    <div className={styles.subButtonBox}><button className={styles.subButton}>Subscribe for newsletter</button></div>
                    <div className={styles.langSelectBox}>
                        <select name = "dropdown" className={styles.langSelect}>
                            <option value = "In English" selected className={styles.options}>In English</option>
                            <option value = "En français" className={styles.options}>En français</option>
                            <option value = "Auf Deutsch" className={styles.options}>Auf Deutsch</option>
                            <option value = "Suomeksi" className={styles.options}>Suomeksi</option>
                        </select>
                    </div>
                    <div className={styles.searchIconBox}><img src={searchIcon} width="16px" height="16px"/></div>
                </div> 
            </div>
        </div>
    );
}