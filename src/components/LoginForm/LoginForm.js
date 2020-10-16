import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenServices from '../../services/token-services'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmitJWTAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { email, password } = ev.target
        
        AuthApiService.postLogin({
          email: email.value,
          password: password.value
        })
          .then(res=>{
            email.value = ''
            password.value = ''
            TokenServices.saveAuthToken(res.authToken)
            TokenServices.saveUserId(res.user_id)
            this.props.onLoginSuccess()
          })
          .catch(res=>{
              this.setState({error: res.error})
          })
    }

    render() {
        const { error } = this.state
        return (
        <form 
            className='login-form'
            onSubmit={this.handleSubmitJWTAuth}>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
            <fieldset>
                <legend>Sign-In</legend>
                <label htmlFor="email">E-Mail:</label>
                <input type= 'text' id='email' name='email'/><br />
                <label htmlFor="password">Password:</label>
                <input type= 'text' id= 'password' name= 'password'/>
            </fieldset>
            <div>
                <input type="submit" value="Login"/> or <Link to='/register'><button>Sign-Up</button></Link>
            </div>
        </form>
        )
    }
}