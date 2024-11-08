import { Card, Row, Col, Typography, Radio, Button, Timeline } from 'antd';
import Echat from 'components/charts/Echat';
import LineChart from 'components/charts/LineChart';
import React, { useState } from 'react';
import { count, list } from 'utils/HomeData';
import { Iconify } from 'utils/Iconify';
import CustomCard from 'components/Card';
import { timelineList } from 'utils/HomeData';
import { SettingTwoTone } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
export default function Home() {
  const [reverse, setReverse] = useState(false);
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => {
            console.log(c, 'bnb2');
            return (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={6}
                className="mb-24"
              >
                <Card bordered={false} className="criclebox">
                  <div className="number">
                    <Row align="middle" gutter={[14, 0]}>
                      <Col xs={18}>
                        <span>{c.today}</span>
                        <Title level={3}>
                          {c.title} <small className={c.bnb}>{c.persent}</small>
                        </Title>
                      </Col>
                      <Col xs={6}>
                        <div className="icon-box">{c.icon}</div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row gutter={[24, 0]}>
          <CustomCard xl={10}>
            <Echat />
          </CustomCard>
          <CustomCard xl={14}>
            <LineChart />
          </CustomCard>
        </Row>
        <Row gutter={[24, 0]}>
          <CustomCard cardClass="cardbody" xl={16}>
            <div className="project-ant">
              <div>
                <Title level={5}>Project</Title>
                <Paragraph className="lastweek">
                  done this month <span className="blue">40%</span>
                </Paragraph>
              </div>
              <div className="ant-filtertabs">
                <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">ONLINE</Radio.Button>
                    <Radio.Button value="c">STORES</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <div className="ant-list-box table-responsive">
              <table className="width-100">
                <thead>
                  <tr>
                    <th>COMPANIES</th>
                    <th>MEMBERS</th>
                    <th>BUDGET</th>
                    <th>COMPLETION</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((d, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.bud}
                          </span>
                        </td>
                        <td className="percent-progress">{d.progress}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CustomCard>
          <CustomCard xl={8}>
            <div className="timeline-box">
              <Title level={5}>Orders History</Title>
              <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                this month <span className="bnb2">20%</span>
              </Paragraph>
              <Timeline
                pending={
                  <Button
                    type="primary"
                    className="width-100"
                    onClick={() => setReverse(!reverse)}
                  >
                    {<Iconify icon="eva:menu-2-fill" />} REVERSE
                  </Button>
                }
                className="timelinelist"
                reverse={reverse}
              >
                {timelineList.map((t, index) => (
                  <Timeline.Item color={t.color} key={index}>
                    <Title level={5}>{t.title}</Title>
                    <Text>{t.time}</Text>
                  </Timeline.Item>
                ))}
              </Timeline>
              <div className="circular-icon">
                <SettingTwoTone style={{ fontSize: '24px' }} />
              </div>
            </div>
          </CustomCard>
        </Row>
      </div>
    </>
  );
}
