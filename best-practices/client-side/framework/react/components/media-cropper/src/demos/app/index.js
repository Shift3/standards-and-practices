import React, { Component } from "react";
import { hot } from "react-hot-loader";
import MediaCropper from '../../components';

class App extends Component {
    render() {
        return (
            <div className="round">
                <MediaCropper height={270} width={300} />
            </div>
        );
    }
}

export default hot(module)(App);
