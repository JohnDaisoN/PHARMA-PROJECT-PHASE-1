import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import { useStateContext } from '../../context/ContextProvider';
import Navbar from './Navbar';


const Layout = () => {
  // const activeMenu = true
  const {activeMenu} = useStateContext();
  return(
    <div className='flex relative bg-[#BFF0EA]'>
{activeMenu ? (
  <div className='w-72 fixed sidebar  bg-white'><Sidebar /></div>
) : (
  <div className='w-0 '><Sidebar /></div>
)}
<div className={`min-h-screen max-h-screen overflow-hidden w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
  <div className='flex md:static dark:bg-main-dark-bg navbar w-full '><Navbar /></div>

<div className='w-full h-full overflow-scroll'>
{<Outlet />}
</div>
</div>
</div>

  )
}

export default Layout

