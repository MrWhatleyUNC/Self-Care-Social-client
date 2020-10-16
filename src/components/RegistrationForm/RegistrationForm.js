import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { email, username, password } = ev.target
        this.setState({ error: null })
        AuthApiService.postUser({
            email: email.value,
            username: username.value,
            password: password.value,
        })
            .then(user => {
                email.value = ''
                username.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <form className='registration-form'
                onSubmit={this.handleSubmit}
            >
                <fieldset>
                    <legend>Sign-Up for an account</legend>
                    <label htmlFor="full-name">Full Name:</label>
                    <input type="text" id='full-name' name='full-name'></input><br />
                    <label htmlFor="username">Username:</label>
                    <input type="text" id='username' name='username'></input><br />
        <label htmlFor="email">E-Mail:{'  '}</label>
                    <input type="text" id='email' name='email'></input><br />
                    <label htmlFor="password">Password:</label>
                    <input type="text" id='password' name='password'></input><br />
                </fieldset>
                <input type='submit' value='Sign-Up'></input> or <Link to='/'><button>Cancel</button></Link>
            </form>
        )
    }
}