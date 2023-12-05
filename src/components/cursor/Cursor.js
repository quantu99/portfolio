import { useEffect, useState } from 'react';
import styles from './Cursor.module.scss';
import classnames from 'classnames/bind';
import { motion } from 'framer-motion';
const cx = classnames.bind(styles);
function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const moveMouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveMouse);
        return () => {
            window.removeEventListener('mousemove', moveMouse);
        };
    }, []);
    return <motion.div animate={{ x: position.x, y: position.y }} className={cx('container')}></motion.div>;
}

export default Cursor;
