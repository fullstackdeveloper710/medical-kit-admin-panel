import React from "react";
import CardWithMap from "../../components/CardWithMap";
import CardWithChart from "../../components/CardWithChart";
import CardWithLineChart from "../../components/CardWithLineChart";
import CardWithBarChart from "../../components/CardWithBarChart";
import CardWithTable from "../../components/CardWithTable";

function Dashboard() {
  return (
    <div className="">
      <div className="row dashboard_row">
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
        <div className="col-md-4 h-100">
          <CardWithMap />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">wdwd</div>
        <div className="col-md-8">
          <CardWithBarChart />
        </div>
        <div className="col-md-12 mt-4">
          <CardWithTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;