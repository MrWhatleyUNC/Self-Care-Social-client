import React, { Component } from 'react'
import NewPostForm from '../../components/Posts/NewPostForm'

export default class NewPostPage extends Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    handleSubmit = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/profile`
        history.push(destination)
    }

    render(){
        return (
            <NewPostForm
                onSuccessfulSubmit={this.handleSubmit}
            />
        )
    }
}