import React, { Component } from 'react';
import './index.less';

import { Layout, Row, Col } from 'antd';
import HeaderLeft from './headerLeft';
import Search from './search';
import Nav from './nav';
import UserInfo from './userInfo';

const navList = [
  {
    icon: 'home',
    title: '首页',
    link: '/',
  },
  {
    icon: 'edit',
    title: '归档',
    link: '/archives',
  },
  {
    icon: 'folder',
    title: '分类',
    link: '/categories',
  },
  {
    icon: 'user',
    title: '关于',
    link: '/about',
  },
  {
    title: '生活',
    link: '/life',
  },
  {
    title: '技术',
    link: '/technology'
  },
  {
    title: '思考',
    link: '/think'
  },
  {
    title: '标签',
    link: '/tags'
  }
];

const BlogHeader = () => {
  const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 };
  const responsiveRight = { xxl: 20, xl: 16, lg: 16, sm: 20, xs: 0 };
  const infoLeft = { xl: 16, lg: 16 };
  const infoRight = { xl: 3, lg: 3 };
  const info = { xl: 16, lg: 16 };

  return (
    <div className="header-contaienr">
      <Row type="flex" justify="center">
        <Col {...responsiveRight}>
          <a href="/" className="domain">
            taoweng.site
          </a>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col {...info}>
          <Row type="flex" justify="space-between">
            <Col>
              <Row {...infoLeft}>
                <Col>
                  <HeaderLeft navList={navList} />
                </Col>

                {/* <Search /> */}
              </Row>
              <Row>
                <Col>
                  <Nav navList={navList} />
                </Col>
              </Row>
            </Col>
            <Col {...infoRight}>
              <UserInfo />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default BlogHeader;
