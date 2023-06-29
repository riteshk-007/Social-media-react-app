import { BsImage, BsFillCalendar2HeartFill } from 'react-icons/bs';
import { MdOutlineSlowMotionVideo, MdOutlinePoll } from 'react-icons/md';
function NewpostUploader() {
  return (
    <div className="w-full lg:w-4/5  rounded-xl px-3 py-2  bg-black/20  flex items-center justify-center flex-col">
        <span className="flex items-center justify-center w-full">
            <img src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="lg:w-12 lg:h-12 w-10 h-10 rounded-2xl border-2 border-gray-500 object-cover overflow-hidden"/>
            <input type="text" className="w-3/4 lg:h-9 h-8 bg-black/40 mx-2  rounded-lg px-4 text-gray-300 outline-none text-xs lg:text-sm" placeholder="Tell your friends about your thoughts..."/>
        </span>

        <span className="flex items-center justify-end w-full lg:w-4/5 my-3">
                <label className='flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2  lg:mr-8' htmlFor='image'>
            <input type="file" id='image' className='hidden' accept="image/*"/>
                        <BsImage className='text-green-600 mx-1'/> 
                        <h3 className='text-white text-xs'>Photo</h3>
                </label>
                <label className='flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2 mr-1 lg:mr-8' htmlFor='video'>
            <input type="file" id='video' className='hidden' accept="video/mp4,video/mkv, video/x-m4v,video/*"/>
                        <MdOutlineSlowMotionVideo fontSize={18} className='text-blue-600 mx-1'/> 
                        <h3 className='text-white text-xs'>Video</h3>
                </label>
                <label className='flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2 mr-1 lg:mr-8' >
                        <MdOutlinePoll fontSize={18} className='text-orange-600 mx-1'/> 
                        <h3 className='text-white text-xs'>Poll</h3>
                </label>
                <label className='flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2'>
                        <BsFillCalendar2HeartFill className='text-yellow-600 mx-1'/> 
                        <h3 className='text-white text-xs'>Schedule</h3>
                </label>
        </span>
    </div>
  )
}

export default NewpostUploader
