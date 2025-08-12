const SubSkillCard = ({ idx, project }) => {
  console.log("Project Data:", project);
  let totalSubtopics = project.subtopics.length || 0;
  let completedSubtopics =
    project.subtopics.filter((task) => task.status === "completed").length || 0;

  let percentage = Math.floor((completedSubtopics / totalSubtopics) * 100);

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
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-1">{percentage}% complete</p>
      </div>

      {/* Additional project info */}
      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <span>
          Status:{" "}
          {percentage === 100
            ? "Completed"
            : percentage === 0
            ? "Not Started"
            : "In Progress"}
        </span>
        <span>
          {completedSubtopics}/{totalSubtopics} tasks
        </span>
      </div>
    </div>
  );
};

export default SubSkillCard;
