import ProfileCom from "../components/ProfileCom"
import Recent from "../components/Recent"
import SkillCom from "../components/SkillCom"


function Home() {
  return (
    <div className="w-full flex items-start justify-center">

      {/* Left side components */}

      <div className="hidden lg:flex items-center justify-center flex-col p-4 w-0 md:w-1/4">
      <ProfileCom/>
        <SkillCom/>
      </div>

      {/* Center side components */}

      <div className="flex items-center justify-center flex-col border p-3 w-full lg:w-1/2">

      </div>

      {/* Right side components */}

      <div className="hidden lg:flex items-center justify-center flex-col  p-3 w-1/4">
            <Recent/>
      </div>
    </div>
  )
}

export default Home
