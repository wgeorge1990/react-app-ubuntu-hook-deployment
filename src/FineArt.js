import React from 'react'
import { Image, Grid, Container } from 'semantic-ui-react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in app

export default class FineArt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoIndex: 0,
            isOpen: false,
            images: [
                this.imagesObject[0],
                this.imagesObject[1],
                this.imagesObject[2],
                this.imagesObject[3],
                this.imagesObject[4],
                this.imagesObject[5],
                this.imagesObject[6],
                this.imagesObject[7],
                this.imagesObject[8],
                this.imagesObject[9],
                this.imagesObject[10],
                this.imagesObject[11],
                this.imagesObject[12],
                this.imagesObject[13]
            ]
        }
    }

    imagesObject = [
        require('./images/fineart/1.jpg'),
        require('./images/fineart/2.jpg'),
        require('./images/fineart/3.jpg'),
        require('./images/fineart/4.jpg'),
        require('./images/fineart/5.jpg'),
        require('./images/fineart/6.jpg'),
        require('./images/fineart/7.jpg'),
        require('./images/fineart/8.jpg'),
        require('./images/fineart/9.jpg'),
        require('./images/fineart/10.jpg'),
        require('./images/fineart/11.jpg'),
        require('./images/fineart/12.jpg'),
        require('./images/fineart/13.jpg')
    ];

    openLightBox = (e, index) => {
        // this.images.push(this.imagesObject[index])
        let reArrangeImages = [this.imagesObject[index], ...this.state.images ]
        this.setState({
            images: reArrangeImages
        })
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
      const { photoIndex, isOpen } = this.state;
        return (
          <Grid >
            <Grid.Row columns={1} centered>
              <Grid.Column>
                <Container>
                  <div>
                    {isOpen &&
                        ( <Lightbox
                            mainSrc={this.state.images[photoIndex]}
                            nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
                            prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
                            onCloseRequest={ () => this.setState({ isOpen: false })}
                            onMovePrevRequest={ () =>
                                this.setState({
                                    photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % this.state.images.length,
                                })
                            }
                                    />
                                )}
                            </div>
                        </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image
                            id={1}
                            src={require('./images/fineart/1.jpg')}
                            onClick={(e) => this.openLightBox(e, 0)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={4}
                            src={require('./images/fineart/4.jpg')}
                            onClick={(e) => this.openLightBox(e, 3)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={3}
                            src={require('./images/fineart/3.jpg')}
                            onClick={(e) => this.openLightBox(e, 2)} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image
                            id={2}
                            src={require('./images/fineart/2.jpg')}
                            onClick={(e) => this.openLightBox(e, 1)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={7}
                            src={require('./images/fineart/7.jpg')}
                            onClick={(e) => this.openLightBox(e, 6)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={9}
                            src={require('./images/fineart/9.jpg')}
                            onClick={(e) => this.openLightBox(e,  8)} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image
                            id={10}
                            src={require('./images/fineart/10.jpg')}
                            onClick={(e) => this.openLightBox(e, 9)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={11}
                            src={require('./images/fineart/11.jpg')}
                            onClick={(e) => this.openLightBox(e, 10)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={6}
                            src={require('./images/fineart/6.jpg')}
                            onClick={(e) => this.openLightBox(e, 5)} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image
                            id={13}
                            src={require('./images/fineart/13.jpg')}
                            onClick={(e) => this.openLightBox(e, 12)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={12}
                            src={require('./images/fineart/12.jpg')}
                            onClick={(e) => this.openLightBox(e, 11)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={15}
                            src={require('./images/fineart/15.jpg')}
                            onClick={(e) => this.openLightBox(e, 15)} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image
                            id={5}
                            src={require('./images/fineart/5.jpg')}
                            onClick={(e) => this.openLightBox(e,  4)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={8}
                            src={require('./images/fineart/8.jpg')}
                            onClick={(e) => this.openLightBox(e, 7)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            id={14}
                            src={require('./images/fineart/14.jpg')}
                            onClick={(e) => this.openLightBox(e, 13)} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}