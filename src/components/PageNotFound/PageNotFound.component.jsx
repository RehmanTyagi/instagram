import styles from './PageNotFound.module.css'
import poster from '../../assets/not-found-gif.gif'
function PageNotFound() {
    return (
        <div className={styles.container}>
            <img src={poster} alt="img" />
            <h1>Page Not Found!</h1>
            <p>you clicked a broken link or the desired page does not exist.</p>
        </div>
    )
}

export default PageNotFound