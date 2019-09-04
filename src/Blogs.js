import React from 'react'
import { Segment } from 'semantic-ui-react'
import SectionHeader from './SectionHeader'

export default function Blogs(props) {
    return (
        <div>
            <SectionHeader
                title={"Blogs"}
                blurb={"This is where i will fetch and feed in all of my personal blogs about art, technology, development, and life"}/>
            <Segment>Blogs</Segment>
        </div>
    )
}