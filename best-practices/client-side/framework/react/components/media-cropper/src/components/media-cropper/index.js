import React, { Component } from 'react';

import ImageRenderer from '../image-renderer';

export default class MediaCropper extends Component {
    constructor(props) {
        super(props);
        const media = new Image();
        media.src = `https://via.placeholder.com/${props.width}x${props.height}.png?text=click%20to%20add`;

        this.state = {
            zoom: 1,
            transX: 0,
            transY: 0,
            media,
            isVideo: false,
            dragging: false,
            mouseStart: {
                x: 0,
                y: 0
            },
            moved: false
        };

        this.click = this.click.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseWheel = this.mouseWheel.bind(this);
        this.loadFile = this.loadFile.bind(this);
    }

    componentDidUpdate(props, state) {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.mouseMove);
            document.addEventListener('mouseup', this.mouseUp);
            document.addEventListener('mouseleave', this.mouseUp);
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.mouseMove);
            document.removeEventListener('mouseup', this.mouseUp);
            document.removeEventListener('mouseleave', this.mouseUp);
        }
    }

    click(e) {
        if (!this.state.moved) {
            this.refs.fileUploader.click();
        }
        this.setState({
            ...this.state,
            moved: false
        })
    }

    mouseDown(e) {
        this.setState({
            ...this.state,
            dragging: true,
            mouseStart: {
                x: e.pageX,
                y: e.pageY
            }
        });
        e.preventDefault();
        e.stopPropagation();
    }

    mouseMove(e) {
        this.setState({
            ...this.state,
            transX: this.state.transX - (this.state.mouseStart.x - e.pageX),
            transY: this.state.transY - (this.state.mouseStart.y - e.pageY),
            mouseStart: {
                x: e.pageX,
                y: e.pageY
            },
            moved: true
        });
        e.preventDefault();
        e.stopPropagation();
    }

    mouseUp(e) {
        this.setState({
            ...this.state,
            dragging: false
        });
        e.preventDefault();
        e.stopPropagation();
    }

    mouseWheel(e) {
        const scale = Math.pow(1.0015, -e.deltaY);

        const mX = e.pageX - e.target.offsetLeft;
        const mY = e.pageY - e.target.offsetTop;

        let transX = (this.state.transX - mX) * scale + mX;
        let transY = (this.state.transY - mY) * scale + mY;

        const zoom = this.state.zoom * scale;
        this.setState({
            ...this.state,
            zoom,
            transX,
            transY
        });
    }

    loadFile(e) {
        e.preventDefault();
        e.stopPropagation();
        const file = e.target.files[0];
        if (!file) return;
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = () => {
                const media = new Image();
                media.src = reader.result;

                media.onload = () => {
                    const zoom = Math.max(this.props.width / media.width, this.props.height / media.height);
                    this.setState({
                        ...this.state,
                        media,
                        transX: 0,
                        transY: 0,
                        zoom
                    });
                    this.forceUpdate();
                };
            };

            reader.readAsDataURL(file);
        } else {
            const media = document.createElement('video');
            media.width = this.props.width;
            media.height = this.props.height;
            media.muted = true;
            media.src = URL.createObjectURL(file);
            media.currentTime = 10;
            media.play();

            this.refs.test.appendChild(media);

            media.onloadeddata = () => {
                if (media.readyState >= 2) {
                    media.pause();
                    media.onloadeddata = null;
                    this.setState({
                        ...this.state,
                        media
                    });
                }
            }
        }
    }

    render() {
        return (
            <div
                ref="test"
                onClick={this.click}
                onMouseDown={this.mouseDown}
                onWheel={this.mouseWheel}
            >
                <ImageRenderer
                    {...this.state}
                    width={this.props.width}
                    height={this.props.height}
                ></ImageRenderer>
                <input
                    type="file"
                    id="file"
                    ref="fileUploader"
                    accept="image/*, video/*"
                    style={{ display: "none" }}
                    onChange={this.loadFile}
                />
            </div>
        );
    }
}
