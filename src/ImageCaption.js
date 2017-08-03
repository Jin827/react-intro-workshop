import React from 'react';

class ImageCaption extends React.Component {

    render() {
        return (
            <figure>
                <img src={this.props.src} alt={"This is a kittenz!"}/>
                <figcaption>{this.props.text}</figcaption>
            </figure>
        );
    }
}

export default ImageCaption;
