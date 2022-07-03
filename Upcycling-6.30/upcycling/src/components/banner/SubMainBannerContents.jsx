import styles from './SubMainBannerContents.module.css';

const SubMainBannerContents = () => {

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.text}>
                    <h3> <span className={styles.span}>: About </span>us</h3>
                    <p className={styles.move}>
                        <div className={styles.movediv}>
                            <a href='#about_upcycling'>About UPCYCLING</a> <br/>
                        </div>
                        <div className={styles.movediv}>
                            <a href='#about_upctown' id='abup'>About <span>UPTOWN</span></a>
                        </div>
                    </p>
                </div>
            </div>
            <div className={styles.img}>
            </div>
        </div>
    )
};

export default SubMainBannerContents;