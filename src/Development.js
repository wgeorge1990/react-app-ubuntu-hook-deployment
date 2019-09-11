import React from 'react'
import { Image, Grid, Embed } from 'semantic-ui-react'
import '../node_modules/video-react/dist/video-react.css'
import { Player } from 'video-react';

export default function Development(props) {
    return (
        <Grid>
            <Grid.Column style={{ 'padding': '30px' }} width={4}>
                    <Image src={require('./images/projects/artshare/IMG_1229.PNG')} />
                </Grid.Column>
            <Grid.Column style={{ 'padding': '30px' }} width={6}>
                {/* <Image src={require('./images/placeholders/paragraph.png')} /> */}
            <a href='https://art-share-react.herokuapp.com/Login' ><h1 style={{ 'textAlign': 'center' }}>ArtShare</h1></a>
                <h4>Art Share is a full-stack single-page web application built for Artist of any level to showcase their work.
                Technologies used but not limited to include: React.js, Ruby on Rails, Postgresql for database, React-Router for navigation, React-Redux for centralized state management, Semantic-UI-React for visual styling, JWT encryption and Bcrypt for user Auth, Active storage and AWS s3 buckets for image storage.</h4>
                </Grid.Column>
            <Grid.Column style={{ 'padding': '30px' }} width={6}>
                    <Player ><source src="https://youtu.be/ouYpWxYLY4I" /></Player >
            </Grid.Column>
            <Grid.Column style={{ 'padding': '30px' }}  width={4}>
                <Image src={require('./images/projects/artshare/nasa-gallery.jpg.optimal.jpg')} />
            </Grid.Column>
            <Grid.Column style={{ 'padding': '30px' }} width={9}>
                {/* <Image src={require('./images/placeholders/paragraph.png')} /> */}
                <a href="https://space-picture-react.herokuapp.com/"><h1 style={{ 'textAlign': 'center' }}>SpacePicture</h1></a>
                <h4>SpacePicture was designed for a single purpose: To explore Nasa's incredible photography of outer space. This app takes in a specific month and year and then returns a photo for each day in that month by iterating through the month and fetching photos from the Nasa API. Each photo has a detailed descrition of the capture written by Nasa itself.
                </h4>
            </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }} width={3}>
                   <Embed width='100%'/>
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }}  width={4}>
                    <Image src={require('./images/projects/artshare/Dreamer-Child.jpg')} />
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }} width={9}>
                <a href='https://dreamer-board-react.herokuapp.com'><h1 style={{ 'textAlign': 'center' }}>DreamerBoard</h1></a>
                <h4>DreamerBoard is a playful app that allows users to search for images and then drag them onto a rearrangable board.</h4>
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }} width={3}>
                   <Embed width='100%'/>
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }}  width={4}>
                    <Image src={require('./images/placeholders/image.png')} />
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }} width={9}>
                    <Image src={require('./images/placeholders/paragraph.png')} />
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }} width={3}>
                   <Embed width='100%'/>
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }}  width={4}>
                    <Image src={require('./images/placeholders/image.png')} />
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }} width={9}>
                    <Image src={require('./images/placeholders/paragraph.png')} />
                </Grid.Column>
                <Grid.Column style={{ 'padding': '30px' }} width={3}>
                   <Embed width='100%'/>
                </Grid.Column>
               
            </Grid>
    )
}