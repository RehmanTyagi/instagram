import style from './CreatePost.module.css'

import Modal from "../../UI/Modal/Modal.component"
import Button from "../../UI/Button/Button.component"

import uploadFileIcon from "../../assets/icons/uploadFileIcon"
import { createElement } from "react"

const CreatePost = () => {

    function importMedia() {
        let input = document.createElement('input')
        input.type = 'file'

        input.onchange = () => {
            let files = Array.from(input.files)
            console.log(files[0].name)
        }
        input.click()

    }

    return (
        <Modal>
            <h1 className={style.heading}>create new post</h1>
            <div className={style.uploadArea}>
                {uploadFileIcon}
                <p>drag photos and videos here</p>
                <Button event={importMedia} type="button" children="Select From Device" />
            </div>
        </Modal>
    )
}

export default CreatePost
