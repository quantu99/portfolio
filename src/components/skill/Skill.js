import styles from './Skill.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);
function Skill() {
    const skill = [
        {
            id: 1,
            name: 'Html/ Css',
            image: '/html.png',
        },
        {
            id: 2,
            name: 'Javascript',
            image: '/jvs.png',
        },
        {
            id: 3,
            name: 'ReactJs',
            image: '/reactjs.png',
        },
        {
            id: 4,
            name: 'NextJs',
            image: '/nextjs.png',
        },
        {
            id: 6,
            name: 'NodeJs',
            image: '/nodejs.png',
        },
    ];
    const library = [
        {
            id: 1,
            name: 'Github',
            image: '/github.png',
        },
        {
            id: 2,
            name: 'Bootstrap',
            image: '/bootstrap.png',
        },
        {
            id: 3,
            name: 'MongoDB',
            image: '/mongo.png',
        },
        {
            id: 4,
            name: 'Prisma',
            image: '/prisma.png',
        },
        {
            id: 5,

            name: 'Google Firebase',
            image: '/firebase.png',
        },
    ];

    return (
        <section className={cx('container')}>
            <div className={cx('itemContainer')}>
                <div className={cx('skillContainer')}>
                    <motion.div className={cx('titleContainer')}>
                        <motion.h1
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            Skills
                        </motion.h1>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={cx('separate')}
                        ></motion.div>
                    </motion.div>
                    <div className={cx('skill')}>
                        {skill.map((item) => (
                            <div key={item.id} className={cx('item')}>
                                <motion.img
                                    initial={{ scale: 3 }}
                                    whileInView={{ rotate: '360deg', scale: 1 }}
                                    transition={{ duration: 1 }}
                                    alt=""
                                    src={item.image}
                                />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('libraryContainer')}>
                    <div className={cx('titleContainer')}>
                        <motion.h1
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            Libraries
                        </motion.h1>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={cx('separate')}
                        ></motion.div>
                    </div>
                    <div className={cx('library')}>
                        {library.map((item) => (
                            <div key={item.id} className={cx('item')}>
                                <motion.img
                                    initial={{ scale: 3 }}
                                    whileInView={{ rotate: '-360deg', scale: 1 }}
                                    transition={{ duration: 1 }}
                                    alt=""
                                    src={item.image}
                                />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
