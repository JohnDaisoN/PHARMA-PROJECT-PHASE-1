import React from 'react'
import {Link, NavLink} from 'react-router-dom'
// import {MdOutlineCancel} from 'react-icons/md'
import {DASHBOARD_SIDEBAR_LINKS } from "../../lib/const/navigation";
import { useStateContext } from '../../context/ContextProvider';
import logo from '../../assets/pharmaBiLogo.png'
const Sidebar = () => {
    const {activeMenu,setActiveMenu,screenSize} = useStateContext();
    const handleCloseSideBar = ()=>{
        if(activeMenu && screenSize <= 900){
            setActiveMenu(false)
        }
    }

    const activeLink = 'flex items-center pl-6 gap-4 py-4 rounded-lg text-black text-xl m-2 bg-[#00FFE1] justify-start'
    const normalLink = 'flex items-center gap-5 pl-6 py-4 rounded-lg text-lg text-black hover:bg-[#00FFE1] text-md m-2'
  


  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-[#1FC8B4] z-40'>
        {activeMenu &&(<>
        <div className='flex justify-start ml-6 items-center'>
          <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 mt-5 flex font-bold tracking-tight text-slate-900 text-2xl'>
          <img
            src={logo} 
            className={`cursor-pointer`}
            width={32} height={32}
            alt="pharma bi logo"
          />
            <span>PHARMA BI</span>
          </Link>
        </div>
        <div className='mt-10 gap-2 flex flex-col'>
              {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <NavLink
                to={item.path}
                key={item.key}
                onClick={handleCloseSideBar}
                className={({isActive})=>
                  isActive?activeLink:normalLink
                }>
                  {item.icon}
                  <span className='capitalize '>{item.label}</span>


                </NavLink>
              ))}


        </div>
      </>)}


    </div>
  )
}

export default Sidebar