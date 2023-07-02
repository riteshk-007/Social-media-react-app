import { Route, Routes } from "react-router-dom"
import TopHeader from "./components/TopHeader"
import Home from "./pages/Home"
import Help from "./pages/Help"
import Setting from "./pages/Setting"
import Msg from "./pages/Msg"
import Notification from "./pages/Notification"
import ProfileSinglePage from "./pages/ProfileSinglePage"
import { useFirebase } from "../firebase/Firebase"
import LoginSignpage from "./components/LoginSignpage"

function App() {
  const firebase = useFirebase()

  if(!firebase.isLoggedIn){
    return(
     <LoginSignpage/>
    )   
  }

  return (
    <>
    <div className="w-full  bg-black/90">
      <TopHeader/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/login&signup" element={<LoginSignpage/>}/>
        <Route path="/message" element={<Msg/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/userProfile/:id" element={<ProfileSinglePage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
