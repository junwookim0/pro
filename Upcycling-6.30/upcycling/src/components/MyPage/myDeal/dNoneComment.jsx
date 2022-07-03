import styles from './dCommonCSS.module.css';

const DNoneComment = () => {
    return (
        <div className={styles.contents_empty} style={{marginBottom: '7rem'}}>
            <h3>작성한 댓글이 없습니다!</h3>
        </div>
    )
}

export default DNoneComment;