import React from 'react'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'

export default function Home() {
    return (
            <Grid>
                <Grid.Row columns={1} >
                    <Grid.Column style={{ "background": "#ededeb", 'padding': '20px' }}>
                        <Image
                            src={require('./images/profile/IMG_1327.JPG')}
                            style={{'width': "10%"}}
                            circular
                            centered />
                    </Grid.Column>
                    <Grid.Column style={{ "background": "#ededeb" }}>
                        <Header as='h1' textAlign='center' >
                            <Header.Content>William George</Header.Content>
                            {/* <h3>Sofware Engineer, Graphic Artist, and life long learner</h3> */}
                            <Header.Subheader >Sofware Engineer, Graphic Artist, and life long learner</Header.Subheader>
                        </Header>
                       
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      
    )
}