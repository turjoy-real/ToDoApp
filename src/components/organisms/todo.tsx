import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {ListScreenNavigationProp, TaskResp} from '../../../types';
import IconButton from '../molecules/iconButton';
import DetailsText from '../atoms/detailsText/detailsText';
import CustomCheckBox from '../molecules/customCheckBox';
import {useAppDispatch} from '../../store/hooks/redux-hooks';
import {deleteTodo} from '../../store/actions/todo';

const TodoRenderUI = ({
  item,
  navigation,
  index,
}: {
  item: TaskResp;
  navigation: ListScreenNavigationProp;
  index: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        height: 'auto',
      }}>
      <View style={styles.taskActionsContainer}>
        <View style={styles.taskContainer}>
          <CustomCheckBox item={item} />
          <DetailsText item={item} lines={1} />
        </View>
        <View style={styles.actionsContainer}>
          {!item.pending ? (
            <IconButton
              icon="delete-outline"
              onPress={() => dispatch(deleteTodo(item.id))}
            />
          ) : (
            <IconButton
              icon="pencil"
              onPress={() => navigation.navigate('AddEdit', item)}
            />
          )}
          <IconButton
            icon="dots-vertical"
            onPress={() => {
              navigation.navigate('Details', {index});
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
