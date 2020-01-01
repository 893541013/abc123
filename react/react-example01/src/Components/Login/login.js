import React from 'react';
import {Link} from 'react-router-dom';
import { Button, message } from 'antd';
import {axios} from 'axios'
var LoginCss = require('./login.css');
    
export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
          username:'',
          password:''
        }
    }
    changeValue =e=>{
        this.setState({
          [e.target.name]:e.target.value
        })
  }
  upload = () =>{
      var data={
          "username":this.state.username,
          "password":this.state.password,
      }
      axios.post({
          url:"/user/login",
          data:JSON.stringify(data)
      })

  }
  
    render() {
        return (
            <div className={LoginCss.main}>
                <div className={LoginCss.main1}>
                    文章编辑平台管理系统
                </div>
                <div className={LoginCss.main2}>
                    <label for="GID" className={LoginCss.l1}>账号:</label>
                    <input type="text" id="GID" name="username" placeholder="请输入管理员账号" className={LoginCss.i1} value={this.state.username} onChange={this.changeValue}></input>
                    <br></br>
                    <label for="KEY" className={LoginCss.l2}>密码:</label>
                    <input type="text" id="KEY"name="password" placeholder="请输入密码" className={LoginCss.i2} value={this.state.password}onChange={this.changeValue}></input>
                    <br></br>
                    <Link to="/HomePage"><Button type="primary" size="large" className={LoginCss.b1 }>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button></Link>
                </div>
            </div>
        )
    }
}