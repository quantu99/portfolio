import styles from './Portfolio.module.scss';
import classNames from 'classnames/bind';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import img1 from '../../image/p5.PNG';
import img2 from '../../image/p7.PNG';
import img3 from '../../image/p8.PNG';
import img4 from '../../image/p11.PNG';
import img5 from '../../image/p12.PNG';
const cx = classNames.bind(styles);
const items = [
    {
        id: 1,
        title: 'Portfolio',
        img: img1,
        desc: 'This is my porfolio, that introduces myself clearly, includes my projects. This website is impressive with awesome animations. See demo to learn more. ',
        fe: ['ReactJs', 'JavaScript', 'Sass'],
        be: [],
        lib: ['ReactJs', 'Framer-motion', 'EmailJs', 'Sass'],
        link: '',
    },
    {
        id: 2,
        title: "Men's Era",
        img: img2,
        desc: "This is an ecommerce website. I built it that serve for selling men's shoes. Its all was designed by myself. See demo to learn more.",
        fe: ['ReactJs', 'JavaScript', 'Sass'],
        be: ['NodeJs/ExpressJs', 'MongoDB'],
        lib: ['ReactJs', 'Mongoose', 'Sass', 'Redux', 'Axios', 'FontAwesome'],
        link: 'https://men-era.vercel.app/',
    },
    {
        id: 3,
        title: 'Pauly Blog',
        img: img3,
        desc: 'This is a blog website.It was built to post blog about everything, like: Life, style, coding,... See demo to learn more.',
        fe: ['NextJs', 'ReactJs', 'JavaScript', 'Module css'],
        be: ['NodeJs/ExpressJs', 'MongoDB', 'Google Firebase'],
        lib: ['ReactJs', 'Mongoose', 'Sass', 'Redux', 'Axios', 'Google Firebase', 'Redux', 'Axios'],
        link: 'https://p-dev-blog-nine.vercel.app/',
    },
    {
        id: 4,
        title: "Dreamer's chat",
        img: img4,
        desc: "This is a small chat app.We can find others's username and chat with them...It's result that i get started with Google Firebase. See demo to learn more.",
        fe: ['ReactJs', 'JavaScript', 'Sass'],
        be: ['Google Firebase'],
        lib: ['ReactJs', 'Sass', 'Google Firebase', 'FontAwesome'],
        link: 'https://chat-app-kappa-coral.vercel.app/',
    },
    {
        id: 5,
        title: 'Travel UI',
        img: img5,
        desc: 'This is a small website that i get started with ReactJs. It introduced about some travel places at my hometown that is Can Tho City. See demo to learn more.',
        fe: ['ReactJs', 'JavaScript', 'Sass'],
        be: [],
        lib: ['ReactJs', 'Sass', 'FontAwesome'],
        link: 'https://quantu99.github.io/travel-ui/',
    },
];
const Single = ({ item }) => {
    const ref = useRef();
    return (
        <section id="Latest" className={cx('section')} key={item.id}>
            <div className={cx('itemContainer')}>
                <motion.div className={cx('wrapper')}>
                    <div className={cx('textContainer')}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target="__blank">
                            See demo
                        </a>
                    </div>
                    <div ref={ref} className={cx('imageContainer')}>
                        <div className={cx('imageWrapper')}>
                            <div className={cx('cover')}>
                                <img className={cx('image')} src={item.img} />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('detallTitleContainer')}>
                                    <h2 className={cx('detailTitle')}>
                                        {item.title} <div className={cx('separate')}></div>
                                    </h2>
                                </div>
                                <div className={cx('techContainer')}>
                                    <p>{item.desc}</p>

                                    <div className={cx('tech')}>
                                        <ul>
                                            <h2>Front-end:</h2>
                                            {item.fe.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {item?.be.length > 0 && (
                                        <div className={cx('tech')}>
                                            <ul>
                                                <h2>Back-end:</h2>
                                                {item?.be.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className={cx('tech')}>
                                        <ul>
                                            <h2>Libraries:</h2>
                                            {item.lib.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className={cx('wrapperMobile')}>
                    <div className={cx('textContainer')}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target="__blank">
                            See demo
                        </a>
                    </div>
                    <div ref={ref} className={cx('imageContainer')}>
                        <img src={item.img} className={cx('mobileImage')} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};
function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div ref={ref} className={cx('container')}>
            <div className={cx('progress')}>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className={cx('progressBar')}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} />
            ))}
        </div>
    );
}

export default Portfolio;
