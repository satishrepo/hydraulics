import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export default function Chart3({ labels, datas }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Item Code",
        data: datas.map((e) => e),
        backgroundColor: ["#fd9644"],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
