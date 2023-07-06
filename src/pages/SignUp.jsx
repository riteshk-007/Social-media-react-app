import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../firebase/Firebase";
import { useEffect, useState } from "react";

function SignUp() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signupUser(email, password);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);
  return (
    <div className="lg:w-1/2 lg:h-screen w-full h-1/2 bg-black flex items-center justify-center py-3">
      <form
        className="w-full  bg-black flex items-center justify-center flex-col"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center flex-col  w-full lg:p-4 p-1 ">
          <span className="w-full text-white text-center font-bold text-xl md:text-4xl my-2">
            Sign In
          </span>
          <input
            type="email"
            placeholder="Email"
            className="my-3 lg:w-4/5 w-11/12 h-10 rounded-md bg-gray-800 px-4  text-white outline-yellow-600 "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="my-3 lg:w-4/5 w-11/12 h-10 rounded-md bg-gray-800 text-white px-4  outline-yellow-600"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="true"
            required
          />
          <input
            type="submit"
            className="my-3 lg:w-4/5 w-11/12 h-10 cursor-pointer font-bold bg-yellow-200 rounded-md"
            value={"Create Account"}
          />
          <span className="lg:w-4/5 w-11/12 lg:flex items-center justify-end text-sm text-gray-400">
            {" "}
            Have an account? <span className="mx-2 text-gray-200"> Login </span>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
