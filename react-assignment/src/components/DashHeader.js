import React from "react";
import "./DashHeader.css";

import { Avatar, Input } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";

import { BsEnvelope, BsFillGridFill } from "react-icons/bs";

import { IoSettingsOutline } from "react-icons/io5";

function DashHeader() {
  return (
    <div className="dash-header">
      <div className="header-left">
        <BsFillGridFill
          style={{
            fontSize: "24px",
            color: "#1890ff",
            marginLeft: "0.89rem",
          }}
        />

        <div className="search-bar">
          <Input
            placeholder="Search..."
            className="dash-input"
            prefix={<SearchOutlined style={{ color: "white" }} />}
          />
        </div>
      </div>
      <div className="header-right">
        <BsEnvelope
          style={{ fontSize: "15px", color: "white", marginRight: "14px" }}
          className="circle-icon"
        />
        <IoSettingsOutline
          style={{ fontSize: "15px", color: "white", marginRight: "14px" }}
          className="circle-icon"
        />
        <BellOutlined
          style={{ fontSize: "15px", color: "white", marginRight: "14px" }}
          className="circle-icon"
        />
        <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp" />
      </div>
    </div>
  );
}

export default DashHeader;
