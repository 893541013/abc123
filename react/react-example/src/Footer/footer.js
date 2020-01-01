import React from 'react';
import { Popover, Button, Collapse, Icon } from 'antd';
import {Link} from "react-router-dom";

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


var FooterCss = require('./footer.css');
export default class Footer extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div className={FooterCss.importent}>
                <div className={FooterCss.importent1}>
                    {/* 1 */}
                    
                    <div type="link" className={FooterCss.title}>
                    <Link to="/hotarticle"><p>热&nbsp;&nbsp;门&nbsp;&nbsp;文&nbsp;&nbsp;章</p></Link>
                        
                        </div>

                    <div className={FooterCss.importent1_1}>
                        <div className={FooterCss.main1}>
                            <div className={FooterCss.inside1}>
                            </div>
                            <div className={FooterCss.inside2}>
                                <div className={FooterCss.img1}>
                                </div>
                            </div>
                            <div className={FooterCss.inside3}>
                                <p className={FooterCss.text1}>文章标题</p>
                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['0']}
                                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                                    className={FooterCss.Label}
                                >
                                    <Panel header="详细内容" key="1" style={customPanelStyle} >
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className={FooterCss.main2}>
                            <div className={FooterCss.inside1}>
                            </div>
                            <div className={FooterCss.inside2}>
                                <div className={FooterCss.img2}>
                                </div>
                            </div>
                            <div className={FooterCss.inside3}>
                                <p className={FooterCss.text1}>文章标题</p>
                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['0']}
                                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                                    className={FooterCss.Label}
                                >
                                    <Panel header="详细内容" key="1" style={customPanelStyle} showArrow={false}>
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className={FooterCss.main3}>
                            <div className={FooterCss.inside1}>
                            </div>
                            <div className={FooterCss.inside2}>
                                <div className={FooterCss.img3}>
                                </div>
                            </div>
                            <div className={FooterCss.inside3}>
                                <p className={FooterCss.text1}>文章标题</p>
                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['0']}
                                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                                    className={FooterCss.Label}
                                >
                                    <Panel header="详细内容" key="1" style={customPanelStyle} showArrow={false}>
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div className={FooterCss.til}>
                        <div className={FooterCss.til0}>
                        <Link to="/hotarticle"><Button type="link">更多<Icon type="double-right" /></Button></Link>
                        </div>
                    </div>
                </div>
                <div className={FooterCss.importent2}>
                    <div className={FooterCss.t1}>
                    </div>
                    <div className={FooterCss.t2}>
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