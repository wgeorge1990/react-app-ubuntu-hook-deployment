import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { Image, Menu, Segment, Sidebar, Button, Container, Icon } from 'semantic-ui-react'
import windowSize from 'react-window-size';

import Home from './Home'
import FineArt from './FineArt'
import Resume from './Resume'
import Development from './Development'
import Blogs from './Blogs'

class App extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: true,
    buttonText: "Hide Menu",
    sidebarSize: 'small'
  }

  hideOnMouseLeave = () => { this.setState({ visible: !this.state.visible }) }

  showSideBar = () => { this.setState({ visible: !this.state.visible }) }
  
  componentDidMount = () => {
    console.log(this.props.windowWidth, this.props.windowHeight)
    fetch("/testAPI")
      .then(res => res.json())
      .then(res => console.log(res.express))
    if (this.props.windowWidth < 769) {
      this.setState({sidebarSize: 'very tiny'})
    } 
  }

  showMenuForMobile = () => {
    if (this.state.visible) {
      this.setState({visible: false, buttonText: "Show Menu"})
    } else {
      this.setState({ visible: true, buttonText: "Hide Menu" })
    }
  }
    
  render() {
    const { animation, dimmed, direction, visible } = this.state
    return (
      <Container
        style={{ "width": "99%" }}
        onMouseLeave={this.showSideBar}
      >
        {this.props.windowWidth < 769 ? 
          <div style={{ "margin-top": 7 + 'px', "margin-bottom": "-10px" }}>
            <Button.Group basic>
              <Button icon
                onClick={this.showMenuForMobile}
                style={{"margin": 2 + 'px'}}
              >
              <Icon name='bars' />
              </Button>
              {/* <Button>Two</Button>
              <Button>Three</Button> */}
            </Button.Group>
          </div> : null} 
        
        {/* {this.state.visible ? null : <Button onClick={this.hideOnMouseLeave}>Toggle Menu</Button>} */}
        <Sidebar.Pushable as={Segment} >
          <Sidebar
            onMouseLeave={this.hideOnMouseLeave}
            style={{ "padding": "10px" }}
            as={Menu}
            animation={animation }
            direction={direction}
            icon='labeled'
            inverted
            vertical
            visible={visible}
            size={this.state.sidebarSize}
          >
            
              <Image
              src={require('./images/profile/headshot.jpg')}
              onClick={this.hideOnMouseLeave} />
        
            <Link to='/' className="item" >
              <i className="home icon"></i>
                Home
            </Link>

            <Link to='/FineArt' className="item">
              <i className="paint brush icon"></i>
              FineArt
            </Link>

            <Link to="/Development" className="item">
              <i className="computer icon"></i>
              Development
            </Link>
          
            <Link to="/Blogs" className="item">
              <i className="smile icon"></i>
              Blogs
            </Link>

            <Link to="/Resume" className="item">
              <i className="pencil icon"></i>
              Resume
            </Link>
          </Sidebar>
          
          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic
              >
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
      </Container>
    )
  }
}

export default windowSize(App)