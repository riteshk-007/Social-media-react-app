import { useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
    <div className="flex items-center justify-center flex-col  w-full md:w-2/5 p-4 ">
        <span className="w-full text-white text-center font-bold text-xl md:text-4xl my-2">Sign Up</span>
              <input type="email" placeholder="Email or Number" className="my-3 w-4/5 h-10 rounded-md bg-gray-800 px-4  text-white outline-yellow-600 " required/>
              <input type="name" placeholder="Name" className="my-3 w-4/5 h-10 rounded-md bg-gray-800 text-white px-4  outline-yellow-600" required/>
              <input type="name" placeholder="Username" className="my-3 w-4/5 h-10 rounded-md bg-gray-800 text-white px-4  outline-yellow-600" required/>
              <input type="password" placeholder="Password" className="my-3 w-4/5 h-10 rounded-md bg-gray-800 text-white px-4  outline-yellow-600" required/>
              <input type="submit" className="my-3 w-4/5 h-10 cursor-pointer font-bold bg-yellow-200 rounded-md" value={'Sign Up'}/>
              <span className="w-4/5 flex items-center justify-end text-sm text-gray-400"> Have an account?  <span className="mx-2 cursor-pointer text-gray-200" onClick={()=> navigate('/login')}> Login </span></span>
    </div>
  </div>
  )
}

export default SignUp
