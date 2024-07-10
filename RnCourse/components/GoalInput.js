import React from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={props.value}
          onChangeText={props.inputHandler}
          placeholder="Your Goal"
        />
        <Button title="Add" onPress={props.saveText} />
      </View>
      {props.error !== "" && (
        <Text style={styles.errorText}>{props.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    padding: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default GoalInput;
