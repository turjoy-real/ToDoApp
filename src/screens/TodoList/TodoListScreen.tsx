import {FlatList, StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {useContext, useState} from 'react';
import {Checkbox, Divider, FAB, Text} from 'react-native-paper';
import {ListScreenNavigationProp, Task, TodoContextType} from '../../../types';
import IconButton from '../../components/molecules/iconButton';
import {TodoContext} from '../../todoContext';

const TodoList = ({navigation}: {navigation: ListScreenNavigationProp}) => {
  const {tasks, updateTodoStatus, deleteTodo} = useContext(
    TodoContext,
  ) as TodoContextType;

  // UI components

  const todoRenderUI = ({item, index}: {item: Task; index: number}) => (
    <View
      style={{
        height: 'auto',
      }}>
      <View style={styles.taskActionsContainer}>
        <View style={styles.taskContainer}>
          <Checkbox.Android
            status={!item.pending ? 'checked' : 'unchecked'}
            onPress={() => updateTodoStatus(index)}
            color="#4F4F4F"
          />
          <Text
            variant="headlineMedium"
            numberOfLines={1}
            style={{
              textDecorationLine: !item.pending ? 'line-through' : 'none',
              textAlign: 'left',
            }}>
            {item.description}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {!item.pending ? (
            <IconButton
              icon="delete-outline"
              onPress={() => deleteTodo(index)}
            />
          ) : (
            <IconButton
              icon="pencil"
              onPress={() =>
                navigation.navigate('AddEdit', {
                  index,
                  task: item,
                })
              }
            />
          )}
          <IconButton
            icon="dots-vertical"
            onPress={() => {
              navigation.navigate('Details', {task: item, index});
            }}
          />
        </View>
      </View>
      <Divider bold />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <HeadingText text="Todo List" />
      </View>
      <View style={{flex: 2, width: '100%'}}>
        <View style={styles.listContainer}>
          <FlatList data={tasks} renderItem={todoRenderUI} />
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: '5%',
            flex: 1,
            paddingBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FAB
            icon="plus"
            style={{
              backgroundColor: '#ffffff',
            }}
            onPress={() => navigation.navigate('AddEdit')}
            rippleColor={'#ffffff'}
          />
        </View>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
    flex: 3,
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
  },
  taskActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
  },
});
