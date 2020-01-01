import React from 'react';
import { Comment, Avatar, Form, Button, List, Input,message } from 'antd';
import moment from 'moment';
import Axios from 'axios';
const { Search } = Input;
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
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);


var EmailCss = require('./email.css');

export default class Email01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: [],
        submitting: false,
        value: '',
    }
}
  complain = e => {
    console.log(this.state.value)
    Axios.post('/complain', {
        value: this.state.value
    })
        .then(function (response) {
                message.info('投诉成功 ！')
            console.log(response);
            this.setState({
                // movieData:response.data
            })
        })

        .catch(function (error) {

            console.log(error);

        });
}
onChange = ({ target: { value } }) => {
  this.setState({ value });
}
  

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
        <div className={EmailCss.e1}>
          <p className={EmailCss.p1}>投&nbsp;&nbsp;诉&nbsp;&nbsp;信&nbsp;&nbsp;息</p>
          <Search placeholder="input search text" onSearch={value => console.log(value)} className={EmailCss.e2} enterButton />
        </div>
        <div className={EmailCss.l}>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
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