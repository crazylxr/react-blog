import React from 'react'
import { Icon, Dropdown, Menu } from 'antd'

// import DropdownMenu from './nav'

const HeaderLeft = ({ navList }) => {
  return (
    <div className="header-left">
      <i className="iconfont icon-airplane" style={{ color: '#055796' }} />
      <span className="blog-name"><a href="/"> 桃翁的博客</a></span>
      <p className="description">Web developer, open-source contributor and lifelong learner.</p>
      {/* <Dropdown overlayClassName="header-dropdown" trigger={['click']} overlay={aa}>
        <Icon type="menu-o" className="nav-phone-icon" />
      </Dropdown> */}
    </div>
  )
}

export default HeaderLeft
