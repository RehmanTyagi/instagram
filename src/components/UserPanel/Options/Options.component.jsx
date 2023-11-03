import style from "./Options.module.css";
import MyNavLink from "../../NavLink/NavLink.component";
import { getAuth } from "firebase/auth";

import { forwardRef } from "react";

import Box from "../../Box/Box.component";
import ReportBug from '../../ReportBug/ReportBug.component';
import Modal from "../../../UI/PopupModal/PopupModal.component";
import { CiSquareAlert } from 'react-icons/ci'
import { BiX } from 'react-icons/bi'
import Button from "../../../UI/Button/Button.component";

//imported icons
import {
  CiSettings,
  CiClock2,
  CiBookmarkCheck,
  CiCircleInfo,
  CiLogout,
} from "react-icons/ci";

const OptionDropDown = forwardRef(({ className }, ref) => {

  const handleLogOutUser = async () => {
    const currentUser = getAuth()
    currentUser.signOut()
  }

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
      <Modal>
        <Modal.ModalWindow>
          <div className={style.logoutAlert}>
            <div className={style.logoutAlertHeader}><CiSquareAlert size={20} /><Modal.Open><BiX size={20} className={style.closeBtn} /></Modal.Open></div>
            <div className={style.logoutAlertBody}>
              <h1>Are you sure to logging out?</h1>
              <Button event={handleLogOutUser} type="button" children="Logout" />
              <Modal.Open>
                <span>
                  <Button className={style.logoutAlertCancel} type="button" children="Cancel" />
                </span>
              </Modal.Open>
            </div>
          </div>
        </Modal.ModalWindow>
        <Modal.Open>
          <MyNavLink className={style.link}>
            <CiLogout size={25} />
            <p>Log Out</p>
          </MyNavLink>
        </Modal.Open>
      </Modal>
    </Box>

  );
});

export default OptionDropDown;
