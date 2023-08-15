import styles from './Input.module.css'

// hooks

function Input({ type, placeholder }) {
    return <div className={styles.inputGroup}>
        <input required className={styles.input} type={type} />
        <label className={styles.floatingPlaceholder}>{placeholder}</label>
    </div>
}

export default Input;