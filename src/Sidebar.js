import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Image } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div
            className="ui left visible demo vertical inverted sidebar labeled icon menu"
            style={{ "display": "flex", "width": "190px" }}>
            <a>
                <Image src={require('./images/headshot.jpg')} />
                {/* <Image src={process.env.PUBLIC_URL + '/headshot.jpg'} /> */}
            </a>
            <a class="item">
                <i class="home icon"></i>
                Home
          </a>
            <a class="item">
                <i class="block layout icon"></i>
                Topics
          </a>
            <a class="item">
                <i class="smile icon"></i>
                Friends
          </a>
        </div>
    )
}
