import { useLocation } from "react-router-dom";
import SkillProgressChart from "../components/SkillProgressChart";
import SubSkillCard from "../components/SubSkillCard";
const SkillPage = () => {
  const location = useLocation();
  const { project } = location.state || {};
  console.log("Project in SkillPage ", project);
  return (
    <>
      <div className="w-full h-full flex flex-col gap-2 items-center">
        <div>{project.name}</div>
        <div className=" w-full h-full flex flex-col items-center md:flex-row md:items-center md:justify-center gap-5 overflow-y-scroll ">
          <div className="w-full md:w-1/2 h-full bg-red-300 overflow-hidden">
            {/* Search + Filter UI */}
            <div className="flex flex-col gap-2 mb-2">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded w-full bg-textColor text-bgColor"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="flex gap-2 w-full sm:w-auto">
                <select
                  className="px-3 py-2 rounded bg-textColor text-bgColor w-full"
                  // value={filterOption}
                  // onChange={(e) => setFilterOption(e.target.value)}
                >
                  <option value="All">Filter: All</option>
                  <option value="completed">Completed</option>
                  <option value="in_progress">In Progress</option>
                  <option value="not_started">Not Started</option>
                </select>

                <select
                  className="px-3 py-2 rounded bg-textColor text-bgColor w-full"
                  // value={sortOption}
                  // onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Sort By:</option>
                  <option value="No of Subtopics">No of Subtopics</option>
                  <option value="Date Added">Date Added</option>
                </select>
              </div>
            </div>

            {/* Scrollable list */}
            <div className="overflow-y-scroll h-full flex flex-col gap-2">
              {project.subtopics.map((sub) => (
                <SubSkillCard sub={sub} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full bg-blue-300">
            <SkillProgressChart data={project} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillPage;
