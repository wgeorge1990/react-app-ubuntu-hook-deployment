import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once

const images = [
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

class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
      const { photoIndex, isOpen } = this.state;
        return (
            <div>
                <button type="button" onClick={() => this.setState({ isOpen: true })}>
                    Open Lightbox
                </button>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}
export default LightboxExample