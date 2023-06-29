import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Post() {
    const navigate = useNavigate()

    const post = [
        {
            id : 12343,
            name : 'Mollie Mann',
            username : 'bo@domet.ua',
            profile : 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            picture : 'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id : 14326,
            name : 'Isabelle Hernandez',
            username : 'ge@fauza.im',
            profile : 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            picture : 'https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
        },
        {
            id : 30272,
            name : 'Rena Olson',
            username : 'durem@ucwepsan.af',
            profile : 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80',
            picture : 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
        },
        {
            id : 23415,
            name : 'Milton Santiago',
            username : 'nid@umilavar.sz',
            profile : 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2111&q=80',
            picture : 'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
        },
    ]
    return (
        <div className="w-full lg:w-4/5  my-2  px-3 py-2  flex items-center justify-center flex-col">
            {/* post  */}


            {
                post.map((item)=>{
                    return  <div className=" bg-black/10 w-full px-2 lg:px-4 py-2 my-3  rounded-3xl flex items-center justify-center flex-col" key={item.id}>
                    {/* post top section  */}
                    <span className="w-full flex items-center justify-center my-2">
    
                        <span className="w-1/12 flex items-center justify-center">
                            <img src={item.profile} alt="userPic"
                                className="lg:w-10 lg:h-10 w-8 h-8 rounded-2xl object-cover border-2 border-gray-500 cursor-pointer"
                                onClick={() => navigate(`/UserProfile:${item.id}`)}
                            />
                        </span>
                        <span className="w-3/4  flex items-start justify-center  flex-col">
                            <h3 className='mx-2 text-gray-400 text-xs cursor-pointer font-semibold my-1' onClick={() => navigate(`/UserProfile:${item.id}`)}>{item.username}</h3>
                            <h3 className='mx-2 text-gray-200 text-xs lg:text-sm cursor-pointer font-semibold' onClick={() => navigate(`/UserProfile:${item.id}`)}>{item.name}</h3>
                        </span>
                        <span className="w-1/12   flex items-center justify-center">
                            <BsThreeDotsVertical fontSize={22} className='text-white cursor-pointer my-2' />
                        </span>
                    </span>
                    <span className='text-white text-[6px] lg:text-xs w-full px-5 my-2 font-light tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos nemo harum eaque, pariatur corporis dolorum a suscipit praesentium sapiente.</span>
                    {/* post image section  */}
                    <span className='w-full object-cover px-5 my-4'>
                        <img src={item.picture} alt="post" className='w-full h-1/2 object-cover rounded-2xl' />
                    </span>
                    {/* like comment  */}
    
                        <span className='w-full flex items-center justify-start text-white px-5 my-1 border-b border-gray-700 py-3'>
                            <AiOutlineHeart fontSize={19} className='mx-2 cursor-pointer'/>
                            <FaRegCommentDots fontSize={19} className='mx-2 cursor-pointer'/>
                            <IoIosSend fontSize={19} className='mx-2 cursor-pointer'/>
                        </span>
    
                        {/* comments part  */}
                        <span className='w-full px-1 py-2 flex items-center justify-center'>
                        <img src={item.profile} alt="userPic"
                                className="lg:w-10 lg:h-10 w-8 h-8 rounded-2xl object-cover border-2 border-gray-500 cursor-pointer"
                            />
                            <input type="text" 
                            placeholder='Write your comment'
                            className='w-5/6 mx-4 text-gray-200 outline-none bg-black/20 h-9 rounded-lg text-sm px-3 placeholder:text-gray-600'/>
                        </span>
                </div>
                })
            }
           

        </div>
    )
}

export default Post
