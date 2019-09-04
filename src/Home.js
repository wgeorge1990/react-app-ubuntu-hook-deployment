import React from 'react'
import { Segment, Container, Image } from 'semantic-ui-react'
import SectionHeader from './SectionHeader'

export default function Home() {
    return (
        <div>
            <SectionHeader title={"Home"}/>
            <Segment style={{
                "width": "1850px", "height": "1700px", "background": 'gray' }}>home</Segment>
        </div>
    )
}