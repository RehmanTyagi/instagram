import styles from './Input.module.css'

// hooks

function Input({ inputRef, type, placeholder, event, value, className }) {
    return <div className={styles.inputGroup}>
        <input ref={inputRef} value={value} onChange={event} required className={`${styles.input} ${className}`} type={type} />
        <label className={styles.floatingPlaceholder}>{placeholder}</label>
    </div>
}

export default Input;