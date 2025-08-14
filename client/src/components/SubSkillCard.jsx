const statusColors = {
  completed: "bg-green-200 text-green-800",
  in_progress: "bg-yellow-200 text-yellow-800",
  not_started: "bg-gray-200 text-gray-800",
};

const priorityColors = {
  high: "text-red-500 font-bold",
  medium: "text-yellow-500 font-semibold",
  low: "text-green-500",
};
const SubSkillCard = ({ sub }) => {
  return (
    <div
      key={sub.id}
      className="border rounded-lg p-3 hover:shadow-md transition"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{sub.title}</h2>
        <span
          className={`px-2 py-1 text-xs rounded ${statusColors[sub.status]}`}
        >
          {sub.status.replace("_", " ")}
        </span>
      </div>
      <div className="text-sm text-gray-500">
        Priority:{" "}
        <span className={priorityColors[sub.priority]}>{sub.priority}</span>
      </div>
      <div className="mt-1 text-xs text-gray-500">
        Created: {sub.createdAt} <br />
        {sub.startedAt && (
          <>
            Started: {sub.startedAt} <br />
          </>
        )}
        {sub.completedAt && <>Completed: {sub.completedAt}</>}
      </div>
    </div>
  );
};

export default SubSkillCard;
