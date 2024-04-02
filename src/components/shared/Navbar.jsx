import React,{useEffect} from 'react'
import { FiCamera } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { useStateContext } from '../../context/ContextProvider';
import avatar from '../../assets/person-circle.svg'


const NavButton=({title,customFunc,icon,color,dotColor})=>(
      <button type='button' className='relative text-xl p-3  hover:bg-light-gray rounded-full'
        style={{color}}
        onClick={customFunc}>
      <span style={{background:dotColor}} className='
      absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
      </button>
  )

const Navbar = () => {
    const {activeMenu,setActiveMenu,screenSize,setScreenSize} = useStateContext()

  useEffect(()=>{
    const handleResize = ()=>{
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    handleResize()
    return ()=>window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
    if(screenSize<=900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  },[screenSize])
  return (
    <div className='flex justify-between p-2 relative bg-[#1FC8B4] w-full'>
      <NavButton 
      title="menu" 
      customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} 
      color="blue" 
      icon={<AiOutlineMenu/>}/>
     
      <div className='flex'>
      <NavButton 
      title="cart" 
      customFunc={()=>{}} 
      color="blue" 
      icon={<FiCamera/>}/>

      
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
        onClick={()=>{}}
        >
          <img src={avatar} alt="avatar" className='h-8 w-8 rounded-full'/>
          <p>
            <span>Hi, </span>
          </p>
          <BsArrowDownShort/>
        </div>
    

      </div>
    </div>
  )
}

export default Navbar