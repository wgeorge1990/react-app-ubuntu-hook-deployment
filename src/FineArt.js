import React from 'react'
import { Image, Grid, Container } from 'semantic-ui-react'
import Lightbox from './Lightbox'

export default class FineArt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (

            <Grid >
                <Grid.Row columns={1} centered>
                    <Grid.Column>
                        <Container>
                            <Lightbox />
                        </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/fineart/1.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/4.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/3.jpg')} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/fineart/2.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/7.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/9.jpg')} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/fineart/10.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/11.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/6.jpg')} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/fineart/13.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/12.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/15.jpg')} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/fineart/5.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/8.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/fineart/14.jpg')} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
        )
    }
}