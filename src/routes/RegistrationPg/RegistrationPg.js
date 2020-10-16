import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.js'

export default class RegistrationPage extends Component {
    static defaultProps = {
      history: {
        push: () => {},
      },
    }
  
    handleRegistrationSuccess = () => {
      const { history } = this.props
      history.push('/')
    }
  
    render() {
      return (
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
      )
    }
  }