import styles from './Hero.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);
function Hero() {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: '-100%',
            transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 20,
            },
        },
    };
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <motion.div initial="initial" animate="animate" variants={textVariants} className={cx('textContainer')}>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={textVariants}
                        className={cx('firstTextContainer')}
                    >
                        <motion.h2 initial="initial" animate="animate" variants={textVariants}>
                            PAUL TU
                        </motion.h2>
                        <motion.h1 initial="initial" animate="animate" variants={textVariants}>
                            Web Developer
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className={cx('secondTextContainer')}
                        initial="initial"
                        animate="animate"
                        variants={textVariants}
                    >
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={textVariants}
                            className={cx('buttonContainer')}
                        >
                            <a href="#Latest">See the Latest Works</a>
                            <a href="#Contact">Contact me</a>
                        </motion.div>
                        <motion.img
                            whileInView="scrollButton"
                            initial={{ x: 0, y: 0 }}
                            variants={textVariants}
                            alt="scroll"
                            src="/scroll.png"
                            className={cx('scrollImage')}
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={sliderVariants}
                    initial="initial"
                    whileInView="animate"
                    className={cx('slideContainer')}
                >
                    Front-end Developer
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    className={cx('imageContainer')}
                >
                    <div className={cx('content')}>
                        <img alt="logo" src="/avatar.jpg" className={cx('image')} />
                        <div className={cx('info')}>
                            <h2>Pauly Dev</h2>
                            <span>Web Developer</span>
                        </div>
                        <a href="#Contact">Hire me</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
