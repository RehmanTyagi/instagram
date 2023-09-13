import style from './UserPanel.module.css'

// imported hooks
import { useState, useEffect, useRef } from "react"

// imported components
import MyNavLink from "../NavLink/NavLink.component"
import MenuIcon from '../../assets/icons/MenuIcon'
import OptionDropDown from "./Options/Options.component"

function UserPanel({ className }) {
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const userPanelRef = useRef()
    const panelBtnRef = useRef()


    const manageOutSideClicks = (e) => {
        if (panelBtnRef.current.contains(e.target)) setIsPanelOpen(isOpen => !isOpen)
        else {
            if (!userPanelRef.current?.contains(e.target)) setIsPanelOpen(false)
        }
    }
    useEffect(function () {
        document.addEventListener('click', manageOutSideClicks)

        return () => document.removeEventListener('click', manageOutSideClicks)
    }, [])

    return (
        <div className={`${style.userPanel} ${className}`} >
            <MyNavLink ref={panelBtnRef} IconPath={MenuIcon} />
            {
                isPanelOpen && <OptionDropDown ref={userPanelRef} className={style.Options} />
            }
        </div>
    )
}

export default UserPanel