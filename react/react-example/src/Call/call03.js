import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import {  notification } from 'antd';

const openNotification = () => {
    notification.open({
        message: '非常感谢您的反馈信息!',
        description:
            '',
        style: {
            width: 600,
            marginLeft: 335 - 600,
        },
    });
};

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea placeholder="请输入您想要反馈的内容：" rows={4} onChange={onChange} value={value} style={{ height: 400 }}></TextArea>
        </Form.Item>
        <Form.Item>
            <Button type="primary" onClick={openNotification} className={call03.btn}>反馈</Button>
        </Form.Item>
    </div>
);
var call03 = require('./call03.css')
export default class Call03 extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;
        return (
            <div>
                <div className={call03.e1}>
                    <p className={call03.px}>反&nbsp;&nbsp;馈&nbsp;&nbsp;建&nbsp;&nbsp;议</p>
                </div>
                <div>
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                        content={
                            <Editor
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                submitting={submitting}
                                value={value}
                            />
                        }
                    />
                </div>

            </div>
        )
    }
}