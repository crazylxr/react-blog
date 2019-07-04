import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { register, logout } from '../../../redux/user/actions';
import { openAuthModal } from '../../../redux/common/actions';

import { Icon, Button, Dropdown, Avatar, Menu } from 'antd';
import AuthModal from '../authModal';

const mapStateToProps = state => ({
  username: state.user.username,
  avatarColor: state.user.avatarColor,
});

@connect(
  mapStateToProps,
  { register, logout, openAuthModal },
)
class UserInfo extends Component {
  renderAvatarDropdownMenu = () => {
    return (
      <Menu>
        <Menu.Item>
          <span className="user-logout" onClick={() => this.props.openAuthModal('updateUser')}>
            修改账户信息
          </span>
        </Menu.Item>
        <Menu.Item>
          <span className="user-logout" onClick={this.props.logout}>
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    const { username, avatarColor } = this.props;
    return (
      <div id="header-userInfo">
        {username ? (
          <Fragment>
            <Avatar
              className="user-avatar"
              src="http://www.gravatar.com/avatar/5bc51d6f7bda04fb5e57f83ea1d7387e?s=100"
              size={100}
            />
            <ul className="social-media-list" >
              <li><Icon type="github" /></li>
              <li> <Icon type="twitter" /></li>
              <li><Icon type="weibo" /></li>
              <li><Icon type="wechat" /></li>
              <li><Icon type="zhihu" /></li>
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <Button
              ghost
              type="primary"
              size="small"
              style={{ marginRight: 20 }}
              onClick={() => this.props.openAuthModal('login')}
            >
              登录
            </Button>
            <Button
              ghost
              type="danger"
              size="small"
              onClick={() => this.props.openAuthModal('register')}
            >
              注册
            </Button>
          </Fragment>
        )}

        <AuthModal />
      </div>
    );
  }
}

export default UserInfo;
