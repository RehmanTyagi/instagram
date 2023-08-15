import styles from './Button.module.css'

function Button({ children, type, isDisabled, className }) {
    return (<button disabled={isDisabled} type={type} className={`${styles.button} ${className}`}>{children}</button>);
}

export default Button;