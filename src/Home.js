import React from 'react'
import { Segment, Grid, Header,Image, Icon } from 'semantic-ui-react'

export default function Home() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <div>
                            <Header as='h2' icon textAlign='center'>
                                <Image src={require('./images/profile/headshot.jpg')} size='medium' circular />
                                <Header.Content>Friends</Header.Content>
                            </Header>
                            <Image
                                centered
                                size='large'
                                src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
                            />
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Segment compact style={{ "width": "1850px", "height": "1700px", "background": 'black' }}>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            
            </Grid>
        </div>
    )
}