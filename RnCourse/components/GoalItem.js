import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={props.deleteGoal.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressItem}
    >
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressItem: {
    color: "#210644",
  },
  goalText: {
    color: "white",
    fontSize: 18,
    padding: 8,
  },
});

export default GoalItem;
