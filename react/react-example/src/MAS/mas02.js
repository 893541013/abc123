import React from 'react';
import { Empty } from 'antd';

var mas02 = require('./mas02.css')
export default class MAS02 extends React.Component{
    render(){
        return(
            <div>
                <div>
               <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
               </div>
               <h className={mas02.aa}>暂时还没有靓仔@你哦</h>
            </div>
        )
    }
}