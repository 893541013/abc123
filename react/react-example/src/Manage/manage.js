import React from 'react';
import { Collapse, Button, Checkbox, Input } from 'antd';
import { Upload, message, Icon } from 'antd';
import axios from 'axios';

var manage = require('./manage.css');




export default class Manage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phonenumber: '',
            nickname: '',
            gender: '',
            username: '',
            password: '',
            newpassword:'',
            id: ''
        }

    }
    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    load = () => {
        axios.post('./getmanage', {
            id: this.state.id
        })
            .then(function (response) {
                this.setState({
                    email: response.data.email,
                    phonenumber: response.data.phonenumber,
                    nickname: response.data.nickname,
                    gender: response.data.gender
                })
            })
    }

    componentWillMount() {
        this.load()
    }
    sendMassage = e => {
        axios.post('/manange', {
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            nickname: this.state.nikrname,
            gender: this.state.plainOptions
        })

            .then(function (response) {
                console.log(response);
                if (response.data.result == true) {
                    message.info('修改成功！')
                }

            })

            .catch(function (error) {

                console.log(error);

            });
    }
    changePassword = e =>{
        axios.post('/changePassword',{
            username:  this.state.username,
            password: this.state.password,
            newpassword: this.state.newpassword
        })
        .then(function(response){
            switch(response.data.result){
                case "1":
                    message.info("")
                    break;
            }
        })
    }
    render() {
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        function onChange(checkedValues) {
            console.log('checked = ', checkedValues);
        }
        const plainOptions = ['男', '女'];

        const text1 = (
            <p style={{ paddingLeft: 24 }}>

                <Input placeholder={this.state.email} type="text" className={manage.cmanage} value={this.state.email} name="email" id="email" onChange={this.changeValue}></Input>

            </p>
        );
        const text2 = (
            <p style={{ paddingLeft: 24 }}>
                <Input placeholder={this.state.phonenumber} type="text" className={manage.cmanage} value={this.state.phonenumber} name="phonenumber" id="phonenumber" onChange={this.changeValue}></Input>

            </p>
        );
        const text3 = (
            <p style={{ paddingLeft: 24 }}>
                <Input placeholder={this.state.nickname} type="text" className={manage.cmanage} value={this.state.nickname} name="nickname" id="nickname" onChange={this.changeValue}></Input>

            </p>
        );
        const text4 = (
            <div>
                <p>性别: </p>
                <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
            </div>
        );
        const text5 = (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> 上传头像
                    </Button>
                </Upload>
            </div>
        );

        const { Panel } = Collapse;
        return (
            <div>
                <div className={manage.dd}>
                    <h3 style={{ margin: '16px 0', textAlign: "center", fontSize: 25 }}>账号管理</h3>
                </div>
                <p size="large">基本资料</p>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header={"个人邮箱: " + this.state.email} key="1" >
                        {text1}
                    </Panel>
                    <Panel header={"个人手机号: " + this.state.phonenumber} key="2">
                        {text2}
                    </Panel>
                    <Panel header={"昵称: " + this.state.nickname} key="3">
                        {text3}
                    </Panel>
                    <Panel header={"性别: " + this.state.gender} key="4">
                        {text4}
                    </Panel>
                    <Panel header="我的头像" key="5">
                        {text5}
                    </Panel>
                </Collapse>
                <Button type="primary" className={manage.btn1} onClick={this.sendMessage}>修改</Button>
                <div className={manage.cpsw}> 
                    修改密码：
                    <div className={manage.ipt1}>
                    <Input placeholder='请输入用户名' type="text" value={this.state.username} className={manage.cpwdinpt} name="username" id="username" onChange={this.changeValue}></Input>
                    </div>
                    <div className={manage.ipt2}>
                    <Input placeholder='请输入旧密码' type="password" value={this.state.password} className={manage.cpwdinpt} name="password" id="password" onChange={this.changeValue}></Input>
                    </div>
                    <div className={manage.ipt3}>
                    <Input placeholder='请输入新密码' type="password" value={this.state.newpassword} className={manage.cpwdinpt} name="newpassword" id="newpassword" onChange={this.changeValue}></Input>
                    </div>
                    <Button type="primary" className={manage.btn2} onClick={this.changePassword}>修改</Button>
                </div>
            </div>
        )
    }
}