import React from 'react';
import {Link,NavLink} from "react-router-dom";
import {Button,Icon} from 'antd';
import img1 from '../images/1.png'

var HeaderCSS = require('./header.css')
export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
          username:window.localStorage.getItem("username")
        }
    }

    logout = e=>{
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username:null
        })
    }

    render(){
        let userProfile=null

        if(this.state.username!=null){
            userProfile=
            <div>
            <Link to="/user"><Button size="large" icon="user" shape="round" type="danger">{this.state.username}</Button></Link>
            <Button type="link" size="small" icon="user-delete" onClick={this.logout}>退出登录</Button>
            </div>
        }else{
            userProfile=<Link to="/login"><Button shape="round" type="primaryr" icon="user-add">注册/登录</Button></Link>;
        }

        return(
        <div className={HeaderCSS.d}>           
            <div className={HeaderCSS.p0}> </div>
            <img src={img1} className={HeaderCSS.img}/>
            <a className={HeaderCSS.p1} href="/homepage">文章编辑平台</a>
            <p className={HeaderCSS.p2}>
            {userProfile}
            </p>
        </div>
        )
    }
}
