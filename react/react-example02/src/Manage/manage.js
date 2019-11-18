import React from 'react';
import { Collapse, Button } from 'antd';
import { Checkbox } from 'antd';
import { Upload, message, Icon } from 'antd';

var manage = require('./manage.css')
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
        1161078318@qq.com
        <Button type="link">修改</Button>
    </p>
);
const text2 = (
    <p style={{ paddingLeft: 24 }}>
        18227748505
        <Button type="link">修改</Button>
    </p>
);
const text3 = (
    <p style={{ paddingLeft: 24 }}>
        Admin
        <Button type="link">修改</Button>
    </p>
);
const text4 = (
    <div>
        <p>性别:</p>
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
        <Button type="link">修改</Button>
    </div>
);
const text5 = (
    <div>
        <Upload {...props}>
            <Button>
                <Icon type="upload" /> 上传头像
            </Button>
            <Button type="link">修改</Button>
        </Upload> 
    </div>
);
const { Panel } = Collapse;


export default class Manage extends React.Component {


    render() {
        return (
            <div>
                <div className={manage.dd}>
                <h3 style={{ margin: '16px 0', textAlign: "center",fontSize:25 }}>账号管理</h3>
                </div>
                <p size="large">基本资料</p>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="个人邮箱" key="1">
                        {text1}
                    </Panel>
                    <Panel header="个人手机号" key="2">
                        {text2}
                    </Panel>
                    <Panel header="用户名" key="3">
                        {text3}
                    </Panel>
                    <Panel header="性别" key="4">
                        {text4}
                    </Panel>
                    <Panel header="我的头像" key="5">
                        {text5}
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
