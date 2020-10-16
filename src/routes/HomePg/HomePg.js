import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../components/Sidebar/Sidebar'
import TokenServices from '../../services/token-services'
import PostList from '../../components/Posts/PostList'

export default class HomePage extends Component {
    handleLogoutClick = ()=> {
        TokenServices.clearAuthToken()
        TokenServices.clearUserId()
    }

    render(){
        return(
            <div className='wrapper'>
                <SideBar/>
                <div className='container'>
                    <Link 
                        to= '/profile'
                        >
                        <button>Profile</button>
                    </Link>
                    <Link 
                        to='/'
                        onClick={this.handleLogoutClick}>
                        <button>Logout</button>
                    </Link>
                    <div className= 'posts'>
                        <PostList/>
                    </div>
                </div>
            </div>
        )
    }
}