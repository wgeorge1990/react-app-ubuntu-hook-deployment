import React from 'react'
import { Segment, Container, Grid } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf';
// import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {pdfjs} from 'react-pdf'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            <div style={{ 'height': '1700px' }}>
                <Document
                    file={require('./images/pdf/sampleResume.pdf')}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
             </div>
        )
    }
}
