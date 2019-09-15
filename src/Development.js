import React from 'react'
import { Image, Grid, Responsive, Container, Segment, Header } from 'semantic-ui-react'
import '../node_modules/video-react/dist/video-react.css'
import { Player } from 'video-react';


export default function Development(props) {

    let artShare = {
        title: "ArtShare",
        description: "Art Share is a full-stack single-page web application built for artists of any level to showcase their work. Technologies used but not limited to include: React.js, Ruby on Rails, Postgresql for database, React-Router for navigation, React-Redux for centralized state management, Semantic-UI-React for visual styling, JWT encryption and Bcrypt for user Auth, Active storage and AWS s3 buckets for image upload and storage.",
        image: require('./images/projects/artshare/IMG_1229.PNG'),
        video: require('./images/projects/artshare/artshareDemo720.mov'),
        liveLink: "https://art-share-react.herokuapp.com/Login"
    }

    let spacePicture = {
        title: "SpacePicture",
        description: "SpacePicture explore's Nasa's incredible photography of outer space. This app takes in a specific month and year and then returns a photo for each day in that month by iterating through the month and fetching photos from the Nasa API. Each photo has a title and a detailed descrition describing the capture. Technologies used include React, React Hooks, Semantic-ui-React, and a JSON server. I plan to add features and in doing so will use Express and MongoDB to handle the backend.",
        image: require('./images/projects/artshare/nasa-gallery.jpg.optimal.jpg'),
        video: "still need to record",
        liveLink: "https://space-picture-react.herokuapp.com/"
    }

    let DreamerBoard = {
        title: "DreamBoard",
        description: "DreamBoard is a playful app that allows users to search for images and then selected images to import into the interactive board. Once image has been added to board it can be rearranged and resized.",
        image: require("./images/projects/artshare/Dreamer-Child.jpg"),
        video: require('./images/projects/dreamBoard/DreamBoardSmall copy.mov'),
        liveLink: "https://dreamer-board-react.herokuapp.com"
    }

    let portfolio = {
        title: "Portfolio",
        description: "",
        image: "require()",
        video: 'still need video',
        liveLink: 'https://wgeorgedev.com'
    }

    return (
            <div className="development-responsive">
                <Responsive as={Container} fluid minWidth={901}>
                <Grid>
                    <Segment placeholder >
                        <Grid columns={3} textAlign='center'>
                        <Grid.Column width={4} >
                            <Image src={artShare.image} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <h1 style={{ 'textAlign': 'center' }}>{artShare.title}</h1>
                            <h4>{artShare.description}</h4>
                            <a style={{ 'textAlign': 'center' }} href={artShare.liveLink} >
                                <h3>Live Project Link</h3>
                            </a>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Player ><source src={artShare.video} /></Player >
                            </Grid.Column>
                            </Grid>
                    </Segment>
                    
                    <Segment placeholder >
                        <Grid columns={3} textAlign='center'>
                         <Grid.Column width={4}>
                            <Image src={DreamerBoard.image} />
                        </Grid.Column>   
                       
                            
                        <Grid.Column width={6}>
                        <h1 style={{ 'textAlign': 'center' }}>{DreamerBoard.title}</h1>
                        <h4>{DreamerBoard.description}</h4>
                        <a style={{ 'textAlign': 'center' }} href={DreamerBoard.liveLink} > <h3>Live Project Link</h3></a>
                            </Grid.Column>
                         <Grid.Column width={6}>
                            <Player ><source src={DreamerBoard.video} /></Player >
                            </Grid.Column>    
                        
                        </Grid>
                    </Segment>
                    
                    <Segment placeholder >
                        <Grid columns={3} textAlign='center'>

                        <Grid.Column  width={4}>
                            <Image src={spacePicture.image} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <h1 style={{ 'textAlign': 'center' }}>{spacePicture.title}</h1>
                        <h4>{spacePicture.description}</h4>
                        <a style={{ 'textAlign': 'center' }} href={spacePicture.liveLink} > <h3>Live Project Link</h3></a>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Player ><source src={null} /></Player >
                            </Grid.Column>
                        </Grid>

                        </Segment>
                        <Grid.Column  width={4}>
                            <Image src={require('./images/placeholders/image.png')} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Image src={require('./images/placeholders/paragraph.png')} />
                        </Grid.Column>
                       <Grid.Column width={6}>
                            <Player ><source src={null} /></Player >
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
                                <Image src={artShare.image} />
                                
                            </Grid.Column>
                            <Grid.Column>
                                <Header>
                                   Description
                                </Header>
                                <h4>{artShare.description}</h4>
                                <a style={{ "textAlign": "center" }} href={artShare.liveLink} >Live Project Link</a>
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
                                    {DreamerBoard.title}
                                </Header>
                                <Image src={DreamerBoard.image} />
                                <a href={DreamerBoard.liveLink} >Live Project Link</a>
                            </Grid.Column>
                            <Grid.Column>
                                <Header>
                                    Description
                                </Header>
                                <h4>{DreamerBoard.description}</h4>
                                <a style={{ "textAlign": "center" }} href={DreamerBoard.liveLink} >Live Project Link</a>
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
                                <Image src={spacePicture.image} />
                                <a href={spacePicture.liveLink} >Live Project Link</a>
                            </Grid.Column>
                            <Grid.Column>
                                <Header>
                                    Description
                                </Header>
                                <h4>{spacePicture.description}</h4>
                                <a style={{ "textAlign": "center" }} href={spacePicture.liveLink} >Live Project Link</a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Responsive>

            <Responsive as={Container} style={{ 'width': '100%' }} maxWidth={400}>
                <Segment placeholder >
                    <Grid columns={1} textAlign='center'>

                    </Grid>
                </Segment>
            </Responsive>
            </div>
    )
}