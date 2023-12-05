import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Sidebar() {
    const items = ['Homepage', 'About', 'Skill', 'Portfolio', 'Contact'];
    const [open, setOpen] = useState(false);
    const variants = {
        open: {
            clipPath: 'circle(1400px at 50px 50px)',
            transition: {
                type: 'spring',
                stiffness: 40,
            },
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };
    const linksVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };
    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };
    return (
        <motion.div animate={open ? 'open' : 'closed'} className={cx('container')}>
            <motion.div variants={variants} className={cx('navigate')}>
                <motion.div variants={linksVariants} className={cx('list')}>
                    {items.map((item, index) => (
                        <motion.a
                            href={`#${item}`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            variants={itemVariants}
                            key={index}
                            className={cx('list-item')}
                        >
                            {item}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
}

export default Sidebar;
