import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text1 = `
  一般解决方法：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`;
const text2 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text3 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text4 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text5 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text6 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


var call01 = require('./call01.css')
export default class Call01 extends React.Component {
    render() {
        return (
            <div>
                <div className={call01.e1}>
                    <p className={call01.px}>常&nbsp;&nbsp;见&nbsp;&nbsp;问&nbsp;&nbsp;题</p>
                </div>
                <Collapse accordion>
                    <Panel header="1、系统通知登录环境存在异常" key="1">
                        <p>{text1}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text2}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>{text3}</p>
                    </Panel>
                    <Panel header="This is panel header 1" key="4">
                        <p>{text4}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="5">
                        <p>{text5}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="6">
                        <p>{text6}</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}