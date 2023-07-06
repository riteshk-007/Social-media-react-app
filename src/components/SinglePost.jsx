/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFirebase } from "../../firebase/Firebase";

function SinglePost(props) {
  const [url, setUrl] = useState("");
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const navigate = useNavigate();
  const firebase = useFirebase();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    firebase.getImageURL(props.imageURL).then((url) => setUrl(url));
  }, [firebase, props]);

  return (
    <div
      className=" bg-black/10 w-full lg:px-4 py-2 my-3  rounded-3xl flex items-center justify-center flex-col"
      // eslint-disable-next-line react/prop-types
      key={props.id}
    >
      {/* post top section  */}
      <span className="w-full flex items-center justify-center my-2">
        <span className="w-1/12 flex items-center justify-center">
          {!props.photoURL ? (
            <img
              // eslint-disable-next-line react/prop-types
              src="/user.png"
              alt="userPic"
              className="lg:w-10 lg:h-10 w-8 h-8 rounded-2xl object-cover border-2 bg-gray-500 border-gray-500 cursor-pointer"
              // eslint-disable-next-line react/prop-types
              onClick={() => navigate(`/userProfile/${props.userID}`)}
            />
          ) : (
            <img
              // eslint-disable-next-line react/prop-types
              src={props.photoURL}
              alt="userPic"
              className="lg:w-10 lg:h-10 w-8 h-8 rounded-2xl object-cover border-2 border-gray-500 cursor-pointer"
              // eslint-disable-next-line react/prop-types
              onClick={() => navigate(`/userProfile/${props.userID}`)}
            />
          )}
        </span>
        <span className="w-3/4  flex items-start justify-center  flex-col">
          <h3
            className="mx-2 text-gray-400 text-xs cursor-pointer font-semibold my-1"
            // eslint-disable-next-line react/prop-types
            onClick={() => navigate(`/userProfile/${props.userID}`)}
            // eslint-disable-next-line react/prop-types
          >
            {props.useEmail}
          </h3>

          <h3
            className="mx-2 text-gray-200 text-xs lg:text-sm cursor-pointer font-semibold flex items-center justify-center"
            onClick={() => navigate(`/userProfile/${props.userID}`)}
          >
            {props.displayName}
            <span className="mx-2 text-xs text-gray-500 flex items-center justify-center">
              {" "}
              <p className="mx-2"> {currDate}</p>
              <p> {currTime}</p>
            </span>
          </h3>
        </span>
        <span className="w-1/12   flex items-center justify-center">
          <BsThreeDotsVertical
            fontSize={22}
            className="text-white cursor-pointer my-2 rotate-90"
          />
        </span>
      </span>
      <span className="text-white text-[8px] lg:text-xs w-full px-5 my-2 font-light tracking-wider">
        {/* eslint-disable-next-line react/prop-types */}
        {props.disc}
      </span>
      {/* post image section  */}
      <span className="w-full object-cover px-5 my-4">
        {!url ? (
          <img
            src=""
            className="w-full h-72 bg-gray-600 rounded-lg dark:bg-gray-600 border-none"
          />
        ) : (
          <img
            src={url}
            alt="post"
            className="w-full h-1/2 object-cover rounded-2xl"
          />
        )}
      </span>
      {/* like comment  */}

      <span className="w-full flex items-center justify-start text-white px-5 my-1 border-b border-gray-700 py-3">
        <AiOutlineHeart fontSize={19} className="mx-2 cursor-pointer" />
        <FaRegCommentDots fontSize={19} className="mx-2 cursor-pointer" />
        <IoIosSend fontSize={19} className="mx-2 cursor-pointer" />
      </span>

      {/* comments part  */}
      <span className="w-full px-1 py-2 flex items-center justify-center">
        {!firebase.url ? (
          <img
            src="/user.png"
            alt="userPic"
            className="lg:w-10 lg:h-10 w-8 h-8 rounded-2xl object-cover border-2 border-gray-500 cursor-pointer"
          />
        ) : (
          <img
            src={firebase.url}
            alt="userPic"
            className="lg:w-10 lg:h-10 w-8 h-8 rounded-2xl object-cover border-2 border-gray-500 cursor-pointer"
          />
        )}
        <input
          type="text"
          placeholder="Write your comment"
          className="w-5/6 mx-4 text-gray-200 outline-none bg-black/20 h-9 rounded-lg text-sm px-3 placeholder:text-gray-600"
        />
      </span>
    </div>
  );
}

export default SinglePost;
