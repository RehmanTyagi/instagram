import styles from './Box.module.css'
function Box({ style, children, className }) {
    return (<div style={style} className={`${styles.Box} ${className}`}>{children}</div>);
}

export default Box;