import React from 'react';
import { dashboard } from 'utils/SideNavData';
import MenuItem from 'utils/SideNavData';
import { Button } from 'antd';
export default function SideNav({ color }) {
  return (
    <>
      <div className="brand">
        <span>Demo Template</span>
      </div>
      <hr />
      <MenuItem color={color} pathname={'/dashboard'} />
      <div className="aside-footer">
        <div className="footer-box" style={{ backgroundColor: color }}>
          <span className="icon" style={{ color: 'red' }}>
            {dashboard(color)}
          </span>
          <h6>Need Help ?</h6>
          <p>please check our docs</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            DOCUMENTATION
          </Button>
        </div>
      </div>
    </>
  );
}
