import { useState } from "react";
import SkillProgressChart from "../components/SkillProgressChart";
import { skillsData } from "../skillsData/data.json";
import SkillSearchFilter from "../components/SkillSearchFilter";

const chartTypes = ["bar", "line", "area"];

const ProgressPage = () => {
  const [selectedChartType, setSelectedChartType] = useState("bar");
  const [selectedSkillId, setSelectedSkillId] = useState(skillsData[0]?.id);

  const selectedSkillData = skillsData.find(
    (skill) => skill.id === selectedSkillId
  );

  return (
    <div className="w-full h-full flex items-center justify-center px-4 md:px-10 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar */}

        <aside className="bg-white p-4 rounded shadow-md md:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Skill Navigation
          </h2>

          <SkillSearchFilter
            skills={skillsData}
            selectedSkillId={selectedSkillId}
            onSkillSelect={(id) => setSelectedSkillId(id)}
          />
        </aside>

        {/* Main Content */}
        <main className="bg-white p-6 rounded shadow-md md:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {selectedSkillData?.name} Progress
            </h1>

            {/* Chart type buttons */}
            <div className="flex gap-2">
              {chartTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedChartType(type)}
                  className={`px-4 py-2 rounded border ${
                    selectedChartType === type
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border-blue-600"
                  } hover:bg-blue-500 hover:text-white transition`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Display */}
          <div className="w-full h-[400px]">
            {selectedSkillData && (
              <SkillProgressChart
                // type={selectedChartType}
                // skillData={selectedSkillData}
                data={selectedSkillData}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProgressPage;
