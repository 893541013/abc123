import React from 'react';
import { Input } from 'antd';
import { Avatar, Button } from 'antd';
var CACss = require('./ca.css')

const { Search } = Input;
export default class CA02 extends React.Component {
    render() {
        return (
            <div>
                <div className={CACss.e1}>
                    <p className={CACss.p1}>管&nbsp;&nbsp;理&nbsp;&nbsp;文&nbsp;&nbsp;章</p>
                    <Search placeholder="input search text" onSearch={value => console.log(value)} className={CACss.e2} enterButton />
                </div>
                <div className={CACss.l}>
                    <div className={CACss.l1}>
                        <div className={CACss.l2}>
                            <Avatar size={64} icon="user" className={CACss.img1} />
                        </div>
                        <div className={CACss.l3}>

                        </div>
                        <div className={CACss.b}>
                            <Button type="normal" className={CACss.b1}>回复</Button>
                            <Button type="danger" className={CACss.b2}>删除</Button>
                        </div>
                    </div>
                    <div className={CACss.l1}>
                        <div className={CACss.l2}>
                            <Avatar size={64} icon="user" className={CACss.img1} />
                        </div>
                        <div className={CACss.l3}>

                        </div>
                        <div className={CACss.b}>
                            <Button type="normal" className={CACss.b1}>回复</Button>
                            <Button type="danger" className={CACss.b2}>删除</Button>
                        </div>
                    </div>
                    <div className={CACss.l1}>
                        <div className={CACss.l2}>
                            <Avatar size={64} icon="user" className={CACss.img1} />
                        </div>
                        <div className={CACss.l3}>

                        </div>
                        <div className={CACss.b}>
                            <Button type="normal" className={CACss.b1}>回复</Button>
                            <Button type="danger" className={CACss.b2}>删除</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}