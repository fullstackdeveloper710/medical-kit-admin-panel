import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "react-bootstrap";

const CardWithBarChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Informed RIDDOR",
        data: [44, 55, 41, 67, 22, 43,15, 21, 14,30],
      },
      {
        name: "Went to Hospital",
        data: [13, 23, 20, 8, 13, 27,15, 21, 14,30],
      },
      {
        name: "Minor",
        data: [11, 17, 15, 15, 21, 14,15, 21, 14,40],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#CCA300", "#FF6666", "#359742"],

      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
         
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        type: "",
        categories: [
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        // position: "top",
        horizontalAlign: "right",
        offsetY: 40,
        marginBottom: 20
       
      },
      grid: {
        // borderColor: '#f1f3fa',
        row: {
          // no need for the second color since only one color is used in this example
        //   opacity: 0.5
        },
        borderDashArray: [4, 10], // sets the horizontal grid lines to be dashed
      },
      fill: {
        opacity: 1,
      },
    },
  });
  return (
    <Card style={{border:'none'}}>
      <div style={{ padding: 15 }}>
        <div>
          <h3 style={{ fontWeight: "700", fontSize: "24px" }}>
            Number of Incidents
          </h3>
        </div>

        <div id="chart">3
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={300}
            width={"100%"}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </Card>
  );
};

export default CardWithBarChart;
