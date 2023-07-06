import { useEffect } from "react";
import NewpostUploader from "../components/NewpostUploader";
import Post from "../components/Post";
import { LuImagePlus } from "react-icons/lu";
import { useFirebase } from "../../firebase/Firebase";

function ProfileSinglePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const firebase = useFirebase();

  return (
    <div className="w-full bg-black/10 p-3 flex items-center justify-center flex-col">
      <span className="w-full lg:w-11/12 flex items-center justify-center relative">
        {!firebase.url ? (
          <img
            src="/user.png"
            alt=""
            className="w-full h-96 object-contain rounded-2xl overflow-hidden shadow-md relative"
          />
        ) : (
          <img
            src={firebase.url}
            alt=""
            className="w-full h-96 object-cover rounded-2xl overflow-hidden shadow-md relative"
          />
        )}

        {!firebase.url ? (
          <img
            src="/user.png"
            alt=""
            className="w-36 h-36 absolute left-2/4 bg-black -translate-x-1/2 -bottom-20 border-8 border-gray-700 rounded-2xl object-cover"
          />
        ) : (
          <img
            src={firebase.url}
            alt=""
            className="w-36 h-36 absolute left-2/4 -translate-x-1/2 -bottom-20 border-8 border-gray-700 rounded-2xl object-cover"
          />
        )}

        <input type="file" id="image" className="hidden" accept="image/*" />
        <label htmlFor="image">
          <LuImagePlus
            fontSize={25}
            className="absolute right-3 text-white bottom-2 cursor-pointer"
          />
        </label>
      </span>
      <div className=" mt-28 container mx-auto flex items-center justify-center ">
        <NewpostUploader />
      </div>
      <div className=" container mx-auto flex items-center justify-center">
        <Post />
      </div>
    </div>
  );
}

export default ProfileSinglePage;
