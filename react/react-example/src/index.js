import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homePage'
import{BrowserRouter,Route,Switch,withRouter,Redirect} from "react-router-dom";
import LoginPage from './Login/login';
import LogonPage from './Logon/logon';
import UserPage from './User/user';
import Manage from './Manage/manage'
import Hotarticle from './hotarticle/hotarticle';
import Article from './Article/article';



class IndexPage extends React.Component{
    
    render(){
        return(
            <div>
              <BrowserRouter basename='react-example'>
                <Route path="/homePage" exact component={HomePage}></Route>
                <Route path="/login" exact component={LoginPage} history = {this.props.history}></Route>
                <Route path="/logon" exact component={LogonPage}></Route>
                <Route path="/manage" exact component={Manage}></Route>
                <Route path="/user" component={UserPage} history = {this.props.history}></Route>
                <Route path="/hotarticle" exact component={Hotarticle}></Route>
                <Route path="/article" exact component={Article}></Route>
              </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
//直接在html上渲染组件
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

