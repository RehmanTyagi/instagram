import style from './ShowTabBtn.module.css'
const ShowTabBtn = ({ icon, className, text }) => {
    return (
        <div to="#" className={`${style.showTabBtn} ${className}`}>{icon} {text}</div>
    )
}

export default ShowTabBtn
