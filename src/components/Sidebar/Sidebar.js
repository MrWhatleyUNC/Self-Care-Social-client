import React, {Component} from 'react'

export default class Sidebar extends Component {
    render(){
        return(
            <div className='sidebar'>
                <h4>Tags</h4>
                <ul>
                    <li>tag 1</li>
                    <li>tag 2</li>
                    <li>tag 3</li>
                    <li>tag 4</li>
                </ul>
            </div>
        )
    }
}
