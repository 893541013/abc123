import React from 'react';
import { Input, Button, Pagination } from 'antd';

var articleCSS = require('./article.css')



export default class article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { TextArea } = Input;
        return (
            <div>
                <div className={articleCSS.header}>标题 作者：</div>
                <div>
                    <div className={articleCSS.body}></div>
                    <div className={articleCSS.comment}>
                        <TextArea
                            value={value}
                            onChange={this.onChange}
                            placeholder="Controlled autosize"
                            autoSize={{ minRows: 3, maxRows: 5 }}

                        />
                    </div>
                    <Button type="primary" className={articleCSS.sendComment} onClick={this.sendComment}>发表</Button>
                </div>
                <div className={articleCSS.othercomments}>
                    <li className={articleCSS.li}>
                        <div className={articleCSS.img}></div>
                        <div className={articleCSS.descr}></div>
                    </li>
                    <li className={articleCSS.li}>
                        <div className={articleCSS.img}></div>
                        <div className={articleCSS.descr}></div>
                    </li>
                    <li className={articleCSS.li}>
                        <div className={articleCSS.img}></div>
                        <div className={articleCSS.descr}></div>
                    </li>
                    <li className={articleCSS.li}>
                        <div className={articleCSS.img}></div>
                        <div className={articleCSS.descr}></div>
                    </li>
                    <li className={articleCSS.li}>
                        <div className={articleCSS.img}></div>
                        <div className={articleCSS.descr}></div>
                    </li>
                    <li className={articleCSS.li}>
                        <div className={articleCSS.img}></div>
                        <div className={articleCSS.descr}></div>
                    </li>
                </div>
                <div className={articleCSS.pagediv}>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} className={articleCSS.pagebtn} />
                </div>
            </div>
        )
    }
}