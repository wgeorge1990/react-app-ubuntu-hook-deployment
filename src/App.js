import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Image, Menu, Segment, Sidebar, Button, Container, Icon,  Grid } from 'semantic-ui-react'
import windowSize from 'react-window-size';
import {withRouter} from 'react-router'

import Home from './Home'
import FineArt from './FineArt'
import Resume from './Resume'
import Development from './Development'
import Blogs from './Blogs'
import { tsImportEqualsDeclaration } from '@babel/types';

class App extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: true,
    buttonText: "Hide Menu",
    sidebarSize: 'small'
  }

  toggleMenu = () => this.setState({ visible: !this.state.visible }) 

  showSideBar = () => this.setState({ visible: !this.state.visible }) 
  
  componentDidMount = () => {
    console.log(this.props.windowWidth, this.props.windowHeight)
    if (this.props.windowWidth < 769) {
      this.setState({sidebarSize: 'mini'})
    } 
  }

  back = () => {
    console.log(this.props.history)
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  render() {
    const { animation, dimmed, direction, visible } = this.state
    return (
      <Container
        style={{ "width": "100%" }}
        >
        <div style={{ "marginTop": 7 + 'px', "marginBottom": "-10px" }}>
          <Button icon
            onClick={this.toggleMenu}
            style={{ "margin": 2 + 'px' }} >
            <Icon name='bars' />
          </Button>
          <Button icon
            onClick={this.back}
            style={{ "margin": 2 + 'px' }} >
            <Icon name='arrow circle left' />
          </Button>
          <Button icon
            onClick={this.forward}
            style={{ "margin": 2 + 'px' }} >
            <Icon name='arrow circle right' />
          </Button>
        </div>

        <Sidebar.Pushable as={Segment} >
          <Sidebar
            // onMouseLeave={this.toggleMenu}
            style={{ "padding": "10px" }}
            as={Menu}
            animation={animation }
            direction={direction}
            icon='labeled'
            inverted
            vertical
            visible={visible}
            size={this.state.sidebarSize} >
            
            <Menu.Item>
              <Link to="/" >
                <Image
                  centered
                  circular
                  size='mini'
                  src={require('./images/profile/headshot.jpg')}
                      onClick={this.toggleMenu} />
              </Link>
            </Menu.Item>

            <Link
              to='/FineArt'
              className="item"
              onClick={this.toggleMenu}>
              <i className="paint brush icon"></i>
              FineArt
            </Link>

            <Link
              to="/Development"
              className="item"
              onClick={this.toggleMenu} >
              <i className="computer icon"></i>
              Development
            </Link>
          
            {/* <Link
              to="/Blogs"
              className="item"
              onClick={this.toggleMenu} >
              <i className="smile icon"></i>
              Blogs
            </Link> */}

            <Link
              to="/Resume"
              className="item"
              onClick={this.toggleMenu} >
              <i className="pencil icon"></i>
              Resume
            </Link>

            <Menu.Item>
              <div>
                <Button
                  circular
                  color="purple"
                  icon="github"
                />
              </div>
            </Menu.Item>

            <Menu.Item>
              <div>
                <Button
                  circular
                  color="linkedin"
                  icon="linkedin"
                />
              </div>
            </Menu.Item>

            <Menu.Item>
              <div>
                <Button
                  circular
                  color="grey"
                  icon="medium"
                />
              </div>
            </Menu.Item>
            
            <Menu.Item>
              <div>
                <Button
                  circular
                  color="google plus"
                  icon="mail"
                  />
              </div>
            </Menu.Item>
           
            <Menu.Item>
              <div>
                <Button
                  circular
                  color="twitter"
                  icon="twitter"
                  />
              </div>
            </Menu.Item>
          </Sidebar>
          
          <Sidebar.Pusher dimmed={dimmed && visible} >
            <Grid>
              <Grid.Row stretched>
                <Grid.Column width={1}>
                  
                </Grid.Column>
                <Grid.Column width={14}>
                  <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/FineArt' render={() => <FineArt />} />
                    <Route exact path='/Development' render={() => <Development />} />
                    {/* <Route exact path='/Blogs' render={() => <Blogs />} /> */}
                    <Route exact path='/Resume' render={() => <Resume />} />
                    <Route exact path='twitter' render={() => <Redirect to='twitter.com/wgeorgedev' />} />
                  </Switch> 
                </Grid.Column>
                <Grid.Column width={1}> 

                </Grid.Column>
              </Grid.Row>
          </Grid>

             
            
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    )
  }
}

export default withRouter(windowSize(App))