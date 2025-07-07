import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../RoundedButton';
export default function index() {

    const phrase = "Building enterprise-grade web applications that drive measurable business impact. Together we will redefine digital excellence standards. Performance-obsessed, accessibility-first, always cutting-edge.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div id="about" ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my React expertise, leadership experience and performance optimization skills positions me uniquely in frontend engineering.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
