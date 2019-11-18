import React from 'react';
import Header from './../Header/header';
import Body from './../Body/body';


var HomePageCss = require('./homePage.css');

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className={HomePageCss.h}>
                    <Header />
                </div>
                <div className={HomePageCss.b}>
                    <Body />
                </div>
            </div>
        )
    }
}
