import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {ListScreenNavigationProp, Task, TodoContextType} from '../../../types';
import {useContext} from 'react';
import {TodoContext} from '../../todoContext';
import IconButton from '../molecules/iconButton';
import DetailsText from '../atoms/detailsText';
import CustomCheckBox from '../molecules/customCheckBox';

const TodoRenderUI = ({
  item,
  index,
  navigation,
}: {
  item: Task;
  index: number;
  navigation: ListScreenNavigationProp;
}) => {
  const {deleteTodo} = useContext(TodoContext) as TodoContextType;
  return (
    <View
      style={{
        height: 'auto',
      }}>
      <View style={styles.taskActionsContainer}>
        <View style={styles.taskContainer}>
          <CustomCheckBox item={item} index={index} />
          <DetailsText item={item} lines={1} />
        </View>
        <View style={styles.actionsContainer}>
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
    overflow: 'hidden',
  },
  taskActionsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  actionsContainer: {flex: 1, flexDirection: 'row'},
});
