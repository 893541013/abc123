import React from 'react';
import {Button,Icon} from 'antd';
import {Link} from "react-router-dom";
import img1 from '../images/用户名头像.jpg'

var UserHeaderCSS = require('./userHeader.css')
export default class UserHeaderPage extends React.Component{
    render(){
        return(
        <div>    
            <div className={UserHeaderCSS.ztop}>
                <div className={UserHeaderCSS.zt_center}>
                    <div className={UserHeaderCSS.zt_logo}><a href="/homepage">首页</a></div>
                        <form className={UserHeaderCSS.hssfrom} method="get" target="_blank">
                        <   div className={UserHeaderCSS.zt_search}>
                                <input className={UserHeaderCSS.zt_s_input} type="text"/>
                                <Button type="danger" size="small" icon="search"></Button>
                            </div>
                        </form>
                    <div className={UserHeaderCSS.zt_users}>
                        <Link to="/user">
                        <Button type="link" size="large">欢迎登陆！</Button>
                        </Link>    
                    </div>
                </div>    
            </div>
        </div>
        )
    }
}