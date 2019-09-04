import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const SectionHeader = (props) => (
    <div>
        <Header as='h1' attached='top' textAlign="center">
            {props.title}
        </Header>

    </div>
)

export default SectionHeader