import React from 'react';
import { Card } from 'antd';


var mas04 = require('./mas04.css')
export default class MAS03 extends React.Component {
    render() {
        return (
            <div>
                <div className={mas04.e1}>
                    <p className={mas04.px}>系&nbsp;&nbsp;统&nbsp;&nbsp;通&nbsp;&nbsp;知</p>
                </div>
                <Card>
                    <p
                        style={{
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.85)',
                            marginBottom: 16,
                            fontWeight: 500,
                        }}
                    >
                        通知：
    </p>
                    <Card type="inner" title="紧急通知" extra={<a href="#">More</a>} >
                    <p className={mas04.f}>1、该网页即将进行紧急维修</p>
                    <p className={mas04.f}>2、xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <p className={mas04.f}>3、xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
    </Card>
                    <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title="平常通知"
                        extra={<a href="#">More</a>}
                    >
                    <p>1、即将增加了xxx功能，敬请期待</p> 
                    <p>2、xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <p>3、xxxxxxxxxxxxxxxxxxxxxxxxxxx</p> 
    </Card>
                </Card>
            </div>
        )
    }
}
