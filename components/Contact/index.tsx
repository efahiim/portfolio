import styles from './style.module.scss';
import Rounded from '../RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../Magnetic';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}  id="contact">
                <div className={styles.title}>
                    <h2>Let's work</h2>
                    <h2>together</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#10b981"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#10b981"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <a href="mailto:efahiim@gmail.com">efahiim@gmail.com</a>
                        </Rounded>
                        <Rounded>
                            <a href="tel:+447777944645">+44 7777 944 645</a>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2025 © IMFE Studio</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>Socials</h3>
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/isfaaqemambocus-frontendengineer/" target="_blank">LinkedIn</a>
                            </Magnetic>
                        </span>
                        <span>
                            <Magnetic>
                                <a href="https://github.com/efahiim" target="_blank">GitHub</a>
                            </Magnetic>
                        </span>
                        <span>
                            <Magnetic>
                                <a href="https://www.instagram.com/isfaaq.m.f/" target="_blank">Instagram</a>
                            </Magnetic>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
