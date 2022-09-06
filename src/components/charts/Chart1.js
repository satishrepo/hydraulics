import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ChartComp(props) {
  const data = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "# of Votes",
        data: [props.data?.totalFail, props.data?.totalSuccess],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="donut-container">
      <Doughnut data={data} />
    </div>
  );
}
