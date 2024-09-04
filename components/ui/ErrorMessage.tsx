import React from "react";
import { FlexStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import Typography from "./Typography";

type ErrorMessageProps = {
  message: string;
  style?: TextStyle | ViewStyle | FlexStyle;
};

const ErrorMessage = ({ message, style }: ErrorMessageProps) => {
  return (
    <Typography color="error500" style={style}>
      {message}
    </Typography>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({});
