import React from "react";
import { Line } from "react-chartjs-2";
import { format, parseISO, isValid } from "date-fns";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// --- vertical line plugin for tooltip hover ---
const verticalLinePlugin = {
  id: "verticalLine",
  afterDraw: (chart) => {
    const tooltip = chart.tooltip;
    const active = tooltip?._active || [];
    if (!active.length) return;
    const xs = active.map((a) => a.element.x);
    const avgX = xs.reduce((s, v) => s + v, 0) / xs.length;

    const ctx = chart.ctx;
    const topY = chart.scales.y.top;
    const bottomY = chart.scales.y.bottom;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(avgX, topY);
    ctx.lineTo(avgX, bottomY);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(180,180,180,0.9)";
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  verticalLinePlugin
);

const SkillProgressChart = ({ data }) => {
  // Collect all dates from subtopics, for all types
  const allDates = [];
  data.subtopics.forEach((st) => {
    ["createdAt", "startedAt", "completedAt"].forEach((key) => {
      if (st[key] && isValid(parseISO(st[key]))) {
        allDates.push(parseISO(st[key]));
      }
    });
  });

  if (!allDates.length) {
    return <div>No date data found.</div>;
  }

  // Pad timeline by 2 months before and after
  allDates.sort((a, b) => a - b);
  const firstDate = allDates[0];
  const lastDate = allDates[allDates.length - 1];
  allDates.unshift(
    new Date(firstDate.getFullYear(), firstDate.getMonth() - 2, 1)
  );
  allDates.push(new Date(lastDate.getFullYear(), lastDate.getMonth() + 2, 1));

  // Unique, sorted months for Y axis
  const monthSet = new Set(allDates.map((d) => format(d, "MMM yyyy")));
  const months = Array.from(monthSet);
  months.sort((a, b) => parseISO(`01 ${a}`) - parseISO(`01 ${b}`));

  // Helper to get Y index for a date
  const getMonthIdx = (date) =>
    date && isValid(parseISO(date))
      ? months.indexOf(format(parseISO(date), "MMM yyyy"))
      : null;

  // X axis is simply subtopic titles for each index
  const subtopicTitles = data.subtopics.map((st) => st.title);

  // For category axes, data should be arrays with indices matching label order
  const makeLineData = (key) =>
    data.subtopics.map((st) => {
      const idx = getMonthIdx(st[key]);
      return Number.isInteger(idx) ? idx : null;
    });

  const createdAtData = makeLineData("createdAt");
  const startedAtData = makeLineData("startedAt");
  const completedAtData = makeLineData("completedAt");

  const chartData = {
    labels: subtopicTitles,
    datasets: [
      {
        label: "Created At",
        data: createdAtData,
        borderColor: "rgb(75,192,192)",
        backgroundColor: "rgba(75,192,192,0.5)",
        tension: 0.3,
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: true,
        spanGaps: true, // <-- add this line
      },
      {
        label: "Started At",
        data: startedAtData,
        borderColor: "rgb(54,162,235)",
        backgroundColor: "rgba(54,162,235,0.5)",
        tension: 0.3,
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: true,
        spanGaps: true, // <-- add this line
      },
      {
        label: "Completed At",
        data: completedAtData,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
        tension: 0.3,
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: true,
        spanGaps: true, // <-- add this line
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Subtopic Timeline" },
      tooltip: {
        position: "average",
        mode: "index",
        intersect: false,
        callbacks: {
          title: function (ctx) {
            return ctx[0].label;
          },
          label: () => null, // you already suppress per-dataset text labels here
          afterBody: function (ctx) {
            const idx = ctx[0].dataIndex;
            const subtopic = data.subtopics[idx];
            const lines = [];
            if (subtopic.createdAt)
              lines.push(
                `Created: ${format(
                  parseISO(subtopic.createdAt),
                  "MMM dd, yyyy"
                )}`
              );
            if (subtopic.startedAt)
              lines.push(
                `Started: ${format(
                  parseISO(subtopic.startedAt),
                  "MMM dd, yyyy"
                )}`
              );
            if (subtopic.completedAt)
              lines.push(
                `Completed: ${format(
                  parseISO(subtopic.completedAt),
                  "MMM dd, yyyy"
                )}`
              );
            return lines;
          },
          // Add this callback for color boxes:
          labelColor: function (context) {
            return {
              borderColor: context.dataset.borderColor,
              backgroundColor: context.dataset.borderColor,
            };
          },
        },
        caretSize: 6,
        caretPadding: 6,
        backgroundColor: "rgba(18,18,18,0.95)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      y: {
        type: "linear",
        min: 0,
        max: months.length - 1,
        ticks: {
          callback: (val) => months[val] ?? "",
          stepSize: 1,
        },
        title: { display: true, text: "Timeline" },
      },
      x: {
        type: "category",
        labels: subtopicTitles,
        title: { display: true, text: "Subtopics" },
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default SkillProgressChart;
