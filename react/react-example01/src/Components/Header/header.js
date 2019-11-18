import React from 'react';

var HeaderCss = require('./header.css');


export default class Header extends React.Component{
    render(){
        return(
            <div className={HeaderCss.b1}>
              <p> 文&nbsp;章&nbsp;编&nbsp;辑&nbsp;平&nbsp;台&nbsp;管&nbsp;理&nbsp;员&nbsp;界&nbsp;面</p>
            </div>
        )
    }
}