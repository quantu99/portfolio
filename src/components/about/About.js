import styles from './About.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function About() {
    const [appear, setAppear] = useState(false);
    const [appear2, setAppear2] = useState(false);
    const [appear3, setAppear3] = useState(false);
    const [hide, setHide] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [hide3, setHide3] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setAppear(true);
        }, 3000);
        setTimeout(() => {
            setAppear2(true);
        }, 12000);
        setTimeout(() => {
            setAppear3(true);
        }, 20000);
        setTimeout(() => {
            setHide(false);
        }, 11000);
        setTimeout(() => {
            setHide2(false);
        }, 19000);
    }, []);
    const markVariants = {
        infinity: {
            opacity: 0,
            transition: {
                duration: 0.5,
                repeat: Infinity,
            },
        },
    };
    const variants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        initial2: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        transition: {
            duration: 10,
            staggerChildren: 3,
        },
    };
    return (
        <section className={cx('container')}>
            <motion.div variants={variants} initial="initial" whileInView="animate" className={cx('titleContainer')}>
                <motion.h1 variants={variants} initial="initial" whileInView="animate">
                    About me
                </motion.h1>
                <motion.div
                    variants={variants}
                    initial="initial2"
                    whileInView="animate"
                    className={cx('separate')}
                ></motion.div>
            </motion.div>
            <div className={cx('itemContainer')}>
                <div className={cx('item')}>
                    <span className={cx('startMark')}>&gt;</span>
                    {appear && <p>My name is Từ Huỳnh Minh Quân, you can call me Paul.</p>}
                    {hide && (
                        <motion.span
                            variants={markVariants}
                            whileInView="infinity"
                            className={cx('mark')}
                        ></motion.span>
                    )}
                </div>
                {appear2 && (
                    <div className={cx('item')}>
                        <span className={cx('startMark')}>&gt;</span>
                        <p>I graduated as Computer Engineering from Cần Thơ University</p>
                        {hide2 && (
                            <motion.span
                                variants={markVariants}
                                whileInView="infinity"
                                className={cx('mark')}
                            ></motion.span>
                        )}
                    </div>
                )}
                {appear3 && (
                    <div className={cx('item')}>
                        <span className={cx('startMark')}>&gt;</span>
                        <p>I'm a Web Developer. Let's see something cool that i did now</p>
                        {hide3 && (
                            <motion.span
                                variants={markVariants}
                                whileInView="infinity"
                                className={cx('mark')}
                            ></motion.span>
                        )}
                    </div>
                )}
            </div>
            <div className={cx('itemContainerMobile')}>
                <div className={cx('itemMobile')}>
                    <span className={cx('startMarkMobile')}>&gt;</span>
                    <p>My name is Từ Huỳnh Minh Quân, you can call me Paul.</p>
                </div>

                <div className={cx('itemMobile')}>
                    <span className={cx('startMarkMobile')}>&gt;</span>
                    <p>I graduated as Computer Engineering from Cần Thơ University.</p>
                </div>

                <div className={cx('itemMobile')}>
                    <span className={cx('startMarkMobile')}>&gt;</span>

                    <>
                        <p>I'm a Web Developer. Let's see something cool that i did now.</p>
                        <motion.span
                            variants={markVariants}
                            whileInView="infinity"
                            className={cx('markMobile')}
                        ></motion.span>
                    </>
                </div>
            </div>
        </section>
    );
}

export default About;
