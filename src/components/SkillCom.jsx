import { MdClose } from "react-icons/md";

function SkillCom() {
  const skill = [
    "html",
    "css",
    "javascript",
    "bootstrap",
    "tailwind",
    "jquery",
    "react js",
    "wordpress",
    "Git & Github",
    "GSAP",
  ];
  return (
    <div className="w-3/4 h-96 my-5  shadow-md rounded-3xl overflow-hidden relative hidden lg:flex items-center justify-center flex-col text-white">
      <span className="w-full px-5 font-bold text-2xl flex items-center justify-between">
        <span>Skills</span>{" "}
        <input
          type="text"
          className="w-40 h-6 bg-transparent outline-none border border-gray-700 text-sm font-thin px-2 rounded-md placeholder:text-xs text-gray-300"
          placeholder="type here your skills.."
        />
      </span>
      <span className="w-full h-3/4 flex items-center justify-start flex-wrap p-2">
        {skill.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center  cross mx-1"
            >
              <span className="capitalize bg-gray-800 px-3 p-1 text-xs font-semibold rounded-xl ">
                {item}
              </span>
              <MdClose className="icon opacity-0 cursor-pointer mr-0" />
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default SkillCom;
