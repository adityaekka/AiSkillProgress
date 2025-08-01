import { Chart as ChartJS } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import BarChart from "../components/BarChart"; // Import the BarChart component
import SkillProgressChart from "../components/SkillProgressChart"; // Import the SkillProgressChart component
const ProgressPage = () => {
  return (
    <div>
      <div>
        {/* Left side for navigation or other skill progress */}
        <div></div>

        {/* Right side to show the selected skill progress */}
        <div>
          {/* Menu to switch between different types of charts */}
          <div></div>

          {/* Actual Carts to show progress */}
          <div>
            {/* <BarChart></BarChart> */}
            <SkillProgressChart></SkillProgressChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
