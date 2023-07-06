import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Recent() {
  const navigate = useNavigate();

  const request = [
    {
      id: 43128188132,
      name: "Violet Moore",
      img: "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 174119235182,
      name: "Beatrice Soto",
      img: "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 13242143,
      name: "Mittie Steele",
      img: "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 171544119,
      name: "Herbert McLaughlin",
      img: "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 55191,
      name: "Martha Parker",
      img: "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 922494,
      name: "Kyle Young",
      img: "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
  ];

  return (
    <div className="w-3/4  my-5 bg-black/10 shadow-md rounded-3xl overflow-hidden relative hidden lg:flex items-center justify-center flex-col text-white">
      <span className="w-full px-5 font-bold text-xl flex items-center justify-start overflow-y-auto my-2">
        Recent activity
      </span>

      {request.map((item) => {
        return (
          <div key={item.id} className="w-full px-5">
            <span className="w-full h-16 bg-gray-900 rounded-lg shadow-lg my-2 flex items-start justify-center flex-col">
              <span className="w-full flex items-center justify-evenly p-1  relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-10 h-10 border-2 border-gray-300 mx-1 rounded-lg cursor-pointer"
                  onClick={() => navigate(`userProfile/${item.id}`)}
                />
                <h1
                  className="text-xs text-gray-300 font-semibold cursor-pointer"
                  onClick={() => navigate(`userProfile/${item.id}`)}
                >
                  {item.name}
                </h1>
                <button className="bg-yellow-300 font-semibold text-xs text-gray-700 px-3 py-1 my-1 rounded-xl">
                  follow
                </button>
                <RxCross2 className="text-white cursor-pointer" />
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Recent;
