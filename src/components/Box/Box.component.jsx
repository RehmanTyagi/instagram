import styles from './Box.module.css'
import { forwardRef } from "react";

const Box = forwardRef(({ style, children, className }, ref) => {
    return (<div ref={ref} style={style} className={`${styles.Box} ${className}`}>{children}</div>)
})

export default Box;