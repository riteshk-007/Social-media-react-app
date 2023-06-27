import { Route, Routes } from "react-router-dom"
import TopHeader from "./components/TopHeader"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Help from "./pages/Help"
import Setting from "./pages/Setting"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Msg from "./pages/Msg"
import Notification from "./pages/Notification"
import ProfileSinglePage from "./pages/ProfileSinglePage"

function App() {
  return (
    <>
    <div className="w-full h-screen bg-black/80">
      <TopHeader/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/message" element={<Msg/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/UserProfile:id" element={<ProfileSinglePage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
