import React, { Component } from 'react';

export default class ImageRenderer extends Component {
    ctx = null;

    get croppedImage() {
        return (async () => {
            return await new Promise((resolve, reject) => {
                this.refs.canvas.toBlob((blob) => {
                    resolve(blob);
                });
            });
        })();
    }

    componentDidMount() {
        this.updateContext();
    }

    componentDidUpdate(props, state) {
        this.renderCanvas();
    }

    updateContext() {
        this.ctx = this.refs.canvas.getContext('2d');
        this.renderCanvas();
    }

    renderCanvas() {
        if (this.ctx && this.props.media) {
            this.ctx.clearRect(0, 0, this.props.width, this.props.height);
            this.ctx.drawImage(
                this.props.media,
                this.props.transX,
                this.props.transY,
                this.props.media.width * this.props.zoom,
                this.props.media.height * this.props.zoom
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
