import { HiHome } from 'react-icons/hi';
import { GoBell } from 'react-icons/go';
import { MdAccountCircle } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';
import { FaAngleDown, FaPowerOff } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
        
function TopHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const [scroll, setScroll] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams()
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])
          const handleScroll = ()=> {
            const offset = window.scrollY;
              if (offset > 45) {
                setScroll(true)
              } else {
                setScroll(false)
              }
          }

  
  return (
    <div className={`${scroll ? 'lg:container lg:mx-auto w-full flex items-center justify-around py-5 sticky top-0 z-50 bg-black rounded-lg' :'lg:container lg:mx-auto w-full flex items-center justify-around py-5 sticky top-0 z-50'}`}>

      {/*  logo and Search input */}
          <span className=" w-auto lg:w-2/6 flex items-center justify-center relative">
              <span className="lg:w-12 lg:h-10 w-7 h-7 bg-white rounded-3xl shadow-md mx-2 lg:mx-5 cursor-pointer flex items-center justify-center" onClick={()=>navigate('/')}>
                    <span className="lg:w-5 lg:h-5 w-3 h-3 bg-black cursor-pointer" onClick={()=>navigate('/')}></span>
              </span>
              <span className="lg:mx-5 lg:flex hidden w-full">
                <input type="text" 
                 className="bg-gray-700 hidden lg:flex w-11/12 sm:w-full md:w-1/2 h-8 outline-none border-2 text-gray-300 px-3 text-sm border-gray-700 shadow-2xl rounded-md"
                 placeholder="#Explore"
                 />
              </span>
              <span className="absolute left-8 top-0 lg:block hidden w-1 h-6 bg-black -rotate-45"></span>
          </span>

    {/*  menu buttons */}
          <span className=" w-auto lg:w-2/6 flex items-center justify-center ">
          <HiHome className='text-white cursor-pointer text-lg mx-3 lg:mx-7'onClick={()=>navigate('/')}/>
          <AiOutlineMessage className='text-white cursor-pointer text-lg mx-3 lg:mx-7' onClick={()=>navigate('/message')}/>
          <GoBell className='text-white cursor-pointer text-lg mx-3 lg:mx-7' onClick={()=>navigate('/notification')}/>
          <AiOutlineHeart className='text-white cursor-pointer text-lg mx-3 lg:mx-7'/>
          </span>


     {/* user menu  */}
          <span className="w-auto md:w-2/6 flex items-center justify-start md:justify-end cursor-pointer p-1 relative  z-50" onClick={()=> setShowMenu(!showMenu)}>
              <span className=' w-16 mr-1 lg:w-40 h-10 shadow-md bg-black/70 flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="userPic"  className='w-9 h-5/6 object-cover rounded-lg '/>
                    <h2 className='text-xs text-white mx-2 font-semibold lg:flex hidden'>Ritesh Kumar</h2>
                    <FaAngleDown className='mx-1 text-white'/>
              </span>
               {/* dropdown menu */}
            { showMenu &&  <div className='absolute w-full md:w-32 h-48 shadow-xl top-11 right-11 md:-right-5 flex items-center justify-center flex-col'>
                    <li className='w-36 h-1/4 bg-black/90 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-gray-900 transition-all duration-300' onClick={()=>navigate(`/userProfile/${id}`)}>
                    <MdAccountCircle fontSize={16} className='mx-2'/>
                     Account
                     </li>
                    <li className='w-36 h-1/4 bg-black/90 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-gray-900 transition-all duration-300' onClick={()=>navigate('/help')}>
                      <BiHelpCircle fontSize={16} className='mx-2'/>
                       Help
                       </li>
                    <li className='w-36 h-1/4 bg-black/90 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-gray-900 transition-all duration-300'
                    onClick={()=>navigate('/setting')}>
                      <FiSettings fontSize={16} className='mx-2'/> 
                      Setting
                      </li>
                    <li className='w-36 h-1/4 bg-black/90 shadow flex items-center justify-start list-none px-1 text-white text-xs font-bold hover:bg-gray-900 transition-all duration-300'
                     onClick={()=>navigate('/login')}>
                      <FaPowerOff fontSize={16} className='mx-2'/>
                       Log Out
                       </li>
               </div>}

          </span>
                   

    </div> 
  )
}

export default TopHeader
