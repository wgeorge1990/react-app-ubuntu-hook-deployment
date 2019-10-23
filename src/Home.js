import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

export default function Home() {
    return (
        <div>
            <Grid>
                <Grid.Row columns='3'>
                        <Grid.Column width='2'>
                            </Grid.Column>
                            <Grid.Column width='12'>
                                <Container fluid style={{ 'height': '1000px', 'textAlign': 'center' }}>
                            <h2>
                                I am a fullstack engineer and tech educator with a passion for problem-solving, creating fully functional RESTful web apps, learning about new technologies and how to apply them to real-world problems. I have a background in fine arts and discovered my love for programming through a computer science course I took while attending Maryland Institute College of Art.</h2>
                            <h2>
                                I am proficient in Javascript, React, CSS, HTML, Node.Js, Redux, Ruby, Ruby on Rails, AWS Lambda, API-gateway, AWS S3, AWS DynamoDB, Express, MongoDB, GoLang, Heroku, SQL, Postgres, P5.Js, pair programming, and semantic-UI. In addition to my technical skills, I bring strong skills in communication, team building, teaching, creativity, and collaboration.
                            </h2>
                                </Container>
                            </Grid.Column>
                        <Grid.Column width='2'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}