import styles from './dCommonCSS.module.css';

const DNoneLike = () => {
    return (
        <div className={styles.contents_empty}>
            <h3>관심 있는 게시글의 ❤를 클릭하면 마이페이지에 보관할 수 있어요</h3>
        </div>
    )
}

export default DNoneLike;