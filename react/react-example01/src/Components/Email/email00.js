import React from 'react';
import { Input } from 'antd';
import { Avatar, Button } from 'antd';
var EmailCss = require('./email.css');



const { Search } = Input;
export default class Email00 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: [
                {
                    id:1,
                    text: "1"
                },
                {
                    id:2,
                    text: "2"
                },
                {
                    id:3,
                    text: "3"
                }
            ]
        }
    }
    delete = e=>{
        var list = this.state.listData;
        
        for (let i = 0; i < list.length; i++) {
            console.log(list[i]);
            if(list[i].id==e.target.id){
                list.splice(i,1);
                break;
            }            
        }
        this.setState(
            {listData: list}
        )
    }

    render() {

        return (
            <div>
                <div className={EmailCss.e1}>
                    <p className={EmailCss.p1}>信&nbsp;&nbsp;息&nbsp;&nbsp;反&nbsp;&nbsp;馈</p>
                    <Search placeholder="input search text" onSearch={value => console.log(value)} className={EmailCss.e2} enterButton />
                </div>
                <div className={EmailCss.l}>
                    {this.state.listData.map((item, i) => {
                        return (<div className={EmailCss.l1}>
                            <div className={EmailCss.l2}>
                                <Avatar size={64} icon="user" className={EmailCss.img1} />
                            </div>
                            <div className={EmailCss.l3}>
                                {item.text}
                            </div>
                            <div className={EmailCss.b}>
                                <Button type="normal" className={EmailCss.b1}>回复</Button>
                                <Button type="danger" id={item.id} className={EmailCss.b2} onClick={this.delete}>忽略</Button>
                            </div>
                        </div>)
                    })}
                </div>

            </div>
        )
    }
}