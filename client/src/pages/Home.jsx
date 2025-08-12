import { useState } from "react";
import AddSubtopicModal from "../components/AddSubtopicModal";
import skillsData from "../skillsData/data.json";
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddProject = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSaveProject = (newProject) => {
    // setDemoProjects((prev) => [...prev, newProject]);
    alert("Project saved: " + JSON.stringify(newProject));
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center space-y-6 flex flex-col items-center">
        <div>
          <h1 className="text-5xl font-bold">Welcome to SkillForge</h1>
        </div>
        <button
          onClick={handleAddProject}
          className="bg-btnColor w-fit px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-transparent border-2 border-btnColor hover:scale-105"
        >
          Add Project
        </button>
        {skillsData && (
          <Link to={"/skillsPage"} className="text-blue-400 underline">
            Go to Projects
          </Link>
        )}
      </div>
      <AddSubtopicModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
      />
    </div>
  );
};

export default Home;
