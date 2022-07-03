import styles from './SubMainBannerHome.module.css';
const SubMainBannerHome = () => {
    return (
        <div className={styles.subMainBanner_wrap}>
            <div className={styles.subMainBanner_img}>
                <div className={styles.subMainBanner_text}>
                    UPTOWN
                    <div>
                        <p>
                            지구를 지키는 아이디어 업사이클링  <br/>
                            일상 속에서 작은 실천으로 가능합니다
                        </p>
                        <div className={styles.movediv}>
                            <a href='/aboutupcycling'>자세히 보기</a> <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SubMainBannerHome;