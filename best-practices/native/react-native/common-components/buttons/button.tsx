import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import PropTypes from "prop-types";

interface ButtonProps {
  onPress: Function;
  text: string;
  icon: any;
  height: number;
  width: number;
  backgroundColor: string;
}

type InternalOptions = {
  height?: string;
  width?: string;
  backgroundColor?: string;
  onPress?: Function;
  text?: string;
  icon: any;
};

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

const Button = ({ onPress, text, icon }: ButtonProps) => {
  let defaults = {
    backgroundColor: "#334B80",
    width: "80%",
    height: "8%",
    fontSize: 20,
  };
  let options: InternalOptions = { ...defaults, onPress, text, icon };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          height: options.height,
          width: options.width,
          backgroundColor: options.backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      {icon ? <Image style={styles.icon} source={icon} /> : null}
      <Text style={[styles.text, { fontSize: defaults.fontSize }]}>{text}</Text>
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
