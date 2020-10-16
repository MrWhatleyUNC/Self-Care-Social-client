import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../components/Sidebar/Sidebar'
import PostList from '../../components/Posts/PostList'
import TokenServices from '../../services/token-services'
import PostListContext from '../../context/PostListContext'
import PostServices from '../../services/post-api-service'

export default class UserProfile extends Component {
    static defaultProps = {
        match: {params: {} }
    }

    static contextType = PostListContext

    handleLogoutClick = () => {
        TokenServices.clearAuthToken()
        TokenServices.clearUserId()
    }

    componentDidMount(){
        if(!this.props.match.params.userId){
            const userId = parseInt(TokenServices.getUserId())
                PostServices.getPostsByUser(userId)
                    .then(this.context.setPostList)
                    .catch(this.context.setError)
        } else{
            const userId = this.props.match.params.userId
            PostServices.getPostsByUser(userId)
                .then(this.context.setPostList)
                .catch(this.context.setError)
        }
    }

    render() {
        const user = parseInt(TokenServices.getUserId())
        console.log('user pg props on render:',this.props)
        return (
            <div className='wrapper'>
                <SideBar />
                <div className='container'>
                    <Link
                        to='/homepage'
                    >
                        <button>Home</button>
                    </Link>
                    <Link
                        to='/newPost'
                    >
                        <button>+ Post</button>
                    </Link>
                    <Link
                        to='/'
                        onClick={this.handleLogoutClick}>
                        <button>Logout</button>
                    </Link>
                </div>
                <div className='posts'>
                    <PostList user={user}/>
                </div>
            </div>
        )
    }
}