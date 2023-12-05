import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
const cx = classNames.bind(styles);
function Navbar() {
    const items = ['Homepage', 'About', 'Skill', 'Portfolio', 'Contact'];
    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
        },
    };
    return (
        <div className={cx('navbar')}>
            <Sidebar />
            <div className={cx('container')}>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={cx('logo')}
                >
                    Pauly Dev
                </motion.span>
                <h1 className={cx('mobileTitle')}>Pauly Dev</h1>
                <div className={cx('navigate')}>
                    <motion.ul variants={variants} initial="hidden" whileInView="visible" className={cx('list')}>
                        {items.map((item, index) => (
                            <motion.li variants={variants} className={cx('list-item')}>
                                <a href={`#${item}`}>{item}</a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
