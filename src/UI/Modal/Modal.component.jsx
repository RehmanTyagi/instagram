import style from './Modal.module.css'
const Modal = ({ children }) => {
    return (
        <>
            <div className={style.backDrop}></div>
            <div className={style.modal}>
                {children}
            </div>
            <span className={style.closeBtn}>&times;</span>
        </>
    )
}

export default Modal;
