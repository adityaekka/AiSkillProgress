import { useState, useEffect } from "react";
import { SkillCard, AddSkillModal } from "../components/components";

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

const Home = () => {
  const [projects, setProjects] = useState([]); // holds project data
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  console.log(filteredProjects);

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

  if (projects.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center space-y-6">
          <div>
            <h1 className="text-5xl font-bold">Welcome to SkillForge</h1>
            <p className="mt-2 text-lg">Start Learning</p>
          </div>
          <button className="bg-btnColor px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-transparent border-2 border-btnColor hover:scale-105">
            Add Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="max-w-6xl mx-auto">
        {/* Top Action Bar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={handleSearch}
            className="px-4 py-2 rounded w-1/3 bg-textColor text-bgColor"
          />
          <div className="flex gap-2">
            <select className="px-3 py-2 rounded bg-textColor text-bgColor">
              <option>All</option>
              <option>Date Added</option>
              <option>Progress</option>
            </select>
            <button
              className="bg-btnColor px-4 py-2 rounded hover:bg-btnColor transition"
              onClick={handleAddProject}
            >
              + Add Project
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-scroll h-[calc(100vh-200px)]">
          {demoProjects.map((project, idx) => (
            <SkillCard key={idx} idx={idx} project={project} />
          ))}
        </div>
      </div>
      <AddSkillModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
      />
    </div>
  );
};

export default Home;
