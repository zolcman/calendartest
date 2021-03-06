/* @flow */

import React, { Component,  PropTypes} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash';
import NavBar from '../../components/NavBar/NavBar'
import Login from '../../containers/Login/Login'
import config from '../../config';
import routes from '../../routes';
// Import your global styles here
import '../../theme/normalize.css';
import styles from './styles.scss';
import Alert from '../../components/Alert/Alert'


class App extends Component {
  constructor(props) {
      super(props)
     
      this.routeWithSubRoutes = this.routeWithSubRoutes.bind(this);
      this.state = {
        isLogin:false
    }
}

 routeWithSubRoutes(route) {
  return (
    <Route
      key={_.uniqueId()}
      exact={route.exact || false}
      path={route.path}
      render={props => (
        // Pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes || null} />
      )}
    />
  );
 } 

 login() {
   
  // this.loginvar = localStorage.getItem('login');
  // console.log("loginprops")


   this.setState({isLogin:localStorage.getItem('AuthToken')});

 }

 componentDidMount() {

  
  //  this.loginvar = localStorage.getItem('login');
   // console.log(this.loginvar);
    this.setState({isLogin:localStorage.getItem('AuthToken')});
   
 }
 


 render () {
  
  console.log(this.state.isLogin);

  if(this.state.isLogin) {
   
    return (
      <div className={styles.App}>
      <Helmet {...config.app} />
      <NavBar />
      <Alert/>
      <Switch>
      {routes.map(route => this.routeWithSubRoutes(route))}
      </Switch>
      </div>
    )
  }

  if (!this.state.isLogin) {

    
    return (
      <div>
        <Alert/>
        <Login login={this.login.bind(this)}/>
      </div>
      
    )
  }

  
 }



}

export default App;


