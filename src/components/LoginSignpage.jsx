import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function LoginSignpage() {
  return (
    <div className="lg:flex items-center justify-center overflow-hidden relative">
      <img
        src="/logo2.png"
        alt="logo"
        className="lg:w-16 lg:h-16 w-10 h-10 my-2 absolute lg:top-20 top-2 left-2 lg:left-1/2 lg:-translate-x-1/2"
      />
      <Login />
      <hr />
      <SignUp />
    </div>
  );
}

export default LoginSignpage;
