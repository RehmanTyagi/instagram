import style from './AsideBarItem.module.css'

// imported comopnents
import Btn from '../../../UI/Button/Button.component'

const AsideBarItem = ({ children, className }) => {
    return (
        <div className={`${style.asideBarContainer} ${className}`}>
            {children}
        </div>
    )
}

const Avatar = ({ src, alt }) => {
    return <div className={style.avatar}><img src={src} alt={alt} /></div>
}

const Name = ({ children }) => {
    return <h1 className={style.name}>{children}</h1>
}

const Text = ({ children }) => {
    return <p className={style.text}>{children}</p>
}

const Button = ({ children, onClick }) => {
    return <Btn className={style.button} event={onClick}>{children}</Btn>
}

AsideBarItem.Avatar = Avatar;
AsideBarItem.Name = Name;
AsideBarItem.Text = Text;
AsideBarItem.Button = Button

export default AsideBarItem
