import { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const handleAddGoal = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal..."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
