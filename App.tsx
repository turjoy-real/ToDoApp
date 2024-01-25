import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  TextInput,
  Text,
  FAB,
  Checkbox,
  Divider,
  Icon,
} from 'react-native-paper';
import {PaperProvider} from 'react-native-paper';

interface Task {
  pending: boolean;
  description: string;
}

function App(): React.JSX.Element {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = (todo: string) => {
    let task = {
      pending: true,
      description: todo,
    };

    if (editIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(-1);
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }
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

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text variant="displayMedium">ToDo App</Text>
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

        <View
          style={{
            width: '100%',
            paddingHorizontal: '5%',
            flex: 2,
            paddingBottom: 30,
          }}>
          <FlatList
            data={tasks}
            renderItem={({item, index}) => (
              <View
                style={{
                  height: 'auto',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 10,
                  }}>
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      paddingRight: 20,
                    }}>
                    <Checkbox
                      status={!item.pending ? 'checked' : 'unchecked'}
                      onPress={() => handleEditTaskStatus(index)}
                    />
                    <Text
                      variant="headlineMedium"
                      style={{
                        textDecorationLine: !item.pending
                          ? 'line-through'
                          : 'none',
                      }}>
                      {item.description}
                    </Text>
                  </View>

                  {!item.pending ? (
                    <TouchableOpacity
                      style={{
                        width: 30,
                        flex: 1,
                        alignItems: 'flex-end',
                        paddingRight: 20,
                      }}
                      onPress={() => handleDeleteTask(index)}>
                      <Icon size={30} source={'delete-outline'} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{
                        width: 30,
                        flex: 1,
                        alignItems: 'flex-end',
                        paddingRight: 20,
                      }}
                      onPress={() => handleEditTaskDescription(index)}>
                      <Icon size={30} source={'pencil'} />
                    </TouchableOpacity>
                  )}
                </View>
                <Divider bold />
              </View>
            )}
          />
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
});
