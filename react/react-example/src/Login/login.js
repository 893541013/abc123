import React from 'react';
import { Icon, Form, Input, Button,message } from 'antd';
import styles from '../Login/login-page.css';
import PropTypes from 'prop-types';
import { Link,withRouter } from 'react-router-dom'
import axios from 'axios';

var loginCSS = require('./login.css')
const FormItem = Form.Item;
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  changeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  login = e => {

    axios.post('/login', {

      username: this.state.username,
      userpassword: this.state.password
    }).then((response) =>{
        console.log(response.data.result);
        if (response.data.result == true) {
          message.info('登陆成功!');
          window.localStorage.setItem("username", response.data.username);
          // window.localStorage.setItem("token", response.data.token);
          this.props.history.push('./homepage')
        } else {
          alert('登陆失败,请重新登录!');
          window.localStorage.removeItem('username')

        }
        
      })

      .catch(function (error) {

        console.log(error);

      });
  }
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={loginCSS.aa}>
        <div className={styles.wrapper}>
          <div className={styles.body}>
            <header className={styles.header}>
              文章编辑用户登录
          </header>

            <section className={styles.form}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                  {getFieldDecorator('account', {
                    rules: [
                      {
                        required: true,
                        message: '请输入用户名',
                        type: 'string'
                      }
                    ]
                  })(
                    <Input type="text" prefix={<Icon type="user" />} name="username" id="username" value={this.state.username} onChange={this.changeValue} />
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: '请输入密码',
                        type: 'string'
                      }
                    ]
                  })(
                    <Input type="pwd" prefix={<Icon type="lock" />} name="password" id="password" value={this.state.password} onChange={this.changeValue} />
                  )}
                </FormItem>
                  <Button className={styles.btn1} type="primary" htmlType="submit" onClick={this.login}>登录</Button>
                <Link to="/logon">
                  <Button className={styles.btn2} type="primary" htmlType="submit">注册</Button>
                </Link>
              </Form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
};

Login = Form.create()(Login);

export default withRouter(Login);