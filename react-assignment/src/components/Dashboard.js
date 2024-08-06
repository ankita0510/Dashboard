import React from "react";
import {
  Layout,
  Menu,
  Avatar,
  Progress,
  Flex,
  Row,
  Col,
  Select,
  Table,
  Rate,
  Tag,
  Space,
} from "antd";

import { AiFillHome } from "react-icons/ai";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { BsClipboard2Check, BsEnvelope } from "react-icons/bs";

import { IoBagCheckOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import DashHeader from "./DashHeader";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { green } from "@mui/material/colors";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import CardComponent from "./CardComponent";
import {
  TbShoppingBagPlus,
  TbShoppingBagX,
  TbShoppingBagCheck,
} from "react-icons/tb";
import { BiSolidDollarCircle } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "./Dashboard.css";

import Activity from "./Activity";

const { Header, Content, Sider } = Layout;

const dataSource = [
  {
    key: "1",
    customer: "Wade Warren",
    orderNo: "13432498",
    amount: "$14.00",
    status: "Delivered",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
  },
  {
    key: "2",
    customer: "Jane Cooper",
    orderNo: "44009746",
    amount: "$12.00",
    status: "Pending",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  },
  {
    key: "3",
    customer: "Guy Hawkins",
    orderNo: "78921453",
    amount: "$45.50",
    status: "Delivered",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
  },
  {
    key: "4",
    customer: "Kristin Watson",
    orderNo: "76321648",
    amount: "$64.00",
    status: "Cancelled",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
  },
  {
    key: "5",
    customer: "Cody Fisher",
    orderNo: "98013278",
    amount: "$35.00",
    status: "Delivered",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/7.webp",
  },
  {
    key: "6",
    customer: "Savannah Nguyen",
    orderNo: "12345678",
    amount: "$122.00",
    status: "Delivered",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/9.webp",
  },
];

const columns = [
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={record.avatar} style={{ marginRight: 8 }} />
        {text}
      </div>
    ),
  },
  {
    title: "Order No.",
    dataIndex: "orderNo",
    key: "orderNo",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color;
      switch (status) {
        case "Delivered":
          color = "green";
          break;
        case "Cancelled":
          color = "red";
          break;
        case "Pending":
          color = "yellow";
          break;
        default:
          color = "default";
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
];
const feedbacks = [
  {
    name: "Jenny Wilson",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp", // Placeholder image
    rating: 4,
    feedback: `The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.`,
  },
  {
    name: "Dianne Russell",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/10.webp",
    rating: 5,
    feedback: `We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service`,
  },
  {
    name: "Dianne Russell",
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/10.webp",
    rating: 5,
    feedback: `We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service`,
  },
];
const cardData = [
  {
    key: "c1",
    title: "Total Orders",
    icon: (
      <TbShoppingBagPlus
        size={35}
        color={"blue"}
        style={{ background: "#79a8d796", padding: "8px", borderRadius: "50%" }}
      />
    ),
    value: "70",
    trendIcon: <IoMdArrowDropup style={{ color: green[500] }} />,
    percentage: "3%",
  },
  {
    key: "c2",
    title: "Total Delivered",
    icon: (
      <TbShoppingBagX
        size={40}
        color={"green"}
        style={{ background: "#c6dee2", padding: "8px", borderRadius: "50%" }}
      />
    ),
    value: "70",
    trendIcon: <IoMdArrowDropdown style={{ color: green[500] }} />,
    percentage: "3%",
  },
  {
    key: "c3",
    title: "Total cancelled",
    icon: (
      <TbShoppingBagCheck
        size={40}
        color={"red"}
        style={{ background: "#f4c4da", padding: "8px", borderRadius: "50%" }}
      />
    ),
    value: "05",
    trendIcon: <IoMdArrowDropup style={{ color: green[500] }} />,
    percentage: "3%",
  },
  {
    key: "c4",
    title: "Total Revenue",
    icon: (
      <BiSolidDollarCircle
        size={40}
        color={"#d637a8"}
        style={{ background: "#f4c9e8", padding: "8px", borderRadius: "50%" }}
      />
    ),
    value: "$12k",
    trendIcon: <IoMdArrowDropdown style={{ color: green[500] }} />,
    percentage: "3%",
  },
];
const items = [
  {
    label: "Weekly",
    key: "1",
  },
];

const Dashboard = () => {
  return (
    <>
      <DashHeader />
      <Layout style={{ maxHeight: "92.3vh", overflowY: "suto" }}>
        <Sider collapsible collapsed={true} className="dash-side-bar">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="custom-menu"
          >
            <Menu.Item key="1" icon={<AiFillHome />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<MdOutlineInsertChartOutlined />}>
              Data Analytics
            </Menu.Item>
            <Menu.Item key="3" icon={<BsClipboard2Check />}>
              Logs
            </Menu.Item>
            <Menu.Item key="4" icon={<CiWallet />}>
              Balance
            </Menu.Item>
            <Menu.Item key="5" icon={<IoBagCheckOutline />}>
              Checkouts
            </Menu.Item>
          </Menu>
          <div className="custom-trigger">
            <RiLogoutCircleRLine size={20} />
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header className="content-header">Dashboard</Header>
          <Content
            style={{ margin: "16px", overflowY: "auto", overflowX: "hidden" }}
            className="hide-scrollbar"
          >
            <Flex vertical style={{ maxHeight: "100vh" }}>
              <div>
                <Row gutter={[16, 16]}>
                  {cardData.map((d) => {
                    return (
                      <Col xs={24} md={4}>
                        <CardComponent
                          icon={d.icon}
                          title={d.title}
                          value={d.value}
                          percentage={d.percentage}
                          trendIcon={d.trendIcon}
                        />
                      </Col>
                    );
                  })}
                  <Col xs={24} md={8}>
                    <Card
                      sx={{
                        minWidth: 250,
                        maxHeight: 130,

                        color: "black",
                      }}
                    >
                      <CardContent>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          width="100%"
                        >
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="left"
                            textAlign="left"
                            width="50%"
                          >
                            <Typography
                              variant="caption"
                              sx={{ fontSize: "0.75rem" }}
                            >
                              Net Profit
                            </Typography>

                            <Typography
                              variant="h4"
                              component="div"
                              sx={{ mt: 1 }}
                            >
                              $6759.25
                            </Typography>
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ mt: 1 }}
                            >
                              <IoMdArrowDropup style={{ color: green[500] }} />
                              <Typography
                                sx={{
                                  color: green[500],
                                  fontSize: "0.6rem",
                                  ml: 0.8,
                                }}
                              >
                                3%
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="right"
                            textAlign="center"
                          >
                            <Progress
                              type="circle"
                              percent={70}
                              size={[80, 20]}
                              format={(percent) => (
                                <div className="progress-content">
                                  <div>{percent}%</div>
                                  <div className="progress-message">
                                    Goal Completed
                                  </div>
                                </div>
                              )}
                            />
                            <Typography sx={{ fontSize: "0.6rem" }}>
                              *The values here has been rounded off
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Col>
                </Row>
                <Activity />
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={16}>
                    <div className="dash-table">
                      <h3>Recent Orders</h3>
                      <Table
                        dataSource={dataSource}
                        columns={columns}
                        size="small"
                        pagination={false}
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div className="feedback-container">
                      <h3>Customer's Feedback</h3>
                      <div className="feedback-scrollable">
                        <Space
                          direction="vertical"
                          size="large"
                          className="feedback-space"
                        >
                          {feedbacks.map((item, index) => (
                            <div key={index} className="feedback-item">
                              {index !== 0 && <hr style={{ margin: 0 }} />}
                              <div className="feedback-header">
                                <Avatar src={item.avatar} size={34} />
                                <h3>{item.name}</h3>
                              </div>
                              <Rate disabled defaultValue={item.rating} />
                              <p>{item.feedback}</p>
                            </div>
                          ))}
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
