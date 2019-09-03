import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const SectionHeader = (props) => (
    <div>
        <Header as='h2' attached='top' textAlign="center">
            {props.title}
    </Header>
        <Segment attached>
           {props.blurb}
    </Segment>
    </div>
)

export default SectionHeader