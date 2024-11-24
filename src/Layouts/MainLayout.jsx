import { Outlet } from 'react-router-dom';
import React from 'react'
import Navbar from '../components/Navbar'
import HomeCards from '../components/HomeCards'


const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <HomeCards />
    </>
  )
}

export default MainLayout