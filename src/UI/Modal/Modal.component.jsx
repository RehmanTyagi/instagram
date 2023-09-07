import style from './Modal.module.css'

import { useCreatePost } from "../../contexts/CreatePostContext";

const Modal = ({ children }) => {
    const { isOpen, handleModal } = useCreatePost()

    return (
        <>
            {
                isOpen &&
                <>
                    <div className={style.backDrop}></div>
                    <div className={style.modal}>
                        {children}
                    </div>
                    <span onClick={handleModal} className={style.closeBtn}>&times;</span>
                </>
            }
        </>
    )
}

export default Modal;
