import { BsImage, BsFillCalendar2HeartFill } from "react-icons/bs";
import { MdOutlineSlowMotionVideo, MdOutlinePoll } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useFirebase } from "../../firebase/Firebase";
import { useState } from "react";

function NewpostUploader() {
  const [uploadData, setUploadData] = useState(false);
  const [cover, setCover] = useState("");
  const [disc, setDisc] = useState("");
  const [value, setValue] = useState("Upload");

  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreatePost(disc, cover);
    setUploadData(false);
  };

  const handleClick = () => {
    const submit = document.querySelector(".submit");
    submit.style.cursor = "no-drop";
    setValue("Uploading..");
    setInterval(() => {
      setValue("Upload");
      submit.style.cursor = "pointer";
    }, 2500);
  };

  return (
    <div className="w-full lg:w-4/5  rounded-xl px-3 py-2  bg-black/20  flex items-center justify-center flex-col">
      <span className="flex items-center justify-center w-full">
        {!firebase.url ? (
          <img
            src="/user.png"
            alt=""
            className="lg:w-12 bg-black lg:h-12 w-10 h-10 rounded-2xl border-2 border-gray-500 object-cover overflow-hidden "
          />
        ) : (
          <img
            src={firebase.url}
            alt=""
            className="lg:w-12 lg:h-12 w-10 h-10 rounded-2xl border-2 border-gray-500 object-cover overflow-hidden"
          />
        )}

        <input
          type="text"
          className="w-3/4 lg:h-9 h-8 bg-black/40 mx-2  rounded-lg px-4 text-gray-300 outline-none text-xs lg:text-sm"
          placeholder="Tell your friends about your thoughts..."
          maxLength={1}
          onChange={() => setUploadData(true)}
        />
      </span>

      <span className="flex items-center justify-end w-full lg:w-4/5 my-3">
        <label
          className="flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2  lg:mr-8"
          onClick={() => setUploadData(true)}
        >
          <BsImage className="text-green-600 mx-1" />
          <h3 className="text-white text-xs">Photo</h3>
        </label>
        <label
          className="flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2 mr-1 lg:mr-8"
          htmlFor="video"
        >
          {/* <input type="file" id='video' className='hidden' accept="video/mp4,video/mkv, video/x-m4v,video/*"/> */}
          <MdOutlineSlowMotionVideo
            fontSize={18}
            className="text-blue-600 mx-1"
          />
          <h3 className="text-white text-xs">Video</h3>
        </label>
        <label className="flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2 mr-1 lg:mr-8">
          <MdOutlinePoll fontSize={18} className="text-orange-600 mx-1" />
          <h3 className="text-white text-xs">Poll</h3>
        </label>
        <label className="flex items-center justify-center  bg-black/20 px-3 rounded-lg cursor-pointer py-2">
          <BsFillCalendar2HeartFill className="text-yellow-600 mx-1" />
          <h3 className="text-white text-xs">Schedule</h3>
        </label>
      </span>

      {uploadData && (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 flex items-center justify-center">
          <form
            className="w-full flex items-center justify-center h-full"
            onSubmit={handleSubmit}
          >
            <div className="md:w-1/4  bg-gray-700 relative shadow-lg rounded-md flex items-center justify-center flex-col text-white px-3">
              <input
                type="file"
                id="image"
                accept="image/*"
                className="my-3 cursor-pointer file:bg-yellow-200 file:border-yellow-400 file:text-base file:font-semibold file:rounded-md file:mx-5 file:outline-none file:shadow-md file:font-sans file:cursor-pointer file:px-4"
                onChange={(e) => setCover(e.target.files[0])}
                required
              />
              <input
                type="text"
                maxLength={150}
                placeholder="post title...."
                onChange={(e) => setDisc(e.target.value)}
                value={disc}
                className="w-full my-3 bg-transparent border border-gray-900 rounded px-2 text-sm outline-none py-2 placeholder:text-gray-300"
                required
              />

              <input
                type="submit"
                className="bg-yellow-500 px-5 py-2 my-4 text-white font-semibold rounded-md cursor-pointer submit"
                value={value}
                onClick={handleClick}
              />
              <ImCross
                fontSize={15}
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setUploadData(false)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default NewpostUploader;
