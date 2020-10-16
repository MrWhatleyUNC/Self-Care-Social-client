import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LandingPage extends Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
     
    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/homepage'
        history.push(destination)
    }

    render(){
        return(
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
        )
    }
}