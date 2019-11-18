import { Popover, Button, Collapse, Icon } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import one from './1';
import two from './2';


const text = <span>点击后会显示文章全文点击后会显示文章全文
                  点击后会显示文章全文点击后会显示文章全文
                  点击后会显示文章全文</span>;
const { Panel } = Collapse;
const text1 = `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 4,
    border: 0,
    overflow: 'hidden',
};


var HeaderCss = require('./header.css');
export default class Header extends React.Component {
    render() {
        return (
            <div className={HeaderCss.importent}>
                <div className={HeaderCss.importent1}>
                    {/* 1 */}
                    <div className={HeaderCss.title}>热&nbsp;&nbsp;门&nbsp;&nbsp;文&nbsp;&nbsp;章</div>
                    <div className={HeaderCss.importent1_1}>
                        <div className={HeaderCss.main1}>
                            <div className={HeaderCss.inside1}>
                            </div>
                            <div className={HeaderCss.inside2}>
                                <div className={HeaderCss.img1}>
                                </div>
                            </div>
                            <div className={HeaderCss.inside3}>
                                <p className={HeaderCss.text1}>文章标题</p>
                                <Collapse
                                        bordered={false}
                                        defaultActiveKey={['0']}   
                        
                                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                                        className={HeaderCss.Label}
                                    >
                                        <Panel header="详细内容" key="1" style={customPanelStyle} >
                                            <p>{text}</p>
                                        </Panel>
                                    </Collapse>
                            </div>                        
                        </div>
                        {/* 2 */}
                        <div className={HeaderCss.main2}>
                        <div className={HeaderCss.inside1}>
                            </div>
                            <div className={HeaderCss.inside2}>
                                <div className={HeaderCss.img2}>
                                </div>
                            </div>
                            <div className={HeaderCss.inside3}>
                                <p className={HeaderCss.text1}>文章标题</p>
                                <Collapse
                                        bordered={false}
                                        defaultActiveKey={['0']}     
                                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                                        className={HeaderCss.Label}
                                    >
                                        <Panel header="详细内容" key="1" style={customPanelStyle} showArrow={false}>
                                            <p>{text}</p>
                                        </Panel>
                                    </Collapse>
                            </div>                   
                        </div>
                        {/* 3 */}
                        <div className={HeaderCss.main3}>
                        <div className={HeaderCss.inside1}>
                            </div>
                            <div className={HeaderCss.inside2}>
                                <div className={HeaderCss.img3}>
                                </div>
                            </div>
                            <div className={HeaderCss.inside3}>
                                <p className={HeaderCss.text1}>文章标题</p>
                                <Collapse
                                        bordered={false}
                                        defaultActiveKey={['0']}     
                                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                                        className={HeaderCss.Label}
                                    >
                                        <Panel header="详细内容" key="1" style={customPanelStyle} showArrow={false}>
                                            <p>{text}</p>
                                        </Panel>
                                    </Collapse>
                            </div>                   
                        </div>
                    </div>
                    <div className={HeaderCss.til}>
                        <div className={HeaderCss.til0}>
                            <Button type="link">更多<Icon type="double-right" /></Button>
                        </div>
                    </div>
                </div>
                <div className={HeaderCss.importent2}>
                    <div className={HeaderCss.t1}>

                    </div>
                    <div className={HeaderCss.t2}>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['0']}
                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                            accordion={true}
                        >
                            <Panel header="公告 1" key="1" style={customPanelStyle}>
                                <p>{text1}</p>
                            </Panel>
                            <Panel header="公告  2" key="2" style={customPanelStyle}>
                                <p>{text1}</p>
                            </Panel>
                            <Panel header="公告 3" key="3" style={customPanelStyle}>
                                <p>{text1}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}