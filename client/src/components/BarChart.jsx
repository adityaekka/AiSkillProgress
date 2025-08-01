// components/BarChart.js
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

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Dummy data: Number of subskills completed per day
  const data = {
    labels: ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6"],
    datasets: [
      {
        label: "Subtopics Completed",
        data: [2, 1, 3, 0, 2, 4],
        backgroundColor: "#3B82F6", // Tailwind's blue-500
        borderRadius: 6,
      },
      {
        label: "Subtopics In Progress",
        data: [1, 2, 1, 3, 0, 2],
        backgroundColor: "#F59E0B", // Tailwind's amber-500
        borderRadius: 6,
      },
      {
        label: "Subtopics Not Started",
        data: [3, 2, 1, 2, 4, 1],
        backgroundColor: "#EF4444", // Tailwind's red-500
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff", // optional: adapt for dark mode
        },
      },
      title: {
        display: true,
        text: "Daily Subtopic Completion Progress",
        color: "#fff",
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#4B5563" }, // optional darker grid lines
      },
      y: {
        ticks: { color: "#fff" },
        beginAtZero: true,
        grid: { color: "#4B5563" },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-800 p-4 rounded-xl shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
