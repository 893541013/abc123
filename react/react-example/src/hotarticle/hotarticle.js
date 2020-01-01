
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { Pagination } from 'antd';



import HotarticleHeader from './../Header/HotarticleHeader';

var HotarticleCSS = require('./hotarticle.css')

function onChange(pageNumber) {
    
}

export default class Hotarticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           list:[

           ]
        }

    }
    load = () => {
        axios.get('/getArticle')
            .then(function (response) {
                console.log(response.data)
                this.setState({
                    list: response.data
                })
                console.log(this.state.list)
            })

            .catch(function (error) {

                console.log(error);

            });
    }

    componentWillMount() {
        this.load()
    }
    render() {
        return (
            <div>
                <HotarticleHeader />
                <div className={HotarticleCSS.body}>
                    <Link to="/article"> <li className={HotarticleCSS.li}>
                        <div className={HotarticleCSS.img}></div>
                        <div className={HotarticleCSS.descr}>{this.state.title}
                            {this.state.content}</div>
                    </li></Link>
                    <Link to="/article"> <li className={HotarticleCSS.li}>
                        <div className={HotarticleCSS.img}></div>
                        <div className={HotarticleCSS.descr}>{this.state.title}
                            {this.state.content}</div>
                    </li></Link>
                    <Link to="/article"> <li className={HotarticleCSS.li}>
                        <div className={HotarticleCSS.img}></div>
                        <div className={HotarticleCSS.descr}>{this.state.title}
                            {this.state.content}</div>
                    </li></Link>
                    <Link to="/article"> <li className={HotarticleCSS.li}>
                        <div className={HotarticleCSS.img}></div>
                        <div className={HotarticleCSS.descr}>{this.state.title}
                            {this.state.content}</div>
                    </li></Link>
                    <Link to="/article"> <li className={HotarticleCSS.li}>
                        <div className={HotarticleCSS.img}></div>
                        <div className={HotarticleCSS.descr}>{this.state.title}
                            {this.state.content}</div>
                    </li></Link>
                    <Link to="/article"> <li className={HotarticleCSS.li}>
                        <div className={HotarticleCSS.img}></div>
                        <div className={HotarticleCSS.descr}>{this.state.title}
                            {this.state.content}</div>
                    </li></Link>
                </div>
                <div className={HotarticleCSS.pagediv}>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} className={HotarticleCSS.pagebtn} onChange={onChange} />
                </div>
            </div>
        )
    }
}


