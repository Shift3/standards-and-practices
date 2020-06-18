import React, { Component } from 'react';

export default class ImageRenderer extends Component {
    ctx = null;

    get croppedMedia() {
        this.setState({
            ...this.state,
            rendering: true
        })
        return new Promise(resolve => {
            this.refs.canvas.toBlob((blob) => {
                this.setState({
                    ...this.state,
                    rendering: false
                })
                resolve(blob);
            }, 'image/png');
        });
    }

    constructor(props) {
        super(props);
        this.state = { ...this.props, rendering: false };
    }

    componentDidMount() {
        this.updateContext();
    }

    componentDidUpdate(props, state) {
        // if we are switching to rendering
        if (!state.rendering && this.state.rendering) {
            console.log('freezing state');
            // freeze the current state
            this.setState({ ...this.state, ...this.props });
        }
        this.renderCanvas();
    }

    updateContext() {
        this.ctx = this.refs.canvas.getContext('2d');
        this.renderCanvas();
    }

    renderCanvas() {
        // use state if rendering, props if not
        const renderProps = this.state.rendering ? this.state : this.props;
        if (this.ctx && renderProps.media) {
            this.ctx.clearRect(0, 0, renderProps.width, renderProps.height);
            this.ctx.drawImage(
                renderProps.media,
                renderProps.transX,
                renderProps.transY,
                renderProps.media.width * renderProps.zoom,
                renderProps.media.height * renderProps.zoom
            );
        }
    }

    render() {
        return (<canvas
            ref="canvas"
            width={this.props.width}
            height={this.props.height}
        ></canvas>);
    }
}
