import style from './PopupModal.module.css';
import { useContext, createContext, useState, cloneElement } from "react";

const ModalContext = createContext();

function Modal({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
}

function ModalWindow({ children }) {
    const { isOpen } = useContext(ModalContext);
    if (isOpen)
        return <BackDrop>
            <div className={style.modalWindow}>{children}</div>;
        </BackDrop>;
}

function Open({ children }) {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    return cloneElement(children, { onClick: () => setIsOpen(!isOpen) });
}

function BackDrop({ children }) {
    return <div className={style.backDrop}>{children}</div>;
};

Modal.ModalWindow = ModalWindow;
Modal.Open = Open;
Modal.BackDrop = BackDrop;
export default Modal;