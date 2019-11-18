import React from 'react';
import img1 from '../images/登录背景图.jpg'
import {Button} from 'antd';
import {Link} from 'react-router-dom' 

var LogonCSS = require('./logon.css')
export default class Logon extends React.Component{
    constructor(props){
        super(props)
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
    logon = e=>{
          if(this.state.username==='Admin'&&this.state.password==='123'){
                alert('注册成功!');
          }else{
                alert('注册失败,请重新注册');
          }
    }
    render(){
        return(
            <div>
                <div className={LogonCSS.side}>
                    <img src={img1} className={LogonCSS.img1}/>   
                </div>
                <div className={LogonCSS.main_wraper}>
                    <div className={LogonCSS.main}>
                        <div className={LogonCSS.form}>
                            <div>
                                <div className={LogonCSS.welcome}>欢迎注册文章编辑账号</div>
                                <div className={LogonCSS.header}>每一天，乐在书写。</div>
                            </div>
                            <input placeholder="用户名" type="text" className={LogonCSS.input1} name="username" id="username" value={this.state.username} onChange={this.changeValue}></input>
                            <br></br><br></br>
                            <input placeholder="密码" type="text" className={LogonCSS.input2} name="password" id="password" value={this.state.password} onChange={this.changeValue}></input>
                            <br></br><br></br>
                            <input placeholder="手机号码" type="text" className={LogonCSS.input3}></input>
                            <br></br><br></br>
                            <link></link>
                            <Link to="/login">
                            <Button type="primary" className={LogonCSS.btn} onClick={this.logon}>立即注册</Button>
                            </Link>
                            <br></br><br></br>
                            <input type="checkbox" className={LogonCSS.input4}></input>
                            <p className={LogonCSS.p}>我已阅读并同意相关相关服务条款和隐私政策</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}