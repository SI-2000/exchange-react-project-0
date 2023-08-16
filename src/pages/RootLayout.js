import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../component/MainHeader'
import MainFooter from '../component/MainFooter'

const RootLayout = () => {
  return (
    <div>
        <MainHeader />
        <Outlet />
        <MainFooter />
    </div>
  )
}

export default RootLayout