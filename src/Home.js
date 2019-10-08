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
                            <h2>Passionate Fullstack Engineer and technical educator proficient in Ruby on Rails, Javascript, React, Redux, JWT, Node.Js, Express, MongoDB, Go, Heroku, relational and non-relational databases, pair programming, and learning from documentation. I have a passion for problem-solving, creating fully functional RESTful web apps, learning new technologies, and how to apply them to real-world problems. I discovered my love for programming through a computer science course I took while attending Maryland Institute College of Art and have been learning to build applications ever since. In addition to my technical skills, I bring strong skills in communication, team building, teaching, creativity, and collaboration.</h2>
                                </Container>
                            </Grid.Column>
                        <Grid.Column width='2'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}