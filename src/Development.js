import React from 'react'
import SectionHeader from './SectionHeader'
import { Segment, Image, Grid } from 'semantic-ui-react'
import ImagePlaceholder from './images/placeholders/image.png'
export default function Development() {
    return (
        <div>
            <SectionHeader title={"Development"} />
            {/* <Segment>Development</Segment> */}
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