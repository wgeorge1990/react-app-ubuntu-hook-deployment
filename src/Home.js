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
                                    <h3>Coding is my absolute unbridled passion - driving me to continue learning and growing. I am an experienced full stack Software Engineer with a demonstrated history of working in the higher education industry and a background in graphic design, metal working, and fine art. I am collaborative, creative, teachable, dependable, personable, passionate, and scrappy. I am driven to pursue excellence and I thrive on new challenges and experiences. </h3>
                                </Container>
                            </Grid.Column>
                        <Grid.Column width='2'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}