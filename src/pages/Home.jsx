import NewpostUploader from "../components/NewpostUploader";
import Post from "../components/Post";
import ProfileCom from "../components/ProfileCom";
import Recent from "../components/Recent";
import SkillCom from "../components/SkillCom";
import Story from "../components/Story";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex items-start justify-center">
      {/* Left side components */}

      <div className="hidden lg:flex items-center justify-center flex-col p-4 w-0 md:w-1/4 sticky left-0 top-16">
        <ProfileCom />
        <SkillCom />
      </div>

      {/* Center side components */}

      <div className="flex items-center justify-center flex-col  p-3 w-full lg:w-1/2">
        <Story />
        <NewpostUploader />
        <Post />
      </div>

      {/* Right side components */}

      <div className="hidden lg:flex items-center justify-center flex-col  p-3 w-1/4 sticky right-0 top-16">
        <Recent />
      </div>
    </div>
  );
}

export default Home;
