import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import useInput from "./input.hook";
import styles from "./input.styles";

export interface InputProps extends TextInputProps {
  label: string;
  type?: "text" | "email" | "password" | "numeric";
}

const Input: React.FC<InputProps> = ({ label, type = "text", ...rest }) => {
  const {} = useInput();

  const inputProps: Partial<TextInputProps> = {};

  switch (type) {
    case "password":
      inputProps.secureTextEntry = true;
      break;
    case "email":
      inputProps.keyboardType = "email-address";
      inputProps.autoCapitalize = "none";
      break;
    case "numeric":
      inputProps.keyboardType = "numeric";
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.valueInput} {...inputProps} {...rest} />
    </View>
  );
};

export default Input;
