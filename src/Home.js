import React from 'react'
import { Segment, Container, Image } from 'semantic-ui-react'
import SectionHeader from './SectionHeader'

export default function Home() {
    return (
        <div>
            <SectionHeader title={"Home"}/>
            <Segment>home</Segment>
        </div>
    )
}