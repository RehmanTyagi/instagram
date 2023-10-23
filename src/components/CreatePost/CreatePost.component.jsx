import style from './CreatePost.module.css';

// imported components
import Modal from "../../UI/Modal/Modal.component";
import Button from "../../UI/Button/Button.component";
// import { myStorage } from "../../lib/firebase";
// import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';

// imported icons
import UploadFileIcon from "../../assets/icons/uploadFileIcon";

//imported hooks
import { useState } from "react";

// methods
import { uploadPost, downloadImgFromStorage, deletePost } from "../../services/firebase";

const CreatePost = ({ isModalOpen, setIsModalOpen }) => {
    const [preview, setPreview] = useState(null);

    // select file and change file on selection
    const handleuploadPreview = () => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = () => {

            const reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (event) {
                setPreview(event.target.result)
            };
        }
        input.click()
    }

    // discarding preview
    const discardFile = () => {
        setPreview(null)
    }

    return (
        <Modal className={style.uploadBox} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            {preview &&
                <div className={style.modalNav}>
                    <Button type="button" children="Discard" event={discardFile} />
                    <h1 className={style.heading}>create new post</h1>
                    <Button type="button" children="Share" />
                </div>
            }
            {
                preview ? <img className={style.previewFrame} src={preview} alt="previewer" />
                    : <div className={style.uploadArea}>
                        <UploadFileIcon />
                        <p>drag photos and videos here</p>
                        <Button type="button" event={handleuploadPreview} children="Select From Device" />
                    </div>
            }
        </Modal>
    );
};

export default CreatePost;
