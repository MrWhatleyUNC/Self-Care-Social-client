import React, { Component } from 'react'
import './LoginForm.css'

export default class LoginForm extends Component {
    
    render() {
        return (
        <form className='login-form'>
            <fieldset>
                <legend>Sign-In</legend>
                <label for="email">E-Mail:</label>
                <input type= 'text' id='email' name='email'></input><br />
                <label for="password">Password:</label>
                <input type= 'text' id= 'password' name= 'password'></input>
            </fieldset>
            <div>
                <input type="submit" value="Login"></input> or <button>Sign-Up</button>
            </div>
        </form>
        )
    }
}