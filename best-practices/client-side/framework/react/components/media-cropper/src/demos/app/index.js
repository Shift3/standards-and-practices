import React, { Component } from "react";
import { hot } from "react-hot-loader";
import MediaCropper from '../../components';

class App extends Component {
    downloadFile() {
        const media = this.refs.cropper.croppedMedia;
        const isVideo = this.refs.cropper.isVideo;
        console.log(isVideo);
        media.then((blob) => {
            const a = this.refs.dlLink;
            a.href = URL.createObjectURL(blob);
            a.download = isVideo ? 'video.webm' : 'image.png';
            a.click();
        });
    }

    render() {
        return (
            <div>
                <div className="round">
                    <MediaCropper ref="cropper" height={270} width={300} />
                </div>
                <button onClick={() => this.downloadFile()}>Download</button>
                <a ref="dlLink"></a>
            </div>
        );
    }
}

export default hot(module)(App);
