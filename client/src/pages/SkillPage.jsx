import { useLocation } from "react-router-dom";

const SkillPage = () => {
  const location = useLocation();
  const { project } = location.state || {};
  console.log("Project in SkillPage ", project);
  return (
    <>
      <div className="w-full h-full flex flex-col items-center md:flex-row md:items-center md:justify-center gap-5 overflow-y-scroll">
        <div className="w-full md:w-1/2 h-full bg-red-300 overflow-y-scroll">
          <div></div>
        </div>
        <div className="w-full md:w-1/2 h-full bg-blue-300"></div>
      </div>
    </>
  );
};

export default SkillPage;
