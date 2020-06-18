import React, { Component } from 'react';

import { ImageRenderer, VideoRenderer } from './renderers';

export default class MediaCropper extends Component {
    get isVideo() {
        return this.state.isVideo;
    }

    get croppedMedia() {
        return this.refs.media.croppedMedia;
    }

    constructor(props) {
        super(props);
        const media = new Image();
        media.src = `/temp.jpg`;
        media.setAttribute('crossorigin', 'anonymous');

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
            moved: false,
            renderer: ImageRenderer
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
        if (file.type === 'image/gif') {
            // TODO: Handle gif
        } else if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = () => {
                const media = new Image();
                media.src = reader.result;
                media.setAttribute('crossorigin', 'anonymous');

                media.onload = () => {
                    const zoom = Math.max(this.props.width / media.width, this.props.height / media.height);
                    this.setState({
                        ...this.state,
                        isVideo: false,
                        media,
                        transX: 0,
                        transY: 0,
                        zoom,
                        renderer: ImageRenderer
                    });
                    this.forceUpdate();
                };
            };

            reader.readAsDataURL(file);
        } else if (file.type.startsWith('image/')) {
            const media = document.createElement('video');
            media.muted = true;
            media.src = URL.createObjectURL(file);
            media.loop = true;
            media.setAttribute('crossorigin', 'anonymous');
            media.play();

            media.onloadeddata = () => {
                if (media.readyState >= 2) {
                    media.width = media.videoWidth;
                    media.height = media.videoHeight;
                    const zoom = Math.max(this.props.width / media.width, this.props.height / media.height);
                    media.onloadeddata = null;
                    this.setState({
                        ...this.state,
                        isVideo: true,
                        renderer: VideoRenderer,
                        media,
                        transX: 0,
                        transY: 0,
                        zoom
                    });
                }
            }
        } else {
            alert("Must select an image or video file");
        }
    }

    render() {
        const Renderer = this.state.renderer;
        return (
            <div
                onClick={this.click}
                onMouseDown={this.mouseDown}
                onWheel={this.mouseWheel}
            >
                <Renderer
                    ref="media"
                    {...this.state}
                    width={this.props.width}
                    height={this.props.height}
                />
                <input
                    type="file"
                    id="file"
                    ref="fileUploader"
                    accept="image/*,video/*"
                    style={{ display: "none" }}
                    onChange={this.loadFile}
                />
            </div>
        );
    }
}
