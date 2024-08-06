import React from "react";
import { Row, Col, Select, Menu } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./Activity.css";
import { PiGpsFixBold, PiHamburger } from "react-icons/pi";
import { BiSolidDollarCircle } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import { MdChevronRight } from "react-icons/md";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";

function Activity() {
  const generateRandomData = () => {
    const data = [];
    for (let week = 1; week <= 24; week++) {
      data.push({
        week: `Week ${week}`,
        value: Math.floor(Math.random() * 15000), // Random value between 0 and 15000
      });
    }
    return data;
  };
  const activityData = generateRandomData();
  const yAxisTickFormatter = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`; // Formatting in "k" with no decimal places
    }
    return value;
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={16}>
        <div className="activity-div">
          <div className="activity-span">
            <h3 style={{ margin: 0 }}>Activity</h3>
            <Select
              defaultValue="Weekly"
              options={[{ value: "Weekly", label: "Weekly" }]}
            />
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" ticks={[5, 9, 13, 17, 21, 24]} />
              <YAxis
                tickFormatter={yAxisTickFormatter}
                domain={[0, 15000]}
                ticks={[0, 5000, 10000, 15000]}
              />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#8884d8"
                barSize={20}
                radius={[10, 10, 10, 10]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Col>
      <Col xs={24} md={8}>
        <div className="activity-menu">
          <div>
            <span>
              <PiGpsFixBold
                size={35}
                color={"red"}
                style={{
                  background: "#f4c4da",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              />
              <h4>Goals</h4>
            </span>
            <FaChevronRight
              size={30}
              color={"#001529"}
              style={{
                background: "#b0c2e2",
                padding: "8px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <span>
              <PiHamburger
                size={35}
                color={"blue"}
                style={{
                  background: "#79a8d796",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              />
              <h4>Popular Dishes</h4>
            </span>
            <FaChevronRight
              size={30}
              color={"#001529"}
              style={{
                background: "#b0c2e2",
                padding: "8px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <span>
              <BiSolidDollarCircle
                size={35}
                color={"#039399"}
                style={{
                  background: "#c2e9f7",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              />
              <h4> Menus</h4>
            </span>
            <FaChevronRight
              size={30}
              color={"#001529"}
              style={{
                background: "#b0c2e2",
                padding: "8px",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Activity;
