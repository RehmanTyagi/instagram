import style from './CreatePost.module.css';

// imported components
import Modal from "../../UI/Modal/Modal.component";
import Button from "../../UI/Button/Button.component";
import { toast } from 'react-toastify'
import LazzyLoader from "../../UI/LoadingSpinner/LoadingSpinner.component";

// imported icons
import UploadFileIcon from "../../assets/icons/uploadFileIcon";

//imported hooks
import { useState } from "react";
import { useAuth } from "../../contexts/UserContext";
// methods
import { uploadPost } from "../../services/firebase";

const CreatePost = ({ isModalOpen, setIsModalOpen }) => {
    const [preview, setPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { currentUser } = useAuth()

    // select file and change file on selection
    const handleuploadPreview = () => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = () => {
            const reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (event) {
                setPreview({ file: input.files[0], url: event.target.result, fileType: input.files[0].type })
            };
        }
        input.click()
    }

    // discarding preview
    const discardFile = () => {
        setPreview(null)
    }

    const handleUploadPost = () => {
        setIsLoading(true)
        uploadPost(preview.file, `posts/${currentUser.uid}/${crypto.randomUUID()}`)
            .then(() => {
                toast.success("post uploaded!")
                setTimeout(() => {
                    setIsLoading(false)
                    setPreview(null)
                }, 1000);
            })
    }

    return (
        <Modal className={`${style.uploadBox} ${preview ? style.previewShown : ''}`} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            {preview &&
                <div className={style.modalNav}>
                    <Button type="button" children="Discard" event={discardFile} />
                    <h1 className={style.heading}>create new post</h1>
                    <Button type="button" children="Share" event={handleUploadPost} />
                </div>
            }
            {
                (preview?.fileType === 'image/jpeg' || preview?.fileType === 'image/jpg' || preview?.fileType === 'image/png') && <img className={style.previewFrame} src={preview?.url} alt="previewer" />
            }
            {
                preview?.fileType === 'video/mp4' && <video controls="true" className={style.previewFrame}><source src={preview?.url} /></video>
            }
            {
                isLoading && <span><LazzyLoader.BackDrop /><div className={style.spinner}><LazzyLoader><LazzyLoader.LoadingSpinner /></LazzyLoader></div></span>
            }
            {
                !preview && <div className={style.uploadArea}>
                    <UploadFileIcon />
                    <p>drag photos and videos here</p>
                    <Button type="button" event={handleuploadPreview} children="Select From Device" />
                </div>
            }
        </Modal>
    );
};

export default CreatePost;
