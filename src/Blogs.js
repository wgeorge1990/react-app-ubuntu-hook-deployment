import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Iframe from 'react-iframe'

export default function Blogs(props) {
    return (
        <div>
            <Grid>
                <Segment style={{ "width": "1850px", "height": "1700px", "background": 'black' }}>
                    <Iframe url="https://medium.com/@wgeorgedev"
                        width="100%"
                        height="100%"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </Segment>
            </Grid>
        </div>
    )
}