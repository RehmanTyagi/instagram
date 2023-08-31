import style from './Options.module.css'
import MyNavLink from "../../NavLink/NavLink.component"

import { forwardRef } from "react"
import Box from "../../Box/Box.component"
//imported icons
import { CiSettings, CiClock2, CiBookmarkCheck, CiCircleInfo, CiLogout } from 'react-icons/ci'

const OptionDropDown = forwardRef(({ className }, ref) => {
    return (
        <Box ref={ref} className={`${style.container} ${className}`}>
            <MyNavLink link='settings' className={style.link} IconPath={<CiSettings size={25} />} text="Settings" />
            <MyNavLink className={style.link} IconPath={<CiClock2 size={25} />} text="Your Activity" />
            <MyNavLink className={style.link} IconPath={<CiBookmarkCheck size={25} />} text="Saved" />
            <MyNavLink className={style.link} IconPath={<CiCircleInfo size={25} />} text="Report a problem" />
            <MyNavLink className={style.link} IconPath={<CiLogout size={25} />} text="Log Out" />
        </Box>
    )
})

export default OptionDropDown;