import React, { useEffect, useState } from "react";
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
import { groupBy, sumBy } from "lodash";
import * as moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function Chart4(props) {
  const [graphData, setGraphData] = useState([]);
  const [labels, setLabels] = useState([]);

  const [dataset1, setDataSet1] = useState([]);
  const [dataset2, setDataSet2] = useState([]);

  useEffect(() => {
    const groupedResponse = groupBy(props.data, ({ creadtedOn }) =>
      new Date(creadtedOn).getMonth()
    );
    setGraphData(groupedResponse);

    const months = [];
    const result1 = [];
    const result2 = [];
    for (const key in groupedResponse) {
      months.push(moment(groupedResponse[key][0].creadtedOn).format("MMM"));
      result1.push(
        sumBy(groupedResponse[key], function (o) {
          return o.fail;
        })
      );
      result2.push(
        sumBy(groupedResponse[key], function (o) {
          return o.pass;
        })
      );
    }
    setLabels(months);
    setDataSet1(result1);
    setDataSet2(result2);
  }, [props.data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Fail",
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Pass",
        data: dataset2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
