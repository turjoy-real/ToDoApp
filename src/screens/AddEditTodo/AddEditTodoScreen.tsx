import {StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {useContext, useState} from 'react';
import {FAB, TextInput} from 'react-native-paper';
import {TodoContext} from '../../todoContext';
import {
  AddEditScreenNavigationProp,
  AddEditScreenRouteProp,
  TodoContextType,
} from '../../../types';

const AddTodo = ({
  navigation,
  route,
}: {
  navigation: AddEditScreenNavigationProp;
  route: AddEditScreenRouteProp;
}) => {
  const {addTodo, updateTodoDetails} = useContext(
    TodoContext,
  ) as TodoContextType;
  const [text, setText] = useState(
    route.params ? route.params.task.description : '',
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <HeadingText text="Add Todo" />
      </View>
      <View
        style={{
          flex: 2,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.formContainer}>
          <TextInput
            value={text}
            multiline
            onChangeText={text => setText(text)}
            mode={'outlined'}
            activeOutlineColor="#4F4F4F"
          />
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
            onPress={() => {
              route.params
                ? updateTodoDetails(
                    route.params.index,
                    route.params.task.description,
                  )
                : addTodo(text);
              setText('');
              navigation.goBack();
            }}
            rippleColor={'#ffffff'}
          />
        </View>
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
  },
  inputField: {
    width: '100%',
    height: 300,
  },
  formContainer: {
    width: '80%',
    flex: 4,
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
