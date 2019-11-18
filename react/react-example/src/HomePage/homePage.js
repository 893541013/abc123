import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import {Button,Icon} from 'antd';
import img5 from '../images/5.jpg'
import img4 from '../images/4.jpg'
import img3 from '../images/3.jpg'
import img2 from '../images/2.jpg'
import { Carousel } from 'antd';


var HomePageCSS = require('./homePage.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={HomePageCSS.d}>
                <Carousel autoplay>
                        <img src={img5} className={HomePageCSS.img}/>
                        <img src={img4} className={HomePageCSS.img}/>
                        <img src={img3} className={HomePageCSS.img}/>
                        <img src={img2} className={HomePageCSS.img}/>
                </Carousel>
                </div>
                <input placeholder="请输入关键检索词" type="text" className={HomePageCSS.s}></input>
                <Button type="danger" icon="bulb" size="large">搜索</Button> 
                <br></br><br></br>
                <Footer/>
            </div>
        )
    }
}
