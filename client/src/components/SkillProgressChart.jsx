import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SkillProgressChart = () => {
  // Dummy topics and dates (convert dates to day-of-month or labels for simplicity)
  const labels = ["Hooks", "State", "Props", "Lifecycle"];

  const data = {
    labels,
    datasets: [
      {
        label: "Created",
        data: [1, 2, 3, 4], // can be timestamp or day number
        backgroundColor: "#facc15", // yellow
      },
      {
        label: "Started",
        data: [2, 3, 4, 5],
        backgroundColor: "#3b82f6", // blue
      },
      {
        label: "Completed",
        data: [4, 5, 6, 7],
        backgroundColor: "#22c55e", // green
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#fff" },
      },
      title: {
        display: true,
        text: "React Subtopic Progress Timeline",
        color: "#fff",
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#334155" },
      },
      y: {
        title: {
          display: true,
          text: "Day of the Month",
          color: "#fff",
        },
        ticks: {
          color: "#fff",
          precision: 0,
        },
        beginAtZero: true,
        grid: { color: "#334155" },
      },
    },
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl max-w-4xl mx-auto">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillProgressChart;
