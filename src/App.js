import React, { Component } from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { Image, Menu, Sidebar, Button, Container, Icon,  Grid, Header } from 'semantic-ui-react'
import windowSize from 'react-window-size';

import Home from './Home'
import FineArt from './FineArt'
import Resume from './Resume'
import Development from './Development'

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
      <Container style={{ 'width': '100%' }}>
    
        <Menu fluid widths={3}>
          <Menu.Item onClick={this.toggleMenu}>
            <Icon name='bars' />
          </Menu.Item>
          <Menu.Item onClick={this.back}>
            <Icon name='arrow circle left' />
          </Menu.Item>
          <Menu.Item onClick={this.forward}>
            <Icon name='arrow circle right' />
          </Menu.Item>
        </Menu>
        

        <Sidebar.Pushable as={Container} fluid>
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
                  src={require('./images/profile/IMG_1327.JPG')}
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
  
            <Link
              to="/Resume"
              className="item"
              onClick={this.toggleMenu} >
              <i className="pencil icon"></i>
              Resume
            </Link>

            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href='https://github.com/wgeorge1990'>
                <Button
                  circular
                  color="purple"
                  icon="github"
                />
              </a>
            </Menu.Item>

            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.linkedin.com/in/wgdevelopment/'>
                <Button
                  circular
                  color="linkedin"
                  icon="linkedin"
                />
              </a>
            </Menu.Item>

            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href='https://medium.com/@wgeorgedev'>
                <Button
                  circular
                  color="grey"
                  icon="medium"
                />
              </a>
            </Menu.Item>
            
            <Menu.Item>
              <a
                href="mailto:wgeorgedev@gmail.com">
                <Button
                  circular
                  color="google plus"
                  icon="mail"
                />
              </a>
            </Menu.Item>
           
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/WGeorgeDev">
                <Button
                  circular
                  color="twitter"
                  icon="twitter"
                  />
                </a>
            </Menu.Item>
          </Sidebar>
          
          <Sidebar.Pusher dimmed={dimmed && visible} >
            <Grid>
              <Grid>
                <Grid.Row columns={1} >
                  <Grid.Column style={{ 'padding': '20px' }}>
                    <Image
                      src={require('./images/profile/IMG_1327.JPG')}
                      style={{ 'width': "10%" }}
                      circular
                      centered />
                  </Grid.Column>
                  <Grid.Column style={{}}>
                    <Header as='h1' textAlign='center' >
                      <Header.Content>William George</Header.Content>
                      {/* <h3>Sofware Engineer, Graphic Artist, and life long learner</h3> */}
                      <Header.Subheader >Sofware Engineer, Graphic Artist, and life long learner</Header.Subheader>
                    </Header>

                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid.Row stretched>
                <Grid.Column width={1} style={{}}>
                  
                </Grid.Column>
                <Grid.Column width={14}>
                  <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/FineArt' render={() => <FineArt />} />
                    <Route exact path='/Development' render={() => <Development />} />
                    {/* <Route exact path='/Blogs' render={() => <Blogs />} /> */}
                    <Route exact path='/Resume' render={() => <Resume />} />
                  </Switch> 
                </Grid.Column>
                <Grid.Column width={1} style={{ }}> 

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