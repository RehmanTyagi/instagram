import style from './Container.module.css'
const Container = ({ children, className }) => {
    return (
        <div className={`${style.Container} ${className}`}>
            {children}
        </div>
    )
}

export default Container
