import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <Menu.Item>
            <Image src={require('./images/headshot.jpg')} />
            </Menu.Item>
            <Link to='/' className="item" >
                <i class="home icon"></i>
                Home
            </Link>
            <Link to='/FineArt' className="item">
                <i class="paint brush icon"></i>
                FineArt
            </Link>
            
            <Link to="/Development" className="item">
                <i class="computer icon"></i>
                Development
            </Link>
            <Link to="/Blogs" className="item">
                <i class="smile icon"></i>
                Blogs
            </Link>
            <Link to="/Resume" className="item">
                <i class="pencil icon"></i>
                Resume
            </Link>
        </div>
    )
}
