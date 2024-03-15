import React, { useState } from "react";
import CardWithMap from "../../components/CardWithMap";
import CardWithChart from "../../components/CardWithChart";
import CardWithLineChart from "../../components/CardWithLineChart";
import CardWithBarChart from "../../components/CardWithBarChart";
import CardWithTable from "../../components/CardWithTable";
import ReactApexChart from "react-apexcharts";
function Dashboard() {
  const [radial] = useState({
    series: [64.87],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "64.87%",
          },
          startAngle: -90,
          endAngle: 90,
        },
      },
      labels: ["Us vs Competitors"],
    },
  });

  return (
    <div className="">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <CardWithChart title={"Register Users"} count={"27,545"} />
            </div>
            <div className="col-md-6">
              <CardWithChart title={"Register Companies"} count={"165"} />
            </div>
            <div className="col-md-12 mt-4">
              <CardWithLineChart />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <CardWithMap />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 bg-light">
          <ReactApexChart
            options={radial.options}
            series={radial.series}
            type="radialBar"
            height={350}
          />
        </div>
        <div className="col-md-8">
          <CardWithBarChart />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-4">
          <CardWithTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
