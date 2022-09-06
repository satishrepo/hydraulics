import React, { useEffect, useState } from "react";
import { ChartComp } from "../../components/charts/Chart1";
import { Chart2 } from "../../components/charts/Chart2";
import Chart3 from "../../components/charts/Chart3";
import Chart4 from "../../components/charts/Chart4";
import "./home.css";
import dashboardService from "../../services/dashboard-service";
import * as moment from "moment";
import { WorkOrderSkeleton, ChartSkeleton } from "../../common/skeletonLoader";

const Home = () => {
  const [dashboardData, setDashboardData] = useState({});
  const [filters, setFilters] = useState({
    fromDate: moment(new Date()).subtract(30, "days").format("YYYY-MM-DD"),
    toDate: moment(new Date()).format("YYYY-MM-DD"),
    type: "All",
    orderName: "",
  });
  const [loading, setLoading] = useState(false);
  const [isDateFilter, setIsDateFilter] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const userPermissions = JSON.parse(localStorage.getItem("userPermission"));

  useEffect(() => {
    getDashboardData();
  }, [filters.fromDate, filters.toDate]);

  const getDashboardData = () => {
    setLoading(isDateFilter ? false : true);
    dashboardService
      .getDashboardData(filters)
      .then((response) => {
        setDashboardData(response.data);
        setLoading(false);
        setIsDateFilter(false);
        setIsFirstLoad(false);
      })
      .catch((ex) => {
        setLoading(false);
        console.error("Something went wrong");
      });
  };

  useEffect(() => {
    setIsFirstLoad(true);
  }, []);

  return (
    <div>
      <div
        className="navbar-container top_navbar"
        style={{
          color: "#ffffff",
          boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)",
        }}
      >
        {(userPermissions?.ANALYTICS?.permissions?.TestBenchStatus ||
          userPermissions?.ANALYTICS?.permissions?.ValveTestedBarChart) && (
          <div className="navbar navbar-expand">
            <>
              <div className="navbar-nav " style={{ gap: "0" }}>
                <li className="nav-item">
                  <button className="btn btn-dark">Test Bench</button>
                </li>
                <span>
                  <select
                    name="testbencheslist"
                    id="testbencheslist"
                    style={{ padding: "5px" }}
                    onChange={(e) =>
                      setFilters({ ...filters, type: e.target.value })
                    }
                    value={filters.type}
                  >
                    <option value="All">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </span>
              </div>

              <div className="navbar-nav ">
                <li className="nav-item" style={{ marginLeft: "20px" }}>
                  <button className="btn btn-dark">Work Order</button>
                </li>
                <span style={{ marginLeft: "-20px" }}>
                  <input
                    placeholder="Entr Work Order"
                    onChange={(e) =>
                      setFilters({ ...filters, orderName: e.target.value })
                    }
                    value={filters.orderName}
                  />
                </span>
              </div>
              <div className="navbar-nav ">
                <li className="nav-item">
                  <button
                    className="btn btn-primary scnd_btn btn-block"
                    style={{
                      background: "#48c774",
                      borderRadius: "20px",
                      marginLeft: "20px",
                    }}
                    onClick={() => {
                      getDashboardData();
                      setIsFirstLoad(false);
                      setIsDateFilter(false);
                    }}
                  >
                    Submit
                  </button>
                </li>
              </div>
            </>
          </div>
        )}
      </div>

      <div
        className="navbar-container"
        style={{ maxWidth: "120em", margin: "auto" }}
      >
        <div className="charts-container">
          <div className="chart_alignment">
            {userPermissions?.ANALYTICS?.permissions?.TestBenchStatus && (
              <div className="doughnut-container charts_card charts-background">
                <div className="doughnut">
                  <h4>Work Order Efficiency</h4>

                  {loading ? (
                    <WorkOrderSkeleton />
                  ) : (
                    <>
                      {dashboardData.sp_workOrderEfficiency && (
                        <ChartComp
                          data={dashboardData.sp_workOrderEfficiency[0]}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {userPermissions?.ANALYTICS?.permissions?.ValveTestedBarChart && (
              <div className="line-container charts_card charts-background">
                <div className="line">
                  <h4>Avg time for valve series</h4>
                  {loading ? (
                    <ChartSkeleton />
                  ) : (
                    <>
                      {" "}
                      {dashboardData.sp_avgTimeForValveSeries && (
                        <Chart3
                          labels={dashboardData.sp_avgTimeForValveSeries.map(
                            (data) => data.item_code
                          )}
                          datas={dashboardData.sp_avgTimeForValveSeries.map(
                            (data) => data.workOrderTime
                          )}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Date filters */}

          <div
            className={
              userPermissions?.ANALYTICS?.permissions?.ValveTestedLineChart ||
              userPermissions?.ANALYTICS?.permissions?.ValveStatusChart
                ? "mt-40"
                : ""
            }
          >
            {(userPermissions?.ANALYTICS?.permissions?.ValveTestedLineChart ||
              userPermissions?.ANALYTICS?.permissions?.ValveStatusChart) && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="card_filter">
                  <h5>From Date</h5>
                  <input
                    type="date"
                    id="testbenchfromdate"
                    name="testbenchfromdate"
                    onChange={(e) => {
                      setIsFirstLoad(false);
                      setIsDateFilter(true);
                      setFilters({
                        ...filters,
                        fromDate: moment(e.target.value).format("YYYY-MM-DD"),
                      });
                    }}
                    value={filters.fromDate}
                  />
                </div>
                <div className="card_filter">
                  <h5>To Date</h5>
                  <input
                    type="date"
                    id="testbenchfromdate"
                    name="testbenchfromdate"
                    onChange={(e) => {
                      setIsFirstLoad(false);
                      setIsDateFilter(true);
                      setFilters({
                        ...filters,
                        toDate: moment(e.target.value).format("YYYY-MM-DD"),
                      });
                    }}
                    value={filters.toDate}
                  />
                </div>
              </div>
            )}
            <div className="chart_alignment">
              {userPermissions?.ANALYTICS?.permissions
                ?.ValveTestedLineChart && (
                <div className="line-container charts_card charts-background">
                  <div className="line">
                    <h4>Oil Cleanliness</h4>
                    {isDateFilter || isFirstLoad ? (
                      <ChartSkeleton />
                    ) : (
                      <>
                        {dashboardData.sp_OilCleanlinessData && (
                          <Chart2 data={dashboardData.sp_OilCleanlinessData} />
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}

              {userPermissions?.ANALYTICS?.permissions?.ValveStatusChart && (
                <div className="line-container charts_card charts-background">
                  <div className="line">
                    <h4>Daily Production Status</h4>
                    {isDateFilter || isFirstLoad ? (
                      <ChartSkeleton />
                    ) : (
                      <>
                        {dashboardData.sp_productionCount && (
                          <Chart4 data={dashboardData.sp_productionCount} />
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
