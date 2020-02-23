import React from 'react'
import { Container, Image, Card } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import paintbrushes from '../src/images/placeholders/paintbrushes.png'
import coding from '../src/images/placeholders/coding.jpg'
import resume from '../src/images/placeholders/resume.jpg'
import profile from '../src/images/placeholders/IMG_0180.jpeg'

export default function Home() {
    return (
        <Container fluid> 
                <Card.Group centered style={{'marginTop': '20px', 'marginBottom': '30px'}}>
                <Card>
                    <Link to='fineArt'>
                        <Image src={profile} style={{ 'background-size': 'contain'}}/>
                    </Link>
                        <Card.Content
                            style={{ 'text-align': 'center' }}
                            header='William George'
                            meta='Software Engineer and Artist'
                            description='Current Role: Sofware Engineer @ COX Auto Inc.'
                        />
                    </Card>
                <Card>
                    <Link to='resume'>
                        <Image src={resume} style={{ 'background-size': 'contain' }} />
                    </Link>
                        <Card.Content
                            style={{ 'text-align': 'center' }}
                            header='Resume'
                            meta='Notice: Resume needs to be updated and is missing current role.'
                        />
                </Card>

                
                <Card>
                    <Link to='fineArt'>
                        <Image src={paintbrushes} style={{ 'background-size': 'contain' }}/>
                    </Link>
                    <Card.Content
                        style={{ 'text-align': 'center' }}
                        header='Painting and Drawing'
                        meta=''
                        description='' />
                </Card>

                <Card>
                        <Link to='development'>
                            <Image src={coding} style={{ 'background-size': 'contain' }} />
                        </Link>
                        <Card.Content
                            style={{ 'text-align': 'center'}}
                            header='Hobby Development Projects '
                            meta='Tech includes: React, Node, Express, Rails, Ruby, Go and STD PKG, Ionic, and AWS'
                            description='Several projects I have worked on in my free time and pair programmed on with friends. Ive also contributed to several live codebases throughout my work as a professional developer.'
                        />
                    </Card>
                </Card.Group>
        </Container>
    )
}