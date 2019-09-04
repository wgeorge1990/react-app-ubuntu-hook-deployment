import React from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'

export default function Development() {
    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    <Image src={require('./images/placeholders/image.png')} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Image src={require('./images/placeholders/paragraph.png')} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src={require('./images/placeholders/media-paragraph.png')} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src={require('./images/placeholders/image.png')} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Image src={require('./images/placeholders/paragraph.png')} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src={require('./images/placeholders/media-paragraph.png')} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src={require('./images/placeholders/image.png')} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Image src={require('./images/placeholders/paragraph.png')} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src={require('./images/placeholders/media-paragraph.png')} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src={require('./images/placeholders/image.png')} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Image src={require('./images/placeholders/paragraph.png')} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src={require('./images/placeholders/media-paragraph.png')} />
                </Grid.Column>
            </Grid>
        </div>
    )
}