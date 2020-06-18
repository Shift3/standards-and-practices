import React from 'react';
import ImageRenderer from './image';

import './video.css';

export default class VideoRenderer extends ImageRenderer {
    get croppedMedia() {
        this.setState({
            ...this.state,
            rendering: true,
            progress: '0%'
        });
        const { media } = this.props;
        // stop video
        media.pause();
        // set video time to start
        media.currentTime = 0;
        // media.playbackRate = 10; // speed up rendering for testing
        // turn off looping
        media.loop = false;
        // create mediastream from canvas
        const mediaRecorder = new MediaRecorder(
            this.refs.canvas.captureStream(30),
            {
                mimeType: 'video/webm'
            }
        );
        // play the full video
        mediaRecorder.start();
        media.play();
        media.onended = () => {
            // stop the recorder
            mediaRecorder.stop();
        }
        media.ontimeupdate = () => {
            const progress = `${((media.currentTime / media.duration) * 100).toFixed(2).trimRight('0')}%`;
            this.setState({
                ...this.state,
                progress
            });
        }
        const chunks = [];
        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
        };
        // once video ends, return the recording
        return new Promise(resolve => {
            mediaRecorder.onstop = () => {
                // reset video status
                media.loop = true;
                media.currentTime = 0;
                media.play();
                this.setState({
                    ...this.state,
                    rendering: false
                });
                resolve(new Blob(chunks, {type: 'video/webm'}));
            }
        });
    }

    componentDidMount() {
        super.componentDidMount();
        const render = () => {
            this.renderCanvas();
            requestAnimationFrame(render)
        }
        requestAnimationFrame(render);
    }

    render() {
        const canvas = super.render();

        return (<div className="video-renderer">
            {canvas}
            {this.state.rendering && <div className="rendering-progress" style={{width: this.state.progress}}></div>}
            {this.state.rendering && <div className="rendering-percent">{this.state.progress}</div>}
        </div>)
    }

    // TODO: add controls for video
}
