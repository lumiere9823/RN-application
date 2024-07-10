import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
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
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  // const addGoalHandler = () => {
  //   if (value.trim() === "") {
  //     setError("Goal cannot be empty!");
  //     Toast.show({
  //       type: "error",
  //       text1: "Error",
  //       text2: "Goal cannot be empty!",
  //       visibilityTime: 2000,
  //     });
  //     return;
  //   }
  //   setGoals((currentGoals) => [
  //     ...currentGoals,
  //     { text: value, id: Math.random().toString() },
  //   ]);
  //   setValue("");
  //   setError("");
  //   Toast.show({
  //     type: "success",
  //     text1: "Success",
  //     text2: "Goal added successfully!",
  //     visibilityTime: 2000,
  //   });
  // };

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() === "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Goal cannot be empty!",
        visibilityTime: 1000,
      });
      endAddGoalHandler();
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Goal added successfully!",
      visibilityTime: 1000,
    });
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    Toast.show({
      type: "info",
      text1: "Deleted",
      text2: "Goal deleted successfully!",
      visibilityTime: 1000,
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
