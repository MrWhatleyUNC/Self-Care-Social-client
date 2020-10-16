import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenServices from '../../services/token-services'
import PostServices from '../../services/post-api-service'
import './NewPostForm.css'

export default class NewPostForm extends Component {
    static defaultProps = {
        onSuccessfulSubmit: () => { }
    }

    state = { error: null }

    handleSubmit = (e) => {
        e.preventDefault()
        const user = TokenServices.getUserId()
        const { post } = e.target
        PostServices.makePost(user, post.value)
        this.props.onSuccessfulSubmit()
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='new-post-form'
                onSubmit={this.handleSubmit}
            >
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <fieldset>
                    <legend>New Post</legend>
                    <label htmlFor="title">Title:{' '}</label>
                    <input type='text' id='title' name='title'></input><br />
                    <label htmlFor="post">
                    <textarea 
                        id='post' 
                        name='post'
                        rows='5'
                        columns='50'
                        placeholder='Enter your post here'
                        /></label><br />
                    <div>
                        <label htmlFor="sharing">Sharing: </label>
                        <label htmlFor='public'> Public </label>
                        <input type="radio" id='public' name='sharing' value="public" />
                        <label htmlFor='friends'> Friends </label>
                        <input type="radio" id='friends' name='sharing' value="friends" />
                        <label htmlFor='private'> Private </label>
                        <input type="radio" id='private' name='sharing' value="private" />
                    </div>
                    <label htmlFor="tags">Tags:{' '}</label>
                    <input type='text' id='tags' name='tags' />
                </fieldset>
                <div>
                    <input type="submit" value="Add Post" /> or <Link to='/profile' ><button>Cancel</button></Link>
                </div>
            </form>
        )
    }
}