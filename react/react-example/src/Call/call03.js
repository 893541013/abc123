import React from 'react';
import { Comment, Avatar, Form, Button, List, Input, message } from 'antd';
import moment from 'moment';
import Axios from 'axios';

const { TextArea } = Input;

var call03 = require('./call03.css')
export default class Call03 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            value: '',
        }
    }
    feedback = e => {
        console.log(this.state.value)
        Axios.post('/feedback', {
            value: this.state.value
        })
            .then(function (response) {
                    message.info('反馈成功 ！')
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
    render() {

        const { value } = this.state;


        return (
            <div>
                <div className={call03.e1}>
                    <p className={call03.px}>反&nbsp;&nbsp;馈&nbsp;&nbsp;建&nbsp;&nbsp;议</p>
                </div>
                <div>
                    <TextArea
                        value={value}
                        onChange={this.onChange}
                        placeholder="Controlled autosize"
                        autoSize={{ minRows: 20, maxRows: 35 }}
                    />
                </div>
                <Button className={call03.btn} type="primary" onClick={this.feedback}>登录</Button>
            </div>
        )
    }
}