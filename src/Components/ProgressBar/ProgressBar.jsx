import React from "react";
import Styles from "./ProgressBar.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    
    // Map scroll progress to the width of the viewport
    const ballX = useTransform(scrollYProgress, [0, 1.054], [0, window.innerWidth]);

    return (
        <>
        <div className="BALL"></div>
        <div className={Styles.ProgressBarContainer}>
            <div className={Styles.ProgressBar} />
            <motion.div
                className={Styles.ProgressBall}
                style={{ x: ballX }}
            />
        </div>
        </>
    );
};

export default ProgressBar;
