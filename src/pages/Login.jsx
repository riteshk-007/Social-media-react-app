import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../firebase/Firebase";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signInUser(email, password);
    } catch (error) {
      alert(`user not found :( ${error}`);
    }
  };

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  return (
    <div className="lg:w-1/2 lg:h-screen w-full h-1/2 bg-black flex items-center justify-center flex-col py-3">
      <form
        className="w-full  bg-black flex items-center justify-center flex-col"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center flex-col  w-full lg:p-4 p-1 ">
          <span className="w-full text-white text-center font-bold text-xl md:text-4xl my-2">
            Login
          </span>
          <input
            type="email"
            placeholder="Email"
            className="my-3 lg:w-4/5 w-11/12 h-10 rounded-md bg-gray-800 px-4  text-white outline-yellow-600 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="my-3 lg:w-4/5 w-11/12 h-10 rounded-md bg-gray-800 text-white px-4  outline-yellow-600"
            value={password}
            autoComplete="true"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            className="my-3 lg:w-4/5 w-11/12  h-10 cursor-pointer font-bold bg-yellow-200 rounded-md"
            value={"Login"}
          />
          <span className="lg:w-4/5 w-11/12 lg:flex items-center justify-end text-sm text-gray-400">
            {" "}
            Dont have an account?{" "}
            <span className="mx-2 text-gray-200"> Sign up</span>
          </span>
        </div>
        <span className="text-white font-bold text-base md:text-4xl my-1">
          OR
        </span>
      </form>
      <button
        className="text-white flex items-center justify-center bg-blue-700 px-1 lg:px-4 py-2 text-xs lg:text-sm rounded-md shadow-lg font-semibold cursor-pointer my-2"
        onClick={firebase.signinWithGoogle}
      >
        <FcGoogle fontSize={20} className="shadow mx-1 lg:mx-2" /> Signin With
        Google
      </button>
    </div>
  );
}

export default Login;
