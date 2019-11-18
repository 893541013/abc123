import React from 'react';
import { Upload, Icon, message } from 'antd';

const { Dragger } = Upload;



var call02 = require('./call02.css')
export default class Call02 extends React.Component {
    render() {
        return (
            <div>
                <div className={call02.e1}>
                    <p className={call02.px}>在&nbsp;&nbsp;线&nbsp;&nbsp;客&nbsp;&nbsp;服</p>
                </div>
                <div className={call02.p1}></div>
                <Dragger  className={call02.p2}>
                    <p className="ant-upload-drag-icon" >
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">该功能暂未开放</p>
                    <p className="ant-upload-hint">敬请期待!</p>
                </Dragger>
            </div>
        )
    }
}