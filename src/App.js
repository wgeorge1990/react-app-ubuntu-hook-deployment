import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import Home from './Home'
import FineArt from './FineArt'
import Resume from './Resume'
import Development from './Development'
import Blogs from './Blogs'

class MainSideBarWithTransition extends Component {
  state = {
    animation: 'scale down',
    direction: 'left',
    dimmed: false,
    visible: true,
  }
  //add comments
  handleAnimationChange = () =>
    this.setState(({ visible: !this.state.visible }))
  
  render() {
    const { animation, dimmed, direction, visible } = this.state
    return (
      <div>
        {this.state.visible ? null : <Button onClick={this.handleAnimationChange}>Toggle Menu</Button>}
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation={animation}
            direction={direction}
            icon='labeled'
            inverted
            vertical
            visible={visible}
            width='thin' >
              <Image
              src={require('./images/headshot.jpg')}
              onClick={this.handleAnimationChange}
              />

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
          </Sidebar>
)
          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
               <Switch>
                 <Route exact path='/' render={() => <Home /> } />
                 <Route exact path='/FineArt' render={()=> <FineArt /> } />
                 <Route exact path='/Development' render={() => <Development /> } />
                 <Route exact path='/Blogs' render={() => <Blogs /> } />
                 <Route exact path='/Resume' render={() => <Resume /> } />
              </Switch> 
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default MainSideBarWithTransition


