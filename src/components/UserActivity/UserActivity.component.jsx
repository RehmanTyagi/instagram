import style from './UserActivity.module.css'

// import { useState } from "react";
import { CiCalendarDate } from 'react-icons/ci'
import { DatePicker } from "antd";
import Button from "../../UI/Button/Button.component";

const { RangePicker } = DatePicker;

const UserActivity = () => {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className={style.activityContainer}>
            <div className={style.activityHeader}>
                <h1>account activity</h1>
                <div className={style.dateContainer}>
                    <CiCalendarDate className={style.calendarIcon} />
                    <p>Filter:</p>
                    <RangePicker className={style.datePicker} />
                </div>
            </div>
            <div className={style.activityBody}>
                {
                    sample.map(() => <div className={style.activityItem}>
                        <strong>12/20/2023</strong>
                        <p>You unfollowed [username] at [month/year]. follow back</p>
                        <Button children="Follow Back" type="button" />
                    </div>)
                }
            </div>
        </div>
    )
}

export default UserActivity

