import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Login from './Components/Login/login';
import HomePage from './Components/HomePage/homepage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class IndexPage extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter basename='react-example01'>
                    <Switch>
                        <Route path="/Login" component={Login}></Route>
                        <Route path="/HomePage" component={HomePage}></Route>
                        <Redirect to="/Login"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
