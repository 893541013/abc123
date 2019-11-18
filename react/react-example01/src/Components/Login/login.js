import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

var LoginCss = require('./login.css');

export default class Login extends React.Component {
    render() {
        return (
            <div className={LoginCss.main}>
                <div className={LoginCss.main1}>
                    文章编辑平台管理系统
                </div>
                <div className={LoginCss.main2}>
                    <label for="GID" className={LoginCss.l1}>账号:</label>
                    <input type="text" id="GID" placeholder="请输入管理员账号" className={LoginCss.i1}></input>
                    <br></br>
                    <label for="KEY" className={LoginCss.l2}>密码:</label>
                    <input type="text" id="KEY" placeholder="请输入密码" className={LoginCss.i2}></input>
                    <br></br>
                    <Link to="/HomePage"><Button type="primary" size="large" className={LoginCss.b1 }>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button></Link>
                </div>
            </div>
        )
    }
}