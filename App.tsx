import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {TextInput, Text, FAB, Checkbox, Divider} from 'react-native-paper';
import {PaperProvider} from 'react-native-paper';
import DeleteButton from './components/molecules/delete-button';
import EditButton from './components/molecules/edit-button';
import HeadingText from './components/atoms/headingText';

interface Task {
  pending: boolean;
  description: string;
}

function App(): React.JSX.Element {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState(-1);

  // functions

  const handleAddTask = (todo: string) => {
    let task = {
      pending: true,
      description: todo,
    };

    // Add new task
    setTasks([...tasks, task]);

    setText('');
  };

  const handleEditTaskStatus = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].pending = !updatedTasks[index].pending;
    setTasks(updatedTasks);
  };

  const handleEditTaskDescription = (index: number) => {
    setText(tasks[index].description);
    handleDeleteTask(index);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // UI components

  const todoRenderUI = ({item, index}: {item: Task; index: number}) => (
    <View
      style={{
        height: 'auto',
      }}>
      <View style={styles.taskActionsContainer}>
        <View style={styles.taskContainer}>
          <Checkbox
            status={!item.pending ? 'checked' : 'unchecked'}
            onPress={() => handleEditTaskStatus(index)}
          />
          <Text
            variant="headlineMedium"
            style={{
              textDecorationLine: !item.pending ? 'line-through' : 'none',
            }}>
            {item.description}
          </Text>
        </View>

        {!item.pending ? (
          <DeleteButton onPress={() => handleDeleteTask(index)} />
        ) : (
          <EditButton onPress={() => handleEditTaskDescription(index)} />
        )}
      </View>
      <Divider bold />
    </View>
  );

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <HeadingText text="ToDo App" />
          {/* Input field  */}
          <View style={styles.inputField}>
            <View style={styles.formContainer}>
              <TextInput
                value={text}
                onChangeText={text => setText(text)}
                mode={'outlined'}
              />
            </View>
            <FAB icon="plus" style={{}} onPress={() => handleAddTask(text)} />
          </View>
        </View>
        {/* List of tasks  */}
        <View style={styles.listContainer}>
          <FlatList data={tasks} renderItem={todoRenderUI} />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
  },
  inputField: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  formContainer: {
    width: '60%',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    flex: 2,
    paddingBottom: 30,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  taskContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 20,
  },
  taskActionsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});
