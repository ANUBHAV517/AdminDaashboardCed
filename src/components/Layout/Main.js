import { Layout, Drawer, Affix } from 'antd';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleSidebar } from 'Redux/features/MainSlice';
import SideNav from './SideNav';
import AntdHeaderRight from './Header';
import Home from 'pages/Home';
const { Sider, Header: AntHeader, Content } = Layout;
export default function Main() {
  let { pathname } = useLocation();
  const { navFixed, sideNavType, sideNavColor, openSidebar } = useSelector(
    (state) => state.mainSlice
  );
  console.log(sideNavColor, 'sideNavColor');
  const dispatch = useDispatch();
  return (
    <Layout className={`layout-dashboard`}>
      <Drawer
        title={false}
        placement="left"
        closable={false}
        onClose={() => dispatch(handleSidebar(false))}
        visible={openSidebar}
        width={250}
        className={`drawer-sidebar`}
      >
        <Layout className={`layout-dashboard`}>
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary ant-layout-sider-primary ${
              sideNavType === '#fff' ? 'active-route' : ''
            }`}
            style={{ background: sideNavType }}
          >
            <SideNav color={sideNavColor} />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${
          sideNavType === '#fff' ? 'active-route' : ''
        }`}
        style={{ background: sideNavType }}
      >
        <SideNav color={sideNavColor} />
      </Sider>
      <Layout>
        {navFixed ? (
          <Affix>
            <AntHeader>
              <AntdHeaderRight name={pathname} />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader>
            <AntdHeaderRight name={pathname} />
          </AntHeader>
        )}
        <Content className="content-ant">
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
}
