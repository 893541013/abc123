import React from 'react';
import { Comment, Tooltip, List, Button,Modal,notification } from 'antd';
import moment from 'moment';

const { confirm } = Modal;
const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

var pc03 = require('./pc03.css')

export default class PC03 extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            data : [
                {   
                    id:"1",
                    actions: [<span>3天前浏览过该文章</span>],
                    author: '亚索',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: (
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully and
                            efficiently.
                    </p>
                    ),
                    datetime: (
                        <Tooltip
                            title={moment()
                                .subtract(3, 'days')
                                .format('YYYY-MM-DD HH:mm:ss')}
                        >
                            <span>
                                {moment()
                                    .subtract(3, 'days')
                                    .fromNow()}
                            </span>
                        </Tooltip>
                    ),
                },
                {   
                    id:"2",
                    actions: [<span>4天前浏览过该文章</span>],
                    author: 'EZ',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: (
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully and
                            efficiently.
                    </p>
                    ),
                    datetime: (
                        <Tooltip
                            title={moment()
                                .subtract(4, 'days')
                                .format('YYYY-MM-DD HH:mm:ss')}
                        >
                            <span>
                                {moment()
                                    .subtract(4, 'days')
                                    .fromNow()}
                            </span>
                        </Tooltip>
                    ),
                }, {
                    id:"3",
                    actions: [<span>6天前浏览过该文章</span>],
                    author: '盲僧',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: (
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully and
                            efficiently.
                    </p>
                    ),
                    datetime: (
                        <Tooltip
                            title={moment()
                                .subtract(6, 'days')
                                .format('YYYY-MM-DD HH:mm:ss')}
                        >
                            <span>
                                {moment()
                                    .subtract(6, 'days')
                                    .fromNow()}
                            </span>
                        </Tooltip>
                    ),
                },
                {
                    id:"4",
                    actions: [<span>9天前浏览过该文章</span>],
                    author: '劫',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: (
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully and
                            efficiently.
                    </p>
                    ),
                    datetime: (
                        <Tooltip
                            title={moment()
                                .subtract(9, 'days')
                                .format('YYYY-MM-DD HH:mm:ss')}
                        >
                            <span>
                                {moment()
                                    .subtract(9, 'days')
                                    .fromNow()}
                            </span>
                        </Tooltip>
                    ),
                },
            ]
        }
    }
    showDeleteConfirm = e => {
        var list = this.state.data;
        var target = e.target;
        var current = this;
       confirm({
         title: 'Are you sure delete this task?',
         content: 'Some descriptions',
         okText: 'Yes',
         okType: 'danger',
         cancelText: 'No',
         onOk() {
           console.log('OK');
           for (let i = 0; i < list.length; i++) {
               if (list[i].id == target.id) {
                   list.splice(i, 1);
                   openNotificationWithIcon('success')
                   break;
               }
           }
           current.setState({ data: list })
           
         },
         onCancel() {
           console.log('Cancel');
         },
       });
     }
       
    render() {
        return (
            <div>
                <div className={pc03.e1}>
                    <p className={pc03.px}>历&nbsp;&nbsp;史&nbsp;&nbsp;记&nbsp;&nbsp;录</p>
                </div>
                <List
                    className="comment-list"

                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                        <li>
                            <Comment
                                actions={item.actions}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                                
                            />
                            <Button type="danger" size="small" className={pc03.dd} onClick={this.showDeleteConfirm} id={item.id}>删除该浏览记录</Button>
                        </li>
                    )}
                />
            </div>
        )
    }
}