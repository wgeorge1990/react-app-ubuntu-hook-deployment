import React from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'
import SectionHeader from './SectionHeader'
import ImagePlaceholder from './images/placeholders/image.png'

export default function FineArt() {
    return (
        <div>
            <SectionHeader title={"Fine Art"} />
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/1.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/4.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/3.jpg')} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/2.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/7.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/9.jpg')} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src={require('./images/5.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/8.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={require('./images/6.jpg')} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}