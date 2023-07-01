import { useEffect } from "react"
import NewpostUploader from "../components/NewpostUploader"
import Post from "../components/Post"
import { LuImagePlus } from 'react-icons/lu';

function ProfileSinglePage() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="w-full bg-black/10 p-3 flex items-center justify-center flex-col">
      <span className="w-full lg:w-11/12 flex items-center justify-center relative">
          <img src="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-96 object-cover rounded-2xl overflow-hidden shadow-md relative"/>
 
    
            <img src="https://images.unsplash.com/photo-1682688759350-050208b1211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-36 h-36 absolute left-2/4 -translate-x-1/2 -bottom-20 border-8 border-gray-700 rounded-2xl object-cover"/>
            <input type="file" id='image' className='hidden' accept="image/*"/>
            <label  htmlFor="image"><LuImagePlus fontSize={25} className="absolute right-3 text-green-800 bottom-2 cursor-pointer"/></label>

      </span>
      <div className=" mt-28 container mx-auto flex items-center justify-center ">

            <NewpostUploader/>
      </div>
      <div className=" container mx-auto flex items-center justify-center">
            <Post/>
      </div>

    </div>
  )
}

export default ProfileSinglePage
