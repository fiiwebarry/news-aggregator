import React from 'react'
import { MenuContextProvider } from '/src/contextApi/SideBarContext'
import Guardian from '/src/components/Guardian'
import { Link } from "react-router-dom";
import NewsCred from '/src/components/Newscred'
import Newshub from '/src/components/Newshub'
import { SiAdguard, SiCodenewbie } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";


const Sidebar = () => {

  const { activeTab, setActiveTab, toggleNav } = MenuContextProvider()
  return (
    <aside className='relative shadow-lg w-[300px] h-screen'>
      <div className='{`pt-[1.44rem] md:pb-[8.12rem] pb-[3.12rem] w-[16rem] px-[1rem] absolute md:static ${toggleNav ? "left-0" : "-left-[50rem]"} top-0  transition-all duration-500`} '>
        <ul className='flex flex-col '>
          <li className={`flex items-center gap-[1.62rem] rounded-[0.25rem]  p-[0.5rem] ${activeTab === "newscred" ? "bg-[#33F] text-[#F0F0FF] " : "text-[#0A0A29]"}`}>
            <SiCodenewbie />
            <Link className='text-[#0A0A29] text-base leading-normal font-medium'>NewsCred</Link>


          </li>
          <li className={`flex items-center gap-[1.62rem]  rounded-[0.25rem]   p-[0.5rem] ${activeTab === "guardian" ? "bg-[#33F] text-[#F0F0FF] " : "text-[#0A0A29]"}`}>
            <SiAdguard />
            <Link className='text-[#0A0A29] text-base leading-normal font-medium'>Guardian</Link>


          </li>
          <li className={`flex items-center gap-[1.62rem]  rounded-[0.25rem]  p-[0.5rem] ${activeTab === "newshub" ? "bg-[#33F] text-[#F0F0FF] " : "text-[#0A0A29]"}`}>
            <IoNewspaperSharp />
            <Link className='text-[#0A0A29] text-base leading-normal font-medium'> NewsHub</Link>


          </li>
          <li className={`flex items-center gap-[1.62rem]  rounded-[0.25rem] p-[0.5rem] ${activeTab === "settings" ? "bg-[#33F] text-[#F0F0FF] " : "text-[#0A0A29]"}`}>
            <IoNewspaperSharp />
            <Link className='text-[#0A0A29] text-base leading-normal font-medium'> NewsHub</Link>


          </li>
          <li className={`flex items-center gap-[1.62rem]  rounded-[0.25rem]  p-[0.5rem] ${activeTab === "settings" ? "bg-[#33F] text-[#F0F0FF] " : "text-[#0A0A29]"}`}>
            <IoNewspaperSharp />
            <Link className='text-[#0A0A29] text-base leading-normal font-medium'> NewsHub</Link>


          </li>
          <li className={`flex items-center gap-[1.62rem]  rounded-[0.25rem]  p-[0.5rem] ${activeTab === "settings" ? "bg-[#33F] text-[#F0F0FF] " : "text-[#0A0A29]"}`}>
            <IoNewspaperSharp />
            <Link className='"text-[#0A0A29] text-base leading-normal font-medium"'> NewsHub</Link>


          </li>
        </ul>
      </div>


    </aside >
  )
}

export default Sidebar
