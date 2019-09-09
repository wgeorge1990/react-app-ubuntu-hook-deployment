import React from 'react'

export default class Resume extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {

        const { pageNumber, numPages } = this.state;
        return (
        //    <Container style={{'width': '100%', 'height': '100%'}}>
            <div style={{ "background": "#ededeb", "height": "1700px"}}>
               
             </div>
        )
    }
}
