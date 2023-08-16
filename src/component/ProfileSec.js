import React from 'react'

import classes from "./ProfileSec.module.css"

const ProfileSec = () => {
  return (
    <div className={classes['profile-sec']}>
      <div className={classes["image"]}></div>
      <div className={classes["specification"]}>
        <div className={classes["name"]}>سیامک ایرانی</div>
      </div>
    </div>
  )
}

export default ProfileSec