import React from 'react';
import { Icon, Form, Input, Button} from 'antd';
import styles from '../Login/login-page.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom' 


const FormItem = Form.Item;
class Login extends React.Component {

  constructor(props){
      super(props);
      this.state={
        username:'',
        password:''
      }
  }
  changeValue =e=>{
        this.setState({
          [e.target.name]:e.target.value
        })
  }
  login = e=>{
        if(this.state.username=='Admin'&&this.state.password=='123'){
              alert('登陆成功!');
              window.localStorage.setItem("username","Admin");
              window.localStorage.setItem("token","11111");
        }else{
              alert('登陆失败,请重新登录!');
              window.localStorage.removeItem('username')

        }
  }
  render () {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <header className={styles.header}>
            文章编辑用户登录
          </header>
 
          <section className={styles.form}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('account',{
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名',
                      type: 'string'
                    }
                  ]
                })(
                  <Input type="text" prefix={<Icon type="user" />} name="username" id="username" value={this.state.username} onChange={this.changeValue}/>
                )}
              </FormItem>
 
              <FormItem>
                {getFieldDecorator('password',{
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                      type: 'string'
                    }
                  ]
                })(
                  <Input type="pwd" prefix={<Icon type="lock" />} name="password" id="password" value={this.state.password} onChange={this.changeValue}/>
                )}
              </FormItem>
              <Link to="/homepage">
              <Button className={styles.btn1} type="primary" htmlType="submit" onClick={this.login}>登录</Button>
              </Link>
              <Link to="/logon">
              <Button className={styles.btn2} type="primary" htmlType="submit">注册</Button>
              </Link>
            </Form>
          </section>
        </div>
      </div>
    );
  }
}
  
Login.contextTypes = {
  router: PropTypes.object.isRequired
};
  
Login = Form.create()(Login);
  
export default Login;
    