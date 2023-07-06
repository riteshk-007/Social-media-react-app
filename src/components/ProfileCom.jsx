import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../firebase/Firebase";

function ProfileCom() {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const id = firebase.userId;
  return (
    <div className="w-3/4 h-96  bg-black/10 shadow-md rounded-3xl overflow-hidden relative hidden lg:flex items-center justify-center flex-col text-white">
      {!firebase.url ? (
        <img
          src="/user.png"
          alt="userPic"
          className="w-full bg-black h-1/5 object-cover rounded-lg "
        />
      ) : (
        <img
          src={firebase.url}
          alt="userPic"
          className="w-full h-1/5 object-cover rounded-lg "
        />
      )}

      {!firebase.url ? (
        <img
          src="/user.png"
          alt="userPic"
          className="w-20 h-20 bg-gray-500 object-cover rounded-lg absolute border-4 border-gray-700 top-14 shadow-2xl"
        />
      ) : (
        <img
          src={firebase.url}
          alt="userPic"
          className="w-20 h-20 object-cover rounded-lg absolute border-4 border-gray-700 top-14 shadow-2xl"
        />
      )}

      <span className="w-full flex items-center justify-between px-7 h-1/5 ">
        <span className="flex items-center justify-center flex-col">
          <h1 className="font-bold">1986</h1>
          <h2 className="text-sm text-gray-500 font-semibold">Followers</h2>
        </span>
        <span className="flex items-center justify-center flex-col">
          <h1 className="font-bold">1009</h1>
          <h2 className="text-sm text-gray-500 font-semibold">Following</h2>
        </span>
      </span>

      <span className="w-full flex items-center justify-center  h-1/5">
        <span className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-2xl capitalize text-gray-200">
            {firebase.name}
          </h1>
          <h2 className="text-sm text-gray-500 font-semibold mt-1">
            {firebase.email}
          </h2>
        </span>
      </span>

      <span className="w-full text-center  h-1/5 capitalize flex-wrap px-5 text-gray-200 my-2">
        ✨Hello, im Front-end Developer. Open to the new Project. ✨
      </span>
      <button
        className="text center font-semibold w-4/5 rounded-xl bg-black/20 py-3"
        onClick={() => navigate(`/userProfile/${id}`)}
      >
        My Profile
      </button>
    </div>
  );
}

export default ProfileCom;
