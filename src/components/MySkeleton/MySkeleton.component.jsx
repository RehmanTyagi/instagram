import styles from './MySkeleton.module.css'

function MySkeleton() {
    return (<div className={styles.mySkeleton}><div className={styles.thumbnail}></div></div>);
}

export default MySkeleton;