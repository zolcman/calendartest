import React, { Component,  PropTypes} from 'react'
import styles from './styles.scss';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginInServer } from './LoginAction';



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login:"",
            password:"",
        }
        
}
    componentDidMount() {

    
       //  window.localStorage.getItem('login');
       //  this.props.login();    
       this.setState({showIncorrectlogin:false})
    }
   

    componentWillReceiveProps(nextProps) {

        if (nextProps.loginId == "ERROR") {
            this.setState({showIncorrectlogin:true})
            return
         }

        if (nextProps.loginId) {
            localStorage.setItem('AuthToken', nextProps.loginId);
            this.props.login();
        }
        

     }

     componentWillUnmount() {
        this.setState({showIncorrectlogin:false})
     }


   login() {

    if (!this.state.login || !this.state.password) {
        this.setState({showAlert:true})
    }

    if (this.state.login && this.state.password) {
        this.setState({showAlert:false});
        let id = {
            "@odata.type": "LoginData",
            Password: this.state.password,
            Username: this.state.login
          //  Password: "QwErTy123@",
          //  Email: "root@starwind.com"
        }
          this.props.LoginInServer(id);
    }
    
      
  //  localStorage.setItem('login', 'red');
   }

    render(){


      

        return (
          <div className="login-page">
              
              <div className="login-container">

                    <div className="logo-login-page"></div>
                    <div className="login-input">
                    <input onChange={(e)=>{this.setState({login:e.target.value})}} value={this.state.login} className="allinput" placeholder="Login" type="text"/>
                    </div>
                    <div className="password-input">
                    <input onChange={(e)=>{this.setState({password:e.target.value})}} className="allinput martop10px password-input" placeholder="Password" type="password"/>
                    </div>
                    
                    
                     <a className="login-btn" onClick={this.login.bind(this)} >></a>
                   {(this.state.showAlert) ? (<div className="login-alert">Please enter a username and password</div> )
                   :
                   (null)
                   }  
                   {(this.state.showIncorrectlogin) ? (<div className="login-alert">Incorrect login or password</div> )
                   :
                   (null)
                   } 
              </div>
             
              
          

          </div>
        )
    }
}
const mapDispatchToProps = function(dispatch) {
    return {

        LoginInServer: (id) => dispatch(LoginInServer(id)),
    
    
    }
}

function mapStateToProps(state) {

//console.log(state.Reducer.emulate);
    return {
        loginId:state.toJS().LoginReducer.loginId,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
