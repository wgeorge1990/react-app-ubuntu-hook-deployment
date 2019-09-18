import React from 'react'
import {Image, Container} from 'semantic-ui-react'

export default class Resume extends React.Component {

    render() {
        return (
        //    <Container style={{'width': '100%', 'height': '100%'}}>
            <Container>
                <Image fluid src={require('./images/pdf/WGResume.jpg')}></Image>
            </Container>
        )
    }
}
