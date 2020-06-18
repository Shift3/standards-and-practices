import React, { Component } from "react";
import { hot } from "react-hot-loader";
import MediaCropper from '../../components';

class App extends Component {
    downloadFile() {
        const media = this.refs.cropper.croppedMedia;
        console.log(media);
        media.then(({ blob, fileName }) => {
            const a = this.refs.dlLink;
            a.href = URL.createObjectURL(blob);
            a.download = fileName;
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
