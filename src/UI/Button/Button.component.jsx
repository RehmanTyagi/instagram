import styles from './Button.module.css';

function Button({ children, type, isDisabled, className, event }) {
    // console.log(isDisabled);
    return (<button onClick={event} disabled={isDisabled} type={type} className={`${styles.button} ${className}`}>{children}</button>);
}

export default Button;