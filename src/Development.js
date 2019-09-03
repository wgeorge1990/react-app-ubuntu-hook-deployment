import React from 'react'
import SectionHeader from './SectionHeader'
import { Segment, Image } from 'semantic-ui-react'
import Painting from './images/1175202_1413042242244818_558836933_n_1413042242244818.jpg'

export default function Development() {
    return (
        <div>
            <SectionHeader title={"Development"} />
            <Image src={Painting} />
            <Segment>Development</Segment>
            <Segment>Development</Segment>
            <Segment>Development</Segment>
        </div>
    )
}