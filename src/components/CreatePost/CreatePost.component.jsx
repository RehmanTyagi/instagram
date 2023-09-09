import style from './CreatePost.module.css'

// imported components
import Modal from "../../UI/Modal/Modal.component"
import Button from "../../UI/Button/Button.component"
import { myStorage } from "../../utils/firebase.config"
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

// imported icons
import uploadFileIcon from "../../assets/icons/uploadFileIcon"

//imported hooks
import { useEffect, useState } from "react"

const CreatePost = () => {
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
        const postFileRef = ref(myStorage, `posts/${postFile.name}`)
        uploadBytes(postFileRef, postFile).then((data) => {
            console.log("file sent", data);
            fetchFile();
        }).catch(() => alert("file not uploaded"))
    }, [postFile])


    // fetching file from firebase storage
    const uploadedFileRef = ref(myStorage, 'posts/');

    const fetchFile = async () => {
        listAll(uploadedFileRef).then((response) => {
            console.log(response.items);
            response.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    setUploadedFile(url)
                })
            })
        })
    }

    useEffect(function () {
        fetchFile()
    }, [uploadedFile])

    return (
        <Modal>
            <div className={style.modalNav}>
                {
                    uploadedFile && <Button type="button" children="Discard" />
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
