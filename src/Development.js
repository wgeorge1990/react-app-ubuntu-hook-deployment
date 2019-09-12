import React from 'react'
import { Image, Grid, Embed, Responsive, Container, Segment, Header, Divider } from 'semantic-ui-react'
import '../node_modules/video-react/dist/video-react.css'
import { Player } from 'video-react';
//Need to figure out how to get links to dropbox videos to work with player


export default function Development(props) {
    return (
            <div className="development-responsive">
                <Responsive as={Container} fluid minWidth={901}>
                    Visible only if display has <code>768px</code> width and higher
                    <Grid>
                        <Grid.Column width={4}>
                                <Image src={require('./images/projects/artshare/IMG_1229.PNG')} />
                            </Grid.Column>
                        <Grid.Column width={6}>
                        <a href='https://art-share-react.herokuapp.com/Login' ><h1 style={{ 'textAlign': 'center' }}>ArtShare</h1></a>
                            <h4>Art Share is a full-stack single-page web application built for Artist of any level to showcase their work.
                            Technologies used but not limited to include: React.js, Ruby on Rails, Postgresql for database, React-Router for navigation, React-Redux for centralized state management, Semantic-UI-React for visual styling, JWT encryption and Bcrypt for user Auth, Active storage and AWS s3 buckets for image storage.</h4>
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <Player ><source src={require('./images/projects/artshare/artshareDemo720.mov')} /></Player >
                        </Grid.Column>

                        <Grid.Column  width={4}>
                        <Image src={require('./images/projects/artshare/nasa-gallery.jpg.optimal.jpg')} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <a href="https://space-picture-react.herokuapp.com/"><h1 style={{ 'textAlign': 'center' }}>SpacePicture</h1></a>
                        <h4>SpacePicture was designed for a single purpose: To explore Nasa's incredible photography of outer space. This app takes in a specific month and year and then returns a photo for each day in that month by iterating through the month and fetching photos from the Nasa API. Each photo has a detailed descrition of the capture written by Nasa itself.
                        </h4>
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <Player ><source src={require('./images/projects/artshare/artshareDemo720.mov')} /></Player >
                        </Grid.Column>
                    
                        <Grid.Column  width={4}>
                            <Image src={require('./images/projects/artshare/Dreamer-Child.jpg')} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <a href='https://dreamer-board-react.herokuapp.com'><h1 style={{ 'textAlign': 'center' }}>DreamerBoard</h1></a>
                        <h4>DreamerBoard is a playful app that allows users to search for images and then drag them onto a rearrangable board.</h4>
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <Embed width='100%'/>
                        </Grid.Column>
                    
                        <Grid.Column  width={4}>
                            <Image src={require('./images/placeholders/image.png')} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Image src={require('./images/placeholders/paragraph.png')} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <Embed width='100%'/>
                        </Grid.Column>
                    
                    </Grid>
                </Responsive>
                {/* Second responsive handles smaller screens */}
                <Responsive as={Container} style={{'width': '100%'}} maxWidth={900}>
                    <Segment placeholder >
                    <Grid columns={2}  textAlign='center'>
                        {/* <Divider vertical></Divider> */}
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header >
                                   ArtShare
                                </Header>
                                <Image src={require('./images/projects/artshare/IMG_1229.PNG')} />
                                <a href='https://art-share-react.herokuapp.com/Login' >Live Project Link</a>
                            </Grid.Column>
                            <Grid.Column>
                                <Header>
                                   Description
                                </Header>
                                <h4>Art Share is a full-stack single-page web application built for Artist of any level to showcase their work.
                            Technologies used but not limited to include: React.js, Ruby on Rails, Postgresql for database, React-Router for navigation, React-Redux for centralized state management, Semantic-UI-React for visual styling, JWT encryption and Bcrypt for user Auth, Active storage and AWS s3 buckets for image storage.</h4>
                                <h3>Technologies</h3>
                                <h4>Ruby, Rails, ReactJs, Redux, Router, aws, s3 buckets, JWT, Active record storage</h4>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment placeholder >
                    <Grid columns={2} textAlign='center'>
                        {/* <Divider vertical></Divider> */}
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header >
                                    SpacePicture
                                </Header>
                                <Image src={require('./images/projects/artshare/nasa-gallery.jpg.optimal.jpg')} />
                                <a href='https://space-picture-react.herokuapp.com/' >Live Project Link</a>
                            </Grid.Column>
                            <Grid.Column>
                                <Header>
                                    Description
                                </Header>
                                <h4>SpacePicture was designed for a single purpose: To explore Nasa's incredible photography of outer space. This app takes in a specific month and year and then returns a photo for each day in that month by iterating through the month and fetching photos from the Nasa API. Each photo has a detailed descrition of the capture written by Nasa itself.</h4>
                                <h3>Technologies</h3>
                                <h4>Ruby, Rails, ReactJs, Redux, Router, aws, s3 buckets, JWT, Active record storage</h4>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                </Responsive>
            </div>
    )
}