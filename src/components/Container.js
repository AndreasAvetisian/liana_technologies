import React from "react";
import styles from "../styles/Container.module.scss";

export default function Container() {
    return (
        <div className={styles.aaa}>
            <div className={styles.backgroundPicture}></div>
            <div className={styles.comProCon}></div>
            <div className={styles.CliEmpDai}></div>
            <div className={styles.latestNews}></div>
            <div className={styles.references}></div>
            <div className={styles.subscribe}></div>
        </div>
    );
}