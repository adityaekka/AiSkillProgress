import { useState, useEffect } from "react";
import { SubSkillCard, AddSubtopicModal } from "../components/components";
const demoProjects = [
  { name: "React JS", level: "Intermediate", started: "20 July 2023" },
  { name: "SQL", level: "Beginner", started: "20 July 2023" },
  { name: "Node.js", level: "Advanced", started: "15 August 2023" },
  { name: "Express.js", level: "Beginner", started: "15 August 2023" },
  { name: "TypeScript", level: "Intermediate", started: "1 September 2023" },
  { name: "GraphQL", level: "Beginner", started: "10 September 2023" },
  { name: "Docker", level: "Intermediate", started: "25 September 2023" },
  { name: "AWS", level: "Beginner", started: "5 October 2023" },
  { name: "Python", level: "Advanced", started: "15 October 2023" },
  { name: "Machine Learning", level: "Beginner", started: "1 November 2023" },
  {
    name: "Data Structures",
    level: "Intermediate",
    started: "10 November 2023",
  },
  { name: "Algorithms", level: "Advanced", started: "20 November 2023" },
];
const SkillPage = (skill) => {
  const [projects, setProjects] = useState([]); // holds project data
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(filteredProjects);
  const handleAddProject = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSaveProject = (newProject) => {
    // setDemoProjects((prev) => [...prev, newProject]);
    alert("Project saved: " + JSON.stringify(newProject));
  };

  useEffect(() => {
    // Check if localStorage has data, otherwise set demo
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (!storedProjects || storedProjects.length === 0) {
      localStorage.setItem("projects", JSON.stringify(demoProjects));
      setProjects(demoProjects);
      setFilteredProjects(demoProjects);
    } else {
      setProjects(storedProjects);
      setFilteredProjects(storedProjects);
    }
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
    setFilteredProjects(
      projects.filter((proj) =>
        proj.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // const handleAddProject = () => {
  //   alert("Add Project functionality to be implemented.");
  // };
  return (
    <div className="w-full h-full flex items-center justify-center px-4 md:px-10 pb-10">
      <div className="w-full max-w-7xl h-full">
        {/* Skill Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          {skill.name || "React JS"}
        </h1>

        {/* Container */}
        <div className="w-full h-full bg-textColor rounded-xl shadow-lg px-4 md:px-8 py-6">
          {/* Top Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search subtopics..."
              value={search}
              onChange={handleSearch}
              className="px-4 py-2 w-full md:w-1/3 rounded-md bg-bgColor text-textColor placeholder:text-textColor/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-btnColor transition"
            />

            <div className="flex gap-2 w-full md:w-auto justify-end">
              <select className="px-3 py-2 rounded-md bg-bgColor text-textColor border border-gray-600">
                <option>All</option>
                <option>Date Added</option>
                <option>Progress</option>
              </select>
              <button
                className="bg-btnColor text-white px-4 py-2 rounded-md hover:bg-btnColor/90 transition"
                onClick={handleAddProject}
              >
                + Add Subtopic
              </button>
            </div>
          </div>

          {/* Project Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-[calc(100vh-260px)] pr-2 custom-scrollbar">
            {demoProjects.length ? (
              demoProjects.map((project, idx) => (
                <SubSkillCard key={idx} idx={idx} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400">
                No subtopics found.
              </div>
            )}
          </div>
        </div>
      </div>
      <AddSubtopicModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
      />
    </div>
  );
};

export default SkillPage;
