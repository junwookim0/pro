import styles from './SubMainBannerDeal.module.css';
const SubMainBannerDeal = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.text}>
                    <h3> <span className={styles.span}>:UpTowner </span>Market</h3>
                    <p>업사이클링 제품을 사용하고있는 <br/>
                    여러분의 이야기를 들려주세요!</p>
                </div>
            </div>
            <div className={styles.img}>
            </div>
        </div>
    )
};

export default SubMainBannerDeal;