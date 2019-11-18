import React from 'react';
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


var pc01 = require('./pc01.css')
export default class PC01 extends React.Component {
    state = {
        showRichText: false,
        editorContent: '',
        editorState: ''
    }
    handleClearContent = () => {  //清空文本
        this.setState({
            editorState: ''
        })
    }
    handleGetText = () => {    //获取文本内容
        this.setState({
            showRichText: true
        })
    }
    onEditorStateChange = (editorState) => {   //编辑器的状态
        this.setState({
            editorState
        })
    }
    onEditorChange = (editorContent) => {   //编辑器内容的状态
        this.setState({
            editorContent
        })
    }
    render() {
        const { editorState, editorContent } = this.state;
        return (
            <div>
                <div className={pc01.e1}>
                    <p className={pc01.p1}>文&nbsp;&nbsp;章&nbsp;&nbsp;编&nbsp;&nbsp;辑</p>
                </div>
                <div>
                
                <Card title="文章编辑">
                    <Editor 
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorChange}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Card>
                    <Button type="danger" onClick={this.handleClearContent} className={pc01.b1}>重新编辑</Button>
                    <Button type="primary"  className={pc01.b2}>编辑完成</Button>
                </Card>
                <Modal 
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={() =>{
                        this.setState({
                            showRichText: false
                        })
                    }}
                    footer={null}>
                    {draftjs(this.state.editorContent)}
                </Modal>
                </div>
            </div>
        )
    }
}