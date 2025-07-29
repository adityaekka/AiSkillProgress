const SubSkillCard = ({ idx, project }) => {
  return (
    <div
      key={idx}
      className="p-4 bg-cardBg rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            {project.name}
          </h2>
          <p className="text-sm text-gray-300 mt-1">{project.level}</p>
        </div>
        <div className="flex gap-2">
          {/* Add action buttons/icons here if needed */}
        </div>
      </div>

      {/* Progress bar example */}
      <div className="mt-4">
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-btnColor h-2.5 rounded-full"
            style={{ width: `${project.progress || 0}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {project.progress || 0}% complete
        </p>
      </div>

      {/* Additional project info */}
      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <span>Created: {project.dateAdded || "N/A"}</span>
        <span>Completed: {project.dateAdded || "N/A"}</span>
        <span>
          {project.tasks || 0}/{project.totalTasks || 10} tasks
        </span>
      </div>
    </div>
  );
};

export default SubSkillCard;
