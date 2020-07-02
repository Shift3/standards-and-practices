import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: "#FFF",
    fontFamily: "oswald",
  },
  icon: {
    position: "absolute",
    right: "85%",
  },
});

const Button = (props) => {
  const { onPress, text, icon } = props;
  let defaults = {
      backgroundColor: "#334B80",
      width: "80%",
      height: "8%",
      fontSize: 20,
    },
    options = Object.assign({}, defaults, props);
  return (
    <TouchableOpacity
      style={[styles.button, ({ height, width, backgroundColor } = options)]}
      onPress={onPress}
    >
      {icon ? <Image style={styles.icon} source={icon} /> : null}
      <Text style={[styles.text, { fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.object,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Button;
