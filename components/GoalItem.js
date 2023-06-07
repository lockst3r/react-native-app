import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
  
      <View style={styles.goalItem}>
      <Pressable style={({pressed}) => pressed && styles.presseedItem } android_ripple={{color: '#dddddd'}} onPress={onDeleteItem.bind(this, id)}>
        <Text style={styles.goalText}>{text}</Text>
        </Pressable>
      </View>
    
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    
    borderRadius: 6,
    backgroundColor: "purple",
    color: "white",
  },
  presseedItem: {
   opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
