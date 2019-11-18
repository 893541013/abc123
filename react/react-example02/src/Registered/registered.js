import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


var RegisteredCss = require('./registered.css');

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} className={RegisteredCss.loginform}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className={RegisteredCss.loginformforgot} href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className={RegisteredCss.loginformbutton}>
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        );
      }
    }
    
    const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default class Registered extends React.Component {
    render(){
        return(
            <div >
               <WrappedNormalLoginForm />
            </div>
        )
    }
}