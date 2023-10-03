import style from "./Options.module.css";
import MyNavLink from "../../NavLink/NavLink.component";

import { forwardRef } from "react";

import Box from "../../Box/Box.component";
import ReportBug from '../../ReportBug/ReportBug.component';

//imported icons
import {
  CiSettings,
  CiClock2,
  CiBookmarkCheck,
  CiCircleInfo,
  CiLogout,
} from "react-icons/ci";

const OptionDropDown = forwardRef(({ className }, ref) => {

  return (
    <Box ref={ref} className={`${style.container} ${className}`}>
      <MyNavLink link="settings" className={style.link}>
        <CiSettings size={25} />
        <p>Settings</p>
      </MyNavLink>
      <MyNavLink link="activity" className={style.link}>
        <CiClock2 size={25} />
        <p>Your Activity</p>
      </MyNavLink>
      <MyNavLink link="profile/saved" className={style.link}>
        <CiBookmarkCheck size={25} />
        <p>Saved</p>
      </MyNavLink>
      <ReportBug>
        <MyNavLink className={style.link}>
          <CiCircleInfo size={25} />
          <p>Report a problem</p>
        </MyNavLink>
      </ReportBug>
      <MyNavLink className={style.link}>
        <CiLogout size={25} />
        <p>Log Out</p>
      </MyNavLink>
    </Box>

  );
});

export default OptionDropDown;
