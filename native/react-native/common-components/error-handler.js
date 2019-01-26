import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from "prop-types";

/**
 * 
 * This component serves as a global error handler template.
 * 
 * @props:
 *  - errorHeader: A string describing what kind of error is being thrown.
 *  - errorInfo: A string describing the details of the error.
 *  - modalVisible: A bool for assigning the initial value of the modal's visiblity
 *  - onClose: A function that gets called when the modal closes.
 */

class ErrorHandler extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: this.props.modalVisible
        }
    }

    /**
     * 
     * @param {*} visible
     * Set whether or not the error handler modal is showing
     */
    setModalVisible(visible){
        this.setState({modalVisible: visible});
    }

    render(){
        return(
            <View>
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                >
                <View>
                    <Text>
                        {this.props.errorHeader}
                    </Text>

                    <Text>
                        {this.props.errorInfo}
                    </Text>
                    
                    <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        this.props.onClose();
                    }}
                    >
                        <Text>Dismiss</Text>
                    </TouchableHighlight>
                </View>
                </Modal>
            </View>
        );
    }
}

ErrorHandler.propTypes = {
    errorHeader: PropTypes.string,
    errorInfo: PropTypes.string,
    modalVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func
}

export default ErrorHandler;