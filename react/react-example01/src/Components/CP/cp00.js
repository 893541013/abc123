import React from 'react';
import { Input,Button,notification } from 'antd';

const { TextArea } = Input;
const openNotificationWithIcon = type => {
    notification[type]({
      message: '发布成功!',
      description:
        '公告已发布, 如需删除发布公告请至"公告删除"中编辑.',
    });
  };


var CACss = require('./cp00.css')

export default class CP00 extends React.Component {
    render() {
        return (
            <div>
                <div className={CACss.e1}>
                    <p className={CACss.p1}>公&nbsp;&nbsp;告&nbsp;&nbsp;设&nbsp;&nbsp;置</p>
                </div>
                <div className={CACss.e2}>
                    <div className={CACss.e2_1}>
                        <label for="title" className={CACss.e2_1_1}>标题:</label>
                        <TextArea placeholder="标题" id="title" className={CACss.e2_1_2} rows={1} />
                        <br></br>
                        <label for="text" className={CACss.e2_1_3}>公告内容:</label>
                        <br></br>
                        <br></br>
                        <TextArea placeholder="内容" id="text" className={CACss.e2_1_4} rows={10} />  
                        <br></br> 
                        <Button type="primary" size="large" className={CACss.e2_1_5} onClick={() => openNotificationWithIcon('success')}>发布</Button>
                    </div>
                </div>
            </div>
        )
    }
}