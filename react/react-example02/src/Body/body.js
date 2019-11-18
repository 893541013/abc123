import React from 'react';
var BodyCss = require('./body.css');


export default class Body extends React.Component {
    render() {
        return (
            <div className={BodyCss.body_kuang_1}>
                <div className={BodyCss.body_kuang_2}>
                    <div className={BodyCss.body_kuang_3}>
                        <dl className={BodyCss.body_kuang_4}>
                            <dt>
                                <span className={BodyCss.body_kuang_in_one}></span>文章编辑
                            </dt>
                            <dd>文字编辑的简介</dd>
                        </dl>
                        <div>
                        <a>查看详情</a>
                            <div>
                            <a>运营规范</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}