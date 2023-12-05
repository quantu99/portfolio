import styles from './Parralax.module.scss';
import classname from 'classnames/bind';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
const cx = classname.bind(styles);
function Parralax({ type }) {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const yMoon = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);
    const ySun = useTransform(scrollYProgress, [0, 1], ['0%', '-400%']);
    return (
        <div
            ref={ref}
            className={cx('container')}
            style={{
                background:
                    type === 'services'
                        ? 'linear-gradient(180deg, #0c0c1d, #111132)'
                        : 'linear-gradient(180deg,  #111132, #7e818a)',
            }}
        >
            <motion.h1 style={{ y: yText }}> {type === 'services' ? 'Skills' : 'What I Did?'}</motion.h1>
            <motion.div className={cx('mountains')}></motion.div>
            {type === 'services' ? (
                <motion.div style={{ y: yMoon }} className={cx('moon')}></motion.div>
            ) : (
                <motion.div style={{ y: ySun }} className={cx('sun')}></motion.div>
            )}
            <motion.div style={{ x: yBg }} className={cx('stars')}></motion.div>
        </div>
    );
}

export default Parralax;
