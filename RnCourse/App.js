import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#6dcf81", backgroundColor: "#6dcf81" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
      }}
      text2Style={{
        fontSize: 13,
        color: "white",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#bf6060", backgroundColor: "#bf6060" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
      }}
      text2Style={{
        fontSize: 13,
        color: "white",
      }}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#3b82f6", backgroundColor: "#3b82f6" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
      }}
      text2Style={{
        fontSize: 13,
        color: "white",
      }}
    />
  ),
};

const App = () => {
  const [value, setValue] = useState("");
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const inputHandler = (text) => {
    setValue(text);
  };

  const saveText = () => {
    if (value.trim() === "") {
      setError("Goal cannot be empty!");
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Goal cannot be empty!",
        visibilityTime: 4000,
      });
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: value, id: Math.random().toString() },
    ]);
    setValue("");
    setError("");
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Goal added successfully!",
      visibilityTime: 4000,
    });
  };

  const deleteGoal = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
    Toast.show({
      type: "info",
      text1: "Deleted",
      text2: "Goal deleted successfully!",
      visibilityTime: 4000,
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        inputHandler={inputHandler}
        saveText={saveText}
        error={error}
        value={value}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem
              text={item.text}
              id={item.id}
              deleteGoal={deleteGoal}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
