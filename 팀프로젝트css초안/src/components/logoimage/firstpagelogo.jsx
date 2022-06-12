import styles from "./firstMain.module.css";

const firstpagelogo = () => {
    return (
        <div className={styles.ab}>
            <h1>업사이클링</h1>
            <div className={styles.abh}>
                <img className={styles.Applogo} src="../images/logo-ex.png" alt="logo"></img>
            </div>
        </div>
    )
};

export default firstpagelogo;