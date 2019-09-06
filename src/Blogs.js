import React from 'react'
import { Segment, Grid,Container } from 'semantic-ui-react'
import Iframe from 'react-iframe'

export default function Blogs() {
    return (
            <Grid>
                <Segment style={{ "width": "100%", "height": "1800px"}}>
                    <Iframe url="https://medium.com/@wgeorgedev"
                        height="1800px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        allowFullScreen
                         />
                </Segment>
            </Grid>

    )
}