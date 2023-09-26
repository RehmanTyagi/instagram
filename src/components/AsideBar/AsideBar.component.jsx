import { useState } from "react"
import style from './AsideBar.module.css'

// imported icons
import { BiX } from 'react-icons/bi'

// imported components
const AsideBar = ({ type, children, isOpen, setIsOpen, heading }) => {
    const [searchQuery, setSearchQuery] = useState("")
    console.log(searchQuery)
    const handleSearchQuery = (e) => {
        const query = e.target.value
        setSearchQuery(query)
    }
    return (
        <div className={`${style.notification} ${isOpen ? style.active : ''}`}>
            <div className={style.tabNavbar}>
                <h1>{heading}</h1>
                <span onClick={() => setIsOpen(!isOpen)}><BiX size={30} /></span>
            </div>
            {
                type === "search" && <div className={style.searchContainer}>
                    <BiX onClick={() => setSearchQuery("")} className={style.searchResetBtn} size={15} />
                    <input value={searchQuery} onChange={handleSearchQuery} className={style.searchBox} placeholder="Search" />
                </div>
            }
            {children}
        </div>
    )
}


export default AsideBar
