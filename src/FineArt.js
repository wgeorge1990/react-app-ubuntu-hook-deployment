import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import Painting from './images/21687641_1968699810012389_8484969430566241036_n_1968699810012389.jpg'
import SectionHeader from './SectionHeader'

export default function FineArt() {
    return (
        <div>
            <SectionHeader title={"Fine Art"} />
            <Image src={Painting}></Image>
            <Segment>FineArt</Segment>
            <Segment>FineArt</Segment>
            <Segment>FineArt</Segment>
        </div>
    )
}