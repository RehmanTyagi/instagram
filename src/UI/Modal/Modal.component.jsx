import style from './Modal.module.css'

// import { useState } from "react";

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
    return (
        <>
            {
                isModalOpen &&
                <>
                    <div className={style.backDrop}></div>
                    <div className={style.modal}>
                        {children}
                    </div>
                    <span onClick={() => setIsModalOpen(false)} className={style.closeBtn}>&times;</span>
                </>
            }
        </>
    )
}

export default Modal;
