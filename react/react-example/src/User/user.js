import React from 'react';
import Header from '../Header/userHeader';
import Footer from '../Footer/userFooter';
import img1 from '../images/用户名头像.jpg'
import { BrowserRouter, withRouter, Route, Switch } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

import PC01 from './../PC/pc01';
import PC02 from './../PC/pc02';
import PC03 from './../PC/pc03';

import MAS01 from './../MAS/mas01';
import MAS02 from './../MAS/mas02';
import MAS03 from './../MAS/mas03';
import MAS04 from './../MAS/mas04';
import {Link} from "react-router-dom";
import Call01 from './../Call/call01';
import Call02 from './../Call/call02';
import Call03 from './../Call/call03';

var UserCSS = require('./user.css')
const { SubMenu } = Menu;
const { Sider } = Layout;
class UserPage extends React.Component {
  constructor(props) {
    super(props)
  }
  handOnClick = e => {
    switch (e.key) {
      case "1":
        this.props.history.push('/user/PC01')
        break;
      case "2":
        this.props.history.push('/user/PC02')
        break;
      case "3":
        this.props.history.push('/user/PC03')
        break;
      case "4":
        this.props.history.push('/user/MAS01')
        break;
      case "5":
        this.props.history.push('/user/MAS02')
        break;
      case "6":
        this.props.history.push('/user/MAS03')
        break;
      case "7":
        this.props.history.push('/user/MAS04')
        break;
      case "8":
        this.props.history.push('/user/Call01')
        break;
      case "9":
        this.props.history.push('/user/Call02')
        break;
      case "10":
        this.props.history.push('/user/Call03')
        break;


      default:
        break;
    }
  }
  render() {
    return (
      <div >
        <Header />
        <div className={UserCSS.import}>
          <div className={UserCSS.wrap1200}>
            <Layout >
              <div className={UserCSS.fl}>
                <div className={UserCSS.personalInfor}>
                  <a href="/" className={UserCSS.headPortrait}>
                    <img src={img1} className={UserCSS.img1} />
                  </a>
                  <div id="space_nickname">
                    <Link to="/user"><a className={UserCSS.personalName}>Admin</a></Link>
                    <Link to="/manage"><a className={UserCSS.manageBtn}>账号管理</a></Link>
                  </div>
                </div>
              </div>

              <Layout history={this.props.history} className={UserCSS.l2}>
                <Sider width={200} style={{ background: '#fff' }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                  >
                    <SubMenu key="sub1" title={<span><Icon type="user" />个人中心</span>}>
                      <Menu.Item key="1" onClick={this.handOnClick}>文章编辑</Menu.Item>
                      <Menu.Item key="2" onClick={this.handOnClick}>我的收藏</Menu.Item>
                      <Menu.Item key="3" onClick={this.handOnClick}>历史记录</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="mail" />消息</span>}>
                      <Menu.Item key="4" onClick={this.handOnClick}>评论我的</Menu.Item>
                      <Menu.Item key="5" onClick={this.handOnClick}>@我</Menu.Item>
                      <Menu.Item key="7" onClick={this.handOnClick}>系统通知</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />联系客服</span>}>
                      <Menu.Item key="8" onClick={this.handOnClick}>常见问题</Menu.Item>
                      <Menu.Item key="9" onClick={this.handOnClick}>在线客服</Menu.Item>










                      <Menu.Item key="10" onClick={this.handOnClick}>反馈建议</Menu.Item>









                      
                    </SubMenu>
                  </Menu>
                </Sider>
              </Layout>
            </Layout>
          </div>
          <div className={UserCSS.d0}>
            <Switch>
              <Route path="/user/PC01" component={PC01}></Route>
              <Route path="/user/PC02" component={PC02}></Route>
              <Route path="/user/PC03" component={PC03}></Route>

              <Route path="/user/MAS01" component={MAS01}></Route>
              <Route path="/user/MAS02" component={MAS02}></Route>
              <Route path="/user/MAS03" component={MAS03}></Route>
              <Route path="/user/MAS04" component={MAS04}></Route>

              <Route path="/user/Call01" component={Call01}></Route>
              <Route path="/user/Call02" component={Call02}></Route>
              <Route path="/user/Call03" component={Call03}></Route>
            </Switch>
            <div className={UserCSS.d1}></div>
            <em>
              <em>
                <em>
                  <div className={UserCSS.foot}>
                    <span>CrazyCopy  @  信息工程系</span>
                  </div>
                </em>
              </em>
            </em>
          </div>
        </div>
      </div>
    )
  }
}
export default UserPage