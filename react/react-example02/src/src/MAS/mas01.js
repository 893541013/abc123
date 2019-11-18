import React from 'react';
import { PageHeader, Typography, Button,Modal,notification } from 'antd';
const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  

var mas01 = require('./mas01.css')
const { Paragraph } = Typography;
const { confirm } = Modal;

const routes = [
    {
        path: 'index',
        breadcrumbName: '一位靓仔对你xxxx文章的评论：',
    }
];
const content = (
    <div className="content">
        <Paragraph>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
    </Paragraph>
        <Paragraph>
            Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
    </Paragraph>

    </div>
);
const extraContent = (
    <div>
        <img
            src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
            alt="content"
        />
    </div>
);

export default class MAS01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    id: "1"
                },
                {
                    id: "2"
                },
                {
                    id: "3"
                }
            ]
        }
    }
     showDeleteConfirm = e => {
         var list = this.state.listData;
         var target = e.target;
         var current = this;
        confirm({
          title: 'Are you sure delete this task?',
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
            for (let i = 0; i < list.length; i++) {
                if (list[i].id == target.id) {
                    list.splice(i, 1);
                    openNotificationWithIcon('success')
                    break;
                }
            }
            current.setState({ listData: list })
            
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      
    render() {
        return (
            <div>
                <div className={mas01.e1}>
                    <p className={mas01.px}>评&nbsp;&nbsp;论&nbsp;&nbsp;我&nbsp;&nbsp;的</p>
                </div>
                {this.state.listData.map((item, i) => {
                    return (
                        <PageHeader title="xxxx文章" breadcrumb={ routes } >
                            <div className="wrap">
                                <div className="content">{content}</div>
                                <div className="extraContent">{extraContent}</div>
                                <Button type="dashed" className={mas01.oo}>回复他</Button>
                                <Button type="dashed" className={mas01.o} onClick={this.showDeleteConfirm} id={item.id}>删除该评论</Button>
                            </div>
                        </PageHeader>
            )})}
            </div>
        )
    }
}