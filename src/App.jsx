import { Route, Routes } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Home from "./pages/Home";
import ProfileSinglePage from "./pages/ProfileSinglePage";
import { useFirebase } from "../firebase/Firebase";
import LoginSignpage from "./components/LoginSignpage";

function App() {
  const firebase = useFirebase();

  if (!firebase.isLoggedIn) {
    return <LoginSignpage />;
  }

  return (
    <>
      <div className="w-full  bg-black/90">
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login&signup" element={<LoginSignpage />} />
          <Route path="/userProfile/:id" element={<ProfileSinglePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
