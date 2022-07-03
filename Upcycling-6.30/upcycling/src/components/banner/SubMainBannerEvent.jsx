import styles from './SubMainBannerEvent.module.css';
const SubMainBannerEvent = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.text}>
                    <h3> <span className={styles.span}>:UpTowner </span>Event</h3>
                    <p> 진행중인 이벤트 와 캠페인<br/>
                    여러분의 이야기를 들려주세요!</p>
                </div>
            </div>
            <div className={styles.img}>
            </div>
        </div>
    )
};
export default SubMainBannerEvent;