import React from 'react';
import { Comment, Icon, Tooltip, Avatar,Modal,notification } from 'antd';
import moment from 'moment';
import { Button } from 'antd';
import Item from 'antd/lib/list/Item';

const { confirm } = Modal;
const openNotificationWithIcon = type => {
    notification[type]({
      message: '删除成功!',
      description:
        '',
    });
  };

var pc02 = require('./pc02.css')
export default class PC02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            action: null,
            listData: [
                {
                    id: "1"
                },
                {
                    id: "2"
                },
                {
                    id: "3"
                }
            ]
        };
    }

    showDeleteConfirm = e => {
        var list = this.state.listData;
        var target = e.target;
        var current = this;
       confirm({
         title: '你确定要删除吗?',
         content: '',
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
           current.setState({ listData: list })
           
         },
         onCancel() {
           console.log('Cancel');
         },
       });
     }
    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    render() {
        const { likes, dislikes, action } = this.state;

        const actions = [
            <span>
                <Tooltip title="Like">
                    <Icon
                        type="like"
                        theme={action === 'liked' ? 'filled' : 'outlined'}
                        onClick={this.like}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
            </span>,
            <span>
                <Tooltip title="Dislike">
                    <Icon
                        type="dislike"
                        theme={action === 'disliked' ? 'filled' : 'outlined'}
                        onClick={this.dislike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
            </span>,
        ];

        return (
            <div>
                <div className={pc02.e1}>
                    <p className={pc02.px}>我&nbsp;&nbsp;的&nbsp;&nbsp;收&nbsp;&nbsp;藏</p>
                </div>
                {this.state.listData.map((item, i) => {
                    return (
                        <div className={pc02.dd}>
                            <Comment
                                actions={actions}
                                author={<a>Han Solo</a>}
                                avatar={
                                    <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"
                                    />
                                }
                                content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                                        and efficiently.
          </p>
                                }
                                datetime={
                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{moment().fromNow()}</span>
                                    </Tooltip>
                                }
                                
                            />
                            <Button type="danger" className={pc02.bb} id={item.id} onClick={this.showDeleteConfirm}>删除</Button>
                </div>)})}
            </div>
        )
    }
}