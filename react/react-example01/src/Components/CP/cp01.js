import React from 'react';
import { Carousel } from 'antd';
import { Upload, Button, Icon } from 'antd';

const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
];

const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
};

// const props2 = {
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     listType: 'picture',
//     defaultFileList: [...fileList],
//     className: 'upload-list-inline',
// };


var CACss = require('./cp01.css')

export default class CP01 extends React.Component {
    render() {
        return (
            <div>
                <div className={CACss.e1}>
                    <p className={CACss.p1}>轮&nbsp;&nbsp;播&nbsp;&nbsp;图&nbsp;&nbsp;设&nbsp;&nbsp;置</p>
                </div>
                <div className={CACss.e2}>
                    <Carousel autoplay className={CACss.e3}>
                        <div>
                            <Upload {...props}>
                                <Button className={CACss.e4}>
                                    <Icon type="upload" /> 上传图片
                                  </Button>
                            </Upload>
                            <br />
                        </div>
                        <div>
                            <Upload {...props}>
                                <Button className={CACss.e4}>
                                    <Icon type="upload" /> 上传图片
                                  </Button>
                            </Upload>
                            <br />
                        </div>
                        <div>
                            <Upload {...props}>
                                <Button className={CACss.e4}>
                                    <Icon type="upload" /> 上传图片
                                  </Button>
                            </Upload>
                            <br />
                        </div>
                        <div>
                            <Upload {...props}>
                                <Button className={CACss.e4}>
                                    <Icon type="upload" /> 上传图片
                                  </Button>
                            </Upload>
                            <br />
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}