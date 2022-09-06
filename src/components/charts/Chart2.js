import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart2(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: ["", "", ""],
    datasets: [
      {
        label: "4\u03BC",
        data: props.data.map((d) => d.um_4),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        cubicInterpolationMode: "monotone",
        tension: 0.1,
      },
      {
        label: "6\u03BC",
        data: props.data.map((d) => d.um_6),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        cubicInterpolationMode: "monotone",
        tension: 0.1,
      },
      {
        label: "14\u03BC",
        data: props.data.map((d) => d.um_14),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        cubicInterpolationMode: "monotone",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
