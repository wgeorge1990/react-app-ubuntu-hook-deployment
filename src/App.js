import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Image, Menu, Segment, Sidebar, } from 'semantic-ui-react'
//Components for each section of portfolio
import Home from './Home'
import FineArt from './FineArt'
import Resume from './Resume'
import Development from './Development'
import Blogs from './Blogs'


const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Image
      src={require('./images/headshot.jpg')}
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

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}


export default class SidebarExampleTransitions extends Component {
  state = {
    animation: 'scale down',
    direction: 'left',
    dimmed: false,
    visible: true,
  }

  handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = (direction) => () =>
    this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
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



