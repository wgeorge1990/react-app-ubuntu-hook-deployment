import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
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

  hideOnMouseLeave = () => this.setState({ visible: !this.state.visible }) 

  showSideBar = () => this.setState({ visible: !this.state.visible }) 
  
  componentDidMount = () => {
    console.log(this.props.windowWidth, this.props.windowHeight)
    if (this.props.windowWidth < 769) {
      this.setState({sidebarSize: 'mini'})
    } 
  }

  showMenuForMobile = () => {
    this.state.visible ?
      this.setState({ visible: false, buttonText: "Show Menu" }) :
      this.setState({ visible: true, buttonText: "Hide Menu" })
  }
  
  mobileMenuButton = () => (
      this.props.windowWidth < 769 ?
        <div style={{ "marginTop": 7 + 'px', "marginBottom": "-10px" }}>
          <Button icon
            onClick={this.showMenuForMobile}
            style={{ "margin": 2 + 'px' }} >
            <Icon name='bars' />
          </Button>
        </div> : null 
  )

  sidebarMenuItems = (array) => (
    array.map(o => {
      return (
        <Menu.Item>
          <div>
              <Button circular color={o.colorName} icon={o.iconName} />
          </div>
        </Menu.Item>
      )
    })
  )

  socialMediaIcons = [
    { colorName: 'twitter', iconName: 'twitter', link: 'www.twitter.com/wgeorgedev' },
    { colorName: 'linkedin', iconName: 'linkedin' },
    { colorName: 'google plus', iconName: 'mail' },
    { colorName: 'purple', iconName: 'github' },
    { colorName: 'grey', iconName: 'medium'}
  ]
  
  render() {
    const { animation, dimmed, direction, visible } = this.state
    return (
      <Container
        style={{ "width": "100%" }}
        onMouseLeave={this.showSideBar} >
        
        {this.mobileMenuButton()}

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
            size={this.state.sidebarSize} >
            
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

            {this.sidebarMenuItems(this.socialMediaIcons)}

          </Sidebar>
          
          <Sidebar.Pusher dimmed={dimmed && visible}>
            {/* <Segment basic > */}
              <Switch>
                 <Route exact path='/' render={() => <Home /> } />
                 <Route exact path='/FineArt' render={()=> <FineArt /> } />
                 <Route exact path='/Development' render={() => <Development /> } />
                 <Route exact path='/Blogs' render={() => <Blogs /> } />
                 <Route exact path='/Resume' render={() => <Resume /> } />
              </Switch> 
            {/* </Segment> */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    )
  }
}

export default windowSize(App)