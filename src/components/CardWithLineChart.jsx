import { useState } from "react";
import { Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";

const CardWithLineChart = () => {
  const [ii] = useState({
    // series: [
    //   {
    //     name: "Desktops",
    //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    //   },
    // ],
    // options: {
    //   chart: {
    //     height: 350,
    //     type: "line",
    //     zoom: {
    //       enabled: false,
    //     },
    //     toolbar: {
    //         show: false
    //       },
    //   },

    //   xaxis: {
    //     // Other x-axis configuration options
    //     axisBorder: {
    //       // Other axis border options
    //       strokeDashArray: [2, 4] // Adjust the values to change the dot-dash pattern
    //     },
    //      categories: [
    //         "Jan",
    //         "Feb",
    //         "Mar",
    //         "Apr",
    //         "May",
    //         "Jun",
    //         "Jul",
    //         "Aug",
    //         "Sep",
    //       ],
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   stroke: {
    //     curve: "smooth", // You can specify the curve type if needed
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 1,
    //       opacity: 0.10
    //     }
    //   },
    //   title: {

    //     show :false
    //   },
    //   grid: {
    //     show :false,

    //   },
    //   yaxis:{
    //     labels: {
    //         formatter: function (value) {
    //           return value.toFixed(2); // You can format the y-axis labels as needed
    //         }
    //       }
    //   }

    // },
    options: {
      chart: {
        type: "line",
        height: 350, // Adjust the height of the chart as needed
      },
      series: [
        {
          name: "Series 1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        title: {
          text: "Month", // Title for x-axis
        },
      },
      yaxis: {
        title: {
          text: "Value", // Title for y-axis
        },
      },
    },
  });
  const [state] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        toolbar:{
            show:false
        },
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <Card className="p-3" style={{border:'none'}} >
      <Card.Title style={{ fontSize: 24, fontWeight: "700px" }}>
        Registered Kits
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            height={300}
          />
          <div id="html-dist" />
        </div>
      </Card.Title>
    </Card>
  );
};
export default CardWithLineChart;
