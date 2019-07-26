import React from "react";
import { Modal, Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { configureConfirmModal } from "../../redux"; //This action creator is included in this folder ./modalActions.js

const mapStateToProps = state => ({
    modalState: state.modalState
});

const mapDispatchToProps = dispatch => ({
    configureConfirmModal: (modalStateObject) => dispatch(configureConfirmModal(modalStateObject))
});

// * Basic shape of state.modalState (referenced above in mapStateToProps), which should go in your reducer for this Redux property:
const defaultModalState = {
    isConfirmModalVisible: false,
    titleMessage: "",
    bodyMessage: "",
    confirmFunction: null,
    confirmMessage: "",
    cancelMessage: ""
};

const styles = StyleSheet.create({
   // Styles can be added here.
});

/**
 * This component serves as a global CONFIRM/DENY modal for the application. It is styled to match a basic black/white theme
 * and provides placeholder text for all fields in case we just want to ask the user if they're really sure. If we have
 * custom messaging for the user, we can pass it in as props. Since this modal is global we hook into Redux to provide the props.
 * 
 * @props:
 *  - configureConfirmModal: Redux reducer function to configure the modal.
 *  -  modalState: Object with the following properties to configure the modal:
 *    - isConfirmModalVisible: Boolean that controls whether modal is visible.
 *    - titleMessage: Message that is displayed in the header.
 *    - bodyMessage: Message that is displayed in the main body.
 *    - confirmFunction: Function that is invoked when user confirms that they want to perform the task
 *    - confirmMessage: Text displayed in the confirm button
 *    - cancelMessage: Text displayed in the cancel button
 */

const ConfirmModal = (props) => {
    return (
        <Modal
            animationType="slide" // | "fade"
            transparent={true}
            visible={props.modalState.isConfirmModalVisible}
            onRequestClose={() => props.configureConfirmModal(defaultModalState)}
        >
            <View style={styles.modalProper}>
                <View style={styles.modalWrap}>
                    <View style={styles.modalHeader}>
                        <Text adjustsFontSizeToFitWidth={true} numberOfLines={1} style={styles.modalHeaderText}>{props.modalState.titleMessage
                            ? props.modalState.titleMessage.toUpperCase()
                            : "ARE YOU SURE?"
                        }</Text>
                    </View>
                    <View style={styles.modalBody}>
                        <Text adjustsFontSizeToFitWidth={true} style={styles.bodyMessageText}>{props.modalState.bodyMessage
                            ? props.modalState.bodyMessage
                            : `To confirm, click ${props.modalState.confirmMessage ? props.modalState.confirmMessage : "OK"}`
                        }
                        </Text>
                    </View>
                    <View style={styles.modalButtons}>
                        <TouchableHighlight
                            style={[styles.button, { borderColor: "#E30007" }]}
                            onPress={() => {
                                props.configureConfirmModal(defaultModalState);
                            }}>
                            <Text style={[styles.buttonText, { color: "#E30007" }]}>{props.modalState.cancelMessage
                                ? props.modalState.cancelMessage.toUpperCase()
                                : "CANCEL"
                            }</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={[styles.button, { borderColor: "#00FF00" }]}
                            onPress={() => {
                                if (props.modalState.confirmFunction) props.modalState.confirmFunction();
                                props.configureConfirmModal(defaultModalState);
                            }}>
                            <Text style={[styles.buttonText, { color: "#00FF00" }]}>{props.modalState.confirmMessage
                                ? props.modalState.confirmMessage.toUpperCase()
                                : "OK"
                            }
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

//Prop Types
ConfirmModal.propTypes = {
    configureConfirmModal: PropTypes.func,
    modalState: PropTypes.shape({
        isConfirmModalVisible: PropTypes.bool,
        titleMessage: PropTypes.string,
        bodyMessage: PropTypes.string,
        confirmFunction: PropTypes.func,
        confirmMessage: PropTypes.string,
        cancelMessage: PropTypes.string,
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);