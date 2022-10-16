import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import React from "react";
import { colors, sizes } from "../shared/constant";

export default function Input({
  placeHolder,
  secure,
  label,
  value,
  onHandler,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(v) => onHandler(v)}
        style={styles.InputContainer}
        secureTextEntry={secure}
        placeholder={placeHolder}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  InputContainer: {
    height: 55,
    width: sizes.width - sizes.mh,
    elevation: 3,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 30,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});
