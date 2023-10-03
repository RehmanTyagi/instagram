import style from './InfoBox.module.css'

const InfoBox = ({ children }) => {
    return children
}

const Header = ({ heading }) => {
    return <div className={style.Header}>
        <p>{heading}</p>
    </div>
}

const Body = ({ children }) => {
    return <div className={style.bodyWrapper}>
        <div className={style.Body}>
            {children}
        </div>
    </div>
}
const Paragraph = ({ children }) => {
    return <p>{children}</p>
}

InfoBox.Header = Header
InfoBox.Body = Body
Body.Paragraph = Paragraph

export default InfoBox;
