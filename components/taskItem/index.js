import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{task}</Text>
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2
  },
  taskText: {
    fontSize: 16,
    color: '#333'
  }
});

export default TaskItem;
