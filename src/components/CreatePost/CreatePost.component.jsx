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

const CreatePost = () => {
    const [postFile, setPostFile] = useState(null)
    const [uploadedFile, setUploadedFile] = useState([])
    const [isPreview, setIsPreview] = useState(false)

    // select file and change file on selection
    const changeFileHandler = () => {
        let input = document.createElement("input")
        input.type = 'file'
        input.click()
        input.onchange = () => {
            const selectedFile = input.files[0]
            setPostFile(selectedFile)
        }
    }
    // uploading the file to firebase storage
    useEffect(function () {
        if (postFile === null) return
        const postFileRef = ref(myStorage, `posts/${postFile.name}`)
        uploadBytes(postFileRef, postFile).then(() => alert("file uploaded")).catch(() => alert("file not uploaded"))
    }, [postFile])


    // fetching file from firebase storage
    const uploadedFileRef = ref(myStorage, 'posts/')
    useEffect(function () {

        listAll(uploadedFileRef).then((response) => {
            response.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    setUploadedFile(prev => [...prev, url])
                    setIsPreview(true)
                })
            })
        })
    }, [uploadedFileRef])


    return (
        <Modal>
            <div className={style.modalNav}>
                {
                    isPreview && <Button type="button" children="Discard" />
                }
                <h1 className={style.heading}>create new post</h1>
                {
                    isPreview && <Button type="button" children="Share" />
                }
            </div>
            {
                isPreview ? <img className={style.previewFrame} src={uploadedFile.slice(-1)} alt="img/video" />
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
