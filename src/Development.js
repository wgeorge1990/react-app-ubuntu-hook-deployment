import React from 'react'
import { Image, Grid, Responsive, Container, Segment, Header } from 'semantic-ui-react'
import '../node_modules/video-react/dist/video-react.css'
import { Player } from 'video-react';


export default function Development(props) {

    let artShare = {
        title: "ArtShare",
        // description: "Art Share is a full-stack single-page web application built for artists of any level to showcase their work. Technologies used but not limited to include: React.js, Ruby on Rails, Postgresql for database, React-Router for navigation, React-Redux for centralized state management, Semantic-UI-React for visual styling, JWT encryption and Bcrypt for user Auth, Active storage and AWS s3 buckets for image upload and storage. Application currently under development.",
        description: "Created a single-page web application that allows users to share their work with the world. Utilized knowledge of Rails API to create a RESTful server that persists user data to a Postgres database. Implemented image upload in application’s backend by integrating Rails Active Storage and Amazon S3 buckets. Decreased potential security threats from hackers by implementing JWT Authentication. Utilized: Git; Ruby; Rails; Active Storage; React; Redux; Router; Heroku; Amazon S3; Travis CI; JWT;",
        image: require('./images/projects/artshare/IMG_1229.PNG'),
        video: require('./images/projects/artshare/artshareDemo.mp4'),
        liveLink: "https://art-share-react.herokuapp.com/Login"
    }

    let spacePicture = {
        title: "SpacePicture",
        // description: "SpacePicture creates a channel for users to experience Nasa's incredible photography of outer space. This app takes in a specific month and year and then returns a photo for each day in that month by iterating through the month and fetching photos from the Nasa API. Each photo has a title and a detailed description describing the capture. Technologies used include React, React Hooks, Semantic-ui-React, and a JSON server. I plan to add features and in doing so will use Express and MongoDB to handle the backend. Application is currently under development.",
        description: "Developed single page web application that allows users to explore Nasa large photography collection based on year and month. Implemented React Hooks and functional components to optimize applications performance. Applied knowledge of Api's to fetch JSON objects from Nasa and render their images attributes to React's virtual DOM. Utilized: JavaScript; React; React Hooks; JSON; Semantic UI; Node.js; Git",
        image: require('./images/projects/artshare/nasa-gallery.jpg.optimal.jpg'),
        video: require('./images/projects/spacepictures/Nasa.mp4'),
        liveLink: "https://space-picture-react.herokuapp.com/"
    }

    let DreamerBoard = {
        title: "DreamBoard",
        // description: "DreamBoard is a playful app that allows users to search for images and then selected images to import into the interactive board. Once image has been added to board it can be rearranged and resized. Application is currently under development.",
        description: "Developed web app that allows users to create image collages by utilizing a library called React-Grid-Layout. Every new year my father and I would create a collage and call it a dream board.They represented the things we wished for in the new year.This application is directly inspired from this tradition. Utilized: JavaScript; React; Router; Redux; Node.js; React-Grid-Layout; Semantic UI React; Unsplash-API;",
        image: require("./images/projects/artshare/Dreamer-Child.jpg"),
        video: require('./images/projects/dreamBoard/DreamBoardBestVersion.mov'),
        liveLink: "https://dreamer-board-react.herokuapp.com"
    }

    let portfolio = {
        title: "Portfolio",
        // description: "My portfolio app is a one stop shop on me. Here viewers can find my ongoing development projects, my fine art, my resume, links to my Github, Linkedin, Email, and Medium account. The application itself is built with React,React Router, and several other libraries. It is being hosted on my personal Linux system droplet through DigitalOcean. I have configured automatic redeployment using webhooks written in Go, Nginx server, and custom written scripts. When I push a change from my local project to it's Github master, webhooks trigger and start a pull and rebuild on Linux Server which then hosts the build file through my custom domain that is registered to my servers Ip Address. I have built the app responsively for desktops, ipads/ medium touch screens, and phones. Application is currently under development.",
        description: "Developed a responsive single-page web application designed to showcase personal development projects, fine art, and resume. Applied knowledge of cloud servers to deploy application on DigitalOcean droplet using Nginx server and production build folder of React project. Integrated web- hooks and bash scripts to implement continuous integration on a Linux server. Utilized: JavaScript programming; React; Router; Webhooks; Linux; Nginx; bash; Ubuntu 18.04 ; Semantic Ui React; Git;",
        image: require('./images/projects/portfolio/maxresdefault.jpg'),
        video: require('./images/projects/portfolio/PortfolioDemo720.mov'),
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
                                <Player ><source src={spacePicture.video} /></Player >
                                </Grid.Column>
                            </Grid>
                        </Segment>
                        
                        <Segment placeholder >
                            <Grid columns={3} textAlign='center'>
                                <Grid.Column  width={4}>
                                    <Image src={portfolio.image} fluid/>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <h1 style={{ 'textAlign': 'center' }}>{portfolio.title}</h1>
                                    <h4>{portfolio.description}</h4>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Player ><source src={portfolio.video} /></Player >
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Grid>
                </Responsive>
                
                    {/* Second responsive handles smaller screens */}
                <Responsive as={Container} style={{ 'width': '100%' }} minWidth={551} maxWidth={900}>
                        <Segment placeholder >
                        <Grid columns={2}  divided textAlign='center'>
                            {/* <Divider vertical></Divider> */}
                            <Grid.Row verticalAlign='middle' stretched>
                                <Grid.Column width='5'>
                                    <Header >
                                    ArtShare
                                    </Header>
                                    <Image src={artShare.image} />
                                </Grid.Column>
                                <Grid.Column width='11'>
                                    <Segment><Header>
                                        Description
                                    </Header>
                                        <h4>{artShare.description}</h4>
                                        <a style={{ "textAlign": "center" }} href={artShare.liveLink} >Live Project Link</a></Segment>
                                    <Segment>
                                        <Player ><source src={artShare.video} /></Player >
                                    </Segment>
                                    
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

                    <Segment placeholder >
                        <Grid columns={2} textAlign='center'>
                            {/* <Divider vertical></Divider> */}
                            <Grid.Row verticalAlign='middle'>
                                <Grid.Column>
                                    <Header >
                                        SpacePicture
                                    </Header>
                                    <Image src={portfolio.image} />
                                    <h5>You are currently on live site.</h5>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header>
                                        Description
                                    </Header>
                                    <h4>{portfolio.description}</h4>
                                    <a style={{ "textAlign": "center" }} href={portfolio.liveLink} >Live Project Link</a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Responsive>

                <Responsive as={Container} style={{ 'width': '100%' }} maxWidth={550}>
                    <Segment placeholder >
                        <Grid columns={1} textAlign='center'>
                            Cell phone responsiveness for development section is on its way. In the meantime rotate your phone display or use a device with a wider screen. Thank you.
                        </Grid>
                    </Segment>
                </Responsive>
            </div>
    )
}