import style from './ReportBug.module.css';

import { BiX } from "react-icons/bi";

import { useState } from "react";

import PopupModal from '../../UI/PopupModal/PopupModal.component';
import Button from "../../UI/Button/Button.component";

const ReportBug = ({ children }) => {
    const [textArea, setTextArea] = useState('');
    const textLimit = textArea.length >= 100;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textArea === '' || textLimit) return;
        alert('form sent');
    };

    return (
        <form onSubmit={handleSubmit}>
            <PopupModal>
                <PopupModal.Open>{children}</PopupModal.Open>
                <PopupModal.ModalWindow>
                    <div className={style.header}><h1>Report a problem!</h1><PopupModal.Open><BiX className={style.icon} size={25} /></PopupModal.Open></div>
                    <div className={style.body}>
                        <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} placeholder="please include as much as info possible..." rows={5} className={`${style.textArea} ${textLimit && style.wordLimit}`} />
                        <div className={style.footer}>
                            <Button children="Send Report" type="submit" />
                            <Button event={() => setTextArea('')} children="Reset" type="button" />
                        </div>
                    </div>
                </PopupModal.ModalWindow>
            </PopupModal>
        </form>
    );
};

export default ReportBug;
