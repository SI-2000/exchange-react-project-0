import React from 'react'
import { useSelector } from 'react-redux'

import { useUsername } from '../hook/use-username'

import classes from "./ProfileSec.module.css"

const ProfileSec = () => {
  const email = useSelector((state) => state);
  console.log(email)

  const userName = useUsername()

  return (
    <div className={classes['profile-sec']}>
      <div className={classes["image"]}></div>
      <div className={classes["specification"]}>
        <div className={classes["name"]}>{userName}</div>
      </div>
    </div>
  )
}

export default ProfileSec