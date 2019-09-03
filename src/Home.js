import React from 'react'
import { Segment } from 'semantic-ui-react'
import SectionHeader from './SectionHeader'

export default function Home() {
    return (
        <div>
            <SectionHeader title={"Home"}/>
            <Segment>home</Segment>
            <Segment>home</Segment>
            <Segment>home</Segment>
        </div>
    )
}