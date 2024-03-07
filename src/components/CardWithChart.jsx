import { useState } from "react";
import { Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";

const CardWithChart = ({ title, count }) => {
  const [chartState] = useState({
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 2.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        // height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            enabled: false,
            position: "bottom",
            show: false, // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        show: false,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          display: "none",
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              //   stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: false,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },

        yaxis: {
          lines: {
            show: false, //or just here to disable only y axis
          },
        },
      },
    },
  });
  return (
    <Card style={{border:'none'}}>
      <Card.Body>
        <Card.Title
          style={{ fontSize: 20, color: "#A8A8BD", fontWeight: "500px" }}
        >
          {title}
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <h2 style={{ fontSize: 32, fontWeight: "700px" }}>{count}</h2>

          <div id="chart">
            <ReactApexChart
              options={chartState.options}
              series={chartState.series}
              type="bar"
              height={200}
              width={200}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardWithChart;
