import React from 'react';

var HotarticleHeaderCSS = require('./HotarticleHeader.css')
export default class HotarticleHeader extends React.Component{
    render(){
        return(
        <div className={HotarticleHeaderCSS.H}>
           <p className={HotarticleHeaderCSS.p}> 热&nbsp;&nbsp;门&nbsp;&nbsp;文&nbsp;&nbsp;章</p>
        </div>
        )
    }
}