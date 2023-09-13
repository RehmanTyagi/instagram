import style from './CreatePost.module.css'

// imported components
import Modal from "../../UI/Modal/Modal.component"
import Button from "../../UI/Button/Button.component"
import { myStorage } from "../../utils/firebase.config"
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage'

// imported icons
import uploadFileIcon from "../../assets/icons/uploadFileIcon"

//imported hooks
import { useEffect, useState } from "react"

const CreatePost = ({ isModalOpen, setIsModalOpen }) => {
    const [postFile, setPostFile] = useState(null)
    const [uploadedFile, setUploadedFile] = useState('')

    // select file and change file on selection
    const changeFileHandler = () => {
        let input = document.createElement("input")
        input.type = 'file'
        input.onchange = () => {
            const selectedFile = input.files[0]
            setPostFile(selectedFile)
        }
        input.click()
    }

    // uploading the file to firebase storage
    useEffect(function () {
        if (postFile === null) return
        const postFileRef = ref(myStorage, `preview/file`)
        uploadBytes(postFileRef, postFile).then(() => {
            fetchFile();
        }).catch(() => alert("file not uploaded"))
    }, [postFile])


    // fetching file from firebase storage
    const uploadedFileRef = ref(myStorage, 'preview/');

    const fetchFile = () => {
        listAll(uploadedFileRef).then((response) => {
            response.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    setUploadedFile(url)
                })
            })
        })
    }


    const handleDiscardFile = () => {
        const deleteFileRef = ref(myStorage, `preview/file`)
        deleteObject(deleteFileRef).then(() => {
            setUploadedFile('')
        }
        ).catch(err => console.log(err.message))

    }

    useEffect(function () {
        fetchFile()
    }, [])


    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <div className={style.modalNav}>
                {
                    uploadedFile && <Button type="button" children="Discard" event={handleDiscardFile} />
                }
                <h1 className={style.heading}>create new post</h1>
                {
                    uploadedFile && <Button type="button" children="Share" />
                }
            </div>
            {
                uploadedFile ? <img className={style.previewFrame} src={uploadedFile} alt="img/video" />
                    : <div className={style.uploadArea}>
                        {uploadFileIcon}
                        <p>drag photos and videos here</p>
                        <Button type="button" event={changeFileHandler} children="Select From Device" />
                    </div>
            }
        </Modal>
    )
}

export default CreatePost
