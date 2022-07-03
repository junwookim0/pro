import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info_container}>
                <div className={styles.info}>
                    <p className={styles.logo}>UPTOWN</p>
                    <p>김준우 / ekdlskalrx@gmail.com</p>
                    <p>윤지은 / jjieunyun@naver.com</p>
                    <p>박선주 / sjdupre@naver.com</p>
                    <br/>
                </div>
                <div className={styles.copy}>
                    <p>Copyright ⓒ uptown All rights reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;