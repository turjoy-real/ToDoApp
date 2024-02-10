import {StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {Checkbox, Text} from 'react-native-paper';
import {TodoContextType, ViewScreenRouteProp} from '../../../types';
import {useContext} from 'react';
import {TodoContext} from '../../todoContext';

const ViewTodo = ({route}: {route: ViewScreenRouteProp}) => {
  const item = route.params.task;
  const {updateTodoStatus} = useContext(TodoContext) as TodoContextType;

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <HeadingText text="Todo Details" />
      </View>

      <View style={styles.listContainer}>
        <View
          style={{
            height: 'auto',
          }}>
          <View style={styles.taskActionsContainer}>
            <View style={styles.taskContainer}>
              <Checkbox.Android
                status={!item.pending ? 'checked' : 'unchecked'}
                onPress={() => updateTodoStatus(route.params.index)}
                color="#4F4F4F"
              />
              <Text
                variant="headlineMedium"
                style={{
                  textDecorationLine: !item.pending ? 'line-through' : 'none',
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewTodo;

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
