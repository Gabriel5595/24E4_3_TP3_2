import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/taskItem/index';

export default function App() {
  const tasks = [
    'Estudar React Native',
    'Comprar mantimentos',
    'Fazer exercícios físicos',
    'Responder e-mails',
    'Planejar a semana'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  scrollView: {
    paddingVertical: 10
  }
});
