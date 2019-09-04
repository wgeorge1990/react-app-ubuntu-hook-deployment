import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import { Container, Grid, Segment } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import FineArt from './FineArt'
import Resume from './Resume'
import Development from './Development'
import Blogs from './Blogs'

function App() {
  return (
    // <Container fluid>
        <Grid  >
        <Grid.Row stretched>
          <Grid.Column  fluid width={2}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={14}>
            <Switch>
                <Route exact path='/' render={() => <Home /> } />
                <Route exact path='/FineArt' render={()=> <FineArt /> } />
                <Route exact path='/Development' render={() => <Development /> } />
                <Route exact path='/Blogs' render={() => <Blogs /> } />
                <Route exact path='/Resume' render={() => <Resume /> } />
            </Switch>  
          </Grid.Column>
          </Grid.Row>
        </Grid>
      // </Container>
  )
}
export default App;


