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
  styles?: object;
}

type ButtonOptions = {
  height?: string;
  width?: string;
  backgroundColor?: string;
  onPress?: Function;
  text?: string;
  icon: any;
};

const Button: React.FC<ButtonProps> = ({ onPress, text, icon, styles }) => {
  const defaultStyles = StyleSheet.create({
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
    ...styles,
  });

  let defaults = {
    backgroundColor: "#334B80",
    width: "80%",
    height: "8%",
    fontSize: 20,
  };
  let options: ButtonOptions = { ...defaults, onPress, text, icon };
  return (
    <TouchableOpacity
      style={[
        defaultStyles.button,
        {
          height: options.height,
          width: options.width,
          backgroundColor: options.backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      {icon ? <Image style={defaultStyles.icon} source={icon} /> : null}
      <Text style={[defaultStyles.text, { fontSize: defaults.fontSize }]}>
        {text}
      </Text>
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
