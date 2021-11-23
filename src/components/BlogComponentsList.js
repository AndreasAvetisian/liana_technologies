import React from "react";
import styles from "../styles/BlogComponentsList.module.scss";
import BlogComponents from "./BlogComponents";

export default function BlogComponentsList(props) {
    return (
        <div className={styles.lianaCast}>
            { props.dataa.map(data => {
                return <BlogComponents dataa={data} />
            }) }
        </div>
    );
}