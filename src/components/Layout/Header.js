import React from "react";
import { useDispatch} from "react-redux";
import {
  handleSidebar,
} from "Redux/features/MainSlice";
import {
  Row,
  Col,
  Breadcrumb,
  Badge,
  Dropdown,
  List,
  Avatar,
  Button,
  Input,
} from "antd";
import {
  data,
  bell,
  logsetting,
  toggler,
  profileSVg,
 
} from "utils/HeaderData";
import { Link, NavLink } from "react-router-dom";
import { Iconify } from "utils/Iconify";
const menu = (
  <List
    min-width="100%"
    className="header-notifications-dropdown"
    style={{
      backgroundColor: "#fff",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "1rem",
    }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item style={{ borderRadius: "1rem" }}>
        <List.Item.Meta
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "1rem",
          }}
          avatar={<Avatar shape="square" src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
);
export default function AntdHeader({ name }) {
  const dispatch = useDispatch();

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {name.replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {name.replace("/", "")}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Badge size="small" count={4}>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              arrow
              overlayStyle={{ width: "20%" }}
            >
              <a href="#pablo" className="ant-dropdown-link">
                {bell}
              </a>
            </Dropdown>
          </Badge>
          <Button type="link">
            {logsetting}
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => dispatch(handleSidebar())}
          >
            {toggler}
          </Button>
          <Link to="/dashboard" className="btn-sign-in">
            {profileSVg}
            <span>Sign in</span>
          </Link>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<Iconify icon="akar-icons:search" />}
          />
        </Col>
      </Row>
    </>
  );
}
