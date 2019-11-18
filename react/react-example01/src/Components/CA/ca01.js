import React from 'react';
import { Input, Modal,Rate,Avatar, Button,List,notification } from 'antd';

const { confirm } = Modal;
const { Search } = Input;
const desc = ['糟糕', '不好', '一般', '好', '完美'];
const openNotificationWithIcon = type => {
    notification[type]({
      message: '下架成功!',
      description:
        '已从平台下架, 并给作者发送消息.',
    });
  };

var CACss = require('./ca.css')

export default class CA01 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 3,
            listData: [
                {
                    href: 'http://ant.design',
                    title: `文章 ${1}`,
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:
                        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content:
                        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                },
                {
                    href: 'http://ant.design',
                    title: `文章 ${2}`,
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:
                        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content:
                        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                },
                {
                    href: 'http://ant.design',
                    title: `文章 ${3}`,
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:
                        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content:
                        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                }
            ]
        };
        // this.showDeleteConfirm = this.showDeleteConfirm.bind(this);
    }

    handleChange = value => {
        this.setState({ value });
    };


    showDeleteConfirm = e => {
        var list = this.state.listData;
        var target = e.target;
        var current =this;
        console.log(e.target)
        console.log(this.state)
        confirm({
            title: '你确定要下架这篇文章吗?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log(target.id);
                console.log(current.state);
                for (let i = 0; i < list.length; i++) {
                    if (list[i].title === target.id) {
                        list.splice(i, 1);
                        openNotificationWithIcon('success')
                        break;
                    }
                }
                current.setState(
                    { listData: list }
                )
                console.log(current.state)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render() {

        const { value } = this.state;
        return (
            <div>
                <div className={CACss.e1}>
                    <p className={CACss.p1}>已&nbsp;&nbsp;上&nbsp;&nbsp;架&nbsp;&nbsp;文&nbsp;&nbsp;章</p>
                    <Search placeholder="input search text" onSearch={value => console.log(value)} className={CACss.e2} enterButton />
                </div>
                <div className={CACss.l}>
                    <div className={CACss.l_1}>

                        {this.state.listData.map((item, i) => {
                            return (<div className={CACss.rr}>
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <span>
                                            <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                        </span>
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                    <Button  id={item.title} onClick={this.showDeleteConfirm} className={CACss.pd} type="dashed">
                                        下架
                                    </Button>
                                    {/* <Button type="danger" onClick={this.handleOnClick} className={CACss.pd}>下架</Button> */}
                                </List.Item>
                            </div>
                            )
                        })}
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={this.listData}
                            footer={
                                <div>
                                    <b>ant design</b> footer part
                              </div>
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}