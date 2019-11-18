import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import CA00 from './../CA/ca00';
import CA01 from './../CA/ca01';
import Email00 from './../Email/email00';
import Email01 from './../Email/email01';
import CP00 from './../CP/cp00';
import CP01 from './../CP/cp01';
import CP02 from './../CP/cp02';


const { SubMenu } = Menu;

var bodyCss = require('./body.css');

class Sider extends React.Component {
  handleClick = e => {


    switch (e.key) {
      case "1":
        this.props.history.push('/HomePage/Email00')
        break;

      case "2":
        this.props.history.push('/HomePage/Email01')
        break;

      case "3":
        this.props.history.push('/HomePage/CP00')
        break;

      case "4":
        this.props.history.push('/HomePage/CP01')
        break;

      case "8":
        this.props.history.push('/HomePage/CP02')
        break;

      case "5":
        this.props.history.push('/HomePage/CA00')
        break;

      case "6":
        this.props.history.push('/HomePage/CA01')
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>管理文章</span>
            </span>
          }
        >
          <Menu.Item key="5">文章审核</Menu.Item>
          <Menu.Item key="6">已上架文章</Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>页面管理</span>
            </span>
          }
        >
          <SubMenu key="sub3" title="公告设置">
            <Menu.Item key="3">发布公告</Menu.Item>
            <Menu.Item key="8">删除公告</Menu.Item>
          </SubMenu>
          <Menu.Item key="4">轮播图设置</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>电子邮件</span>
            </span>
          }
        >
          <Menu.Item key="1">信息反馈</Menu.Item>
          <Menu.Item key="2">投诉信息</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

class Body extends React.Component {
  render() {

    return (
      <div className={bodyCss.import}>
        <Sider className={bodyCss.Sider} history={this.props.history} />
        <div className={bodyCss.r}>
          <Switch>
            <Route path="/HomePage/CA00" component={CA00}></Route>
            <Route path="/HomePage/CA01" component={CA01}></Route>

            <Route path="/HomePage/CP00" component={CP00}></Route>
            <Route path="/HomePage/CP01" component={CP01}></Route>
            <Route path="/HomePage/CP02" component={CP02}></Route>

            <Route path="/HomePage/Email00" component={Email00}></Route>
            <Route path="/HomePage/Email01" component={Email01}></Route>
            <Redirect to="/HomePage/Email00"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
export default withRouter(Body)
