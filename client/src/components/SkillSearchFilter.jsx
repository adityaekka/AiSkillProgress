import { useState, useMemo } from "react";

const SkillSearchFilter = ({ skills, selectedSkillId, onSkillSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("All");
  const [sortOption, setSortOption] = useState("");

  const filteredSkills = useMemo(() => {
    let data = [...skills];

    // Search
    if (searchTerm.trim()) {
      data = data.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by progress (check subtopic status)
    if (filterOption !== "All") {
      data = data.filter((skill) =>
        skill.subtopics.some(
          (sub) => sub.status.toLowerCase() === filterOption.toLowerCase()
        )
      );
    }

    // Sort
    if (sortOption === "No of Subtopics") {
      data.sort((a, b) => b.subtopics.length - a.subtopics.length);
    } else if (sortOption === "Date Added") {
      data.sort(
        (a, b) => new Date(b.targetCompletion) - new Date(a.targetCompletion)
      );
    }

    return data;
  }, [skills, searchTerm, filterOption, sortOption]);

  return (
    <div>
      {/* Search + Filter UI */}
      <div className="flex flex-col gap-2 mb-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded w-full bg-textColor text-bgColor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-2 w-full sm:w-auto">
          <select
            className="px-3 py-2 rounded bg-textColor text-bgColor w-full"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="All">Filter: All</option>
            <option value="completed">Completed</option>
            <option value="in_progress">In Progress</option>
            <option value="not_started">Not Started</option>
          </select>

          <select
            className="px-3 py-2 rounded bg-textColor text-bgColor w-full"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By:</option>
            <option value="No of Subtopics">No of Subtopics</option>
            <option value="Date Added">Date Added</option>
          </select>
        </div>
      </div>

      {/* Scrollable list */}
      <div className="overflow-y-scroll bg-red-100 h-[300px]">
        {filteredSkills.map((skill) => (
          <button
            key={skill.id}
            onClick={() => onSkillSelect(skill.id)}
            className={`block w-full text-left px-3 py-2 rounded ${
              selectedSkillId === skill.id
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {skill.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillSearchFilter;
