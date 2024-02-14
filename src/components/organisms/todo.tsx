import {StyleSheet, View} from 'react-native';
import {Checkbox, Divider, Text} from 'react-native-paper';
import {ListScreenNavigationProp, Task, TodoContextType} from '../../../types';
import {useContext} from 'react';
import {TodoContext} from '../../todoContext';
import IconButton from '../molecules/iconButton';
import DetailsText from '../atoms/detailsText';

const TodoRenderUI = ({
  item,
  index,
  navigation,
}: {
  item: Task;
  index: number;
  navigation: ListScreenNavigationProp;
}) => {
  const {tasks, updateTodoStatus, deleteTodo} = useContext(
    TodoContext,
  ) as TodoContextType;
  return (
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
          <DetailsText item={item} lines={1} />
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
};

export default TodoRenderUI;

const styles = StyleSheet.create({
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
