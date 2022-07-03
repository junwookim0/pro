import styles from './dCommonCSS.module.css';

const DNoneDeal = () => {
    return (
        <div className={styles.contents_empty}>
            <h3>
                작성한 게시글이 없습니다! 업사이클링 제품을 거래해보세요
            </h3>
        </div>
    )
};

export default DNoneDeal;