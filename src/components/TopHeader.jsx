import { HiHome } from 'react-icons/hi';
import { GoBell } from 'react-icons/go';
import { MdAccountCircle } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';
import { FaAngleDown, FaPowerOff } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
        
function TopHeader() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="container mx-auto  md:flex items-center justify-between  py-5">

      {/*  logo and Search input */}
          <span className="w-full md:w-2/6 flex items-center justify-center md:justify-start relative md:mb-0 mb-2">
              <span className="w-12 h-10 bg-white rounded-full shadow-md mx-5 cursor-pointer flex items-center justify-center">
                    <span className="w-5 h-5 bg-black s"></span>
              </span>
              <span className="mx-5 w-full">
                <input type="text" 
                 className="bg-gray-700 w-11/12 sm:w-full md:w-1/2 h-8 outline-none border-2 text-gray-300 px-3 text-sm border-gray-700 shadow-2xl rounded-md"
                 placeholder="#Explore"
                 />
              </span>
              <span className="absolute left-8 top-0 w-0 md:w-1 h-6 bg-black -rotate-45"></span>
          </span>

    {/*  menu buttons */}
          <span className="w-full md:w-2/6 flex items-center justify-center md:mt-0 mt-3">
          <HiHome className='text-white cursor-pointer text-lg mx-7'/>
          <AiOutlineMessage className='text-white cursor-pointer text-lg mx-7'/>
          <GoBell className='text-white cursor-pointer text-lg mx-7'/>
          <AiOutlineHeart className='text-white cursor-pointer text-lg mx-7'/>
          </span>


     {/* user menu  */}
          <span className="w-full md:w-2/6 flex items-center justify-start md:justify-end cursor-pointer p-1 relative md:mt-0 mt-3" onClick={()=> setShowMenu(!showMenu)}>
              <span className='w-full md:w-40 h-10 shadow-md bg-black/20 flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="userPic"  className='w-9 h-5/6 object-cover rounded-lg '/>
                    <h2 className='text-xs text-white mx-2 font-semibold'>Ritesh Kumar</h2>
                    <FaAngleDown className='mx-1 text-white'/>
              </span>
               {/* dropdown menu */}
            { showMenu &&  <div className='absolute w-full md:w-32 h-48 shadow-xl top-11 right-0 md:-right-5 flex items-center justify-center flex-col'>
                    <li className='w-full h-1/4 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-black/20 transition-all duration-300'><MdAccountCircle fontSize={16} className='mx-2'/> Account</li>
                    <li className='w-full h-1/4 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-black/20 transition-all duration-300'><BiHelpCircle fontSize={16} className='mx-2'/> Help</li>
                    <li className='w-full h-1/4 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-black/20 transition-all duration-300'><FiSettings fontSize={16} className='mx-2'/> Setting</li>
                    <li className='w-full h-1/4 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-black/20 transition-all duration-300'><FaPowerOff fontSize={16} className='mx-2'/> Log Out</li>
               </div>}

          </span>
                   

    </div> 
  )
}

export default TopHeader
