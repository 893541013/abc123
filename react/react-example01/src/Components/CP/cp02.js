import React from 'react';
import { Button,Collapse,notification } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;

  const openNotificationWithIcon = type => {
    notification[type]({
      message: '删除成功!',
      description:
        '公告已删除, 如需发布公告请至"公告发布"中编辑.',
    });
  };


var CACss = require('./cp02.css')


export default class CP02 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: [
                {
                    id: 1,
                    header: "公告1"
                },
                {
                    id: 2,
                    header: "公告2"
                    
                },
                {
                    id: 3,
                    header: "公告3"
                }
            ]
        }
    }
    delete = e => {
        var list = this.state.listData;

        for (let i = 0; i < list.length; i++) {
            console.log(list[i]);
            if (list[i].id == e.target.id) {
                list.splice(i, 1);
                openNotificationWithIcon('success')
                break;
            }
        }

        this.setState(
            { listData: list }
        )
    }
    render() {
        return (
            <div>
                <div className={CACss.e1}>
                    <p className={CACss.p1}>删&nbsp;&nbsp;除&nbsp;&nbsp;公&nbsp;&nbsp;告</p>
                </div>
                <div className={CACss.e2}>
                    <div className={CACss.e_1}>
                        <Collapse accordion className={CACss.c}>
                            {this.state.listData.map((item, i) => {
                                return (
                                    <Panel header={item.header} key={item.id} >
                                        <p>{text}
                                            <br></br>
                                            <Button className={CACss.e_2} id={item.id} type="link" onClick={this.delete}>删除</Button>
                                        </p>
                                    </Panel>
                                )
                            })}
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}