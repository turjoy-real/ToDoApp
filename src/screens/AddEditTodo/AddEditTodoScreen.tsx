import {StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {useContext, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {TodoContext} from '../../todoContext';
import {
  AddEditScreenNavigationProp,
  AddEditScreenRouteProp,
  TodoContextType,
} from '../../../types';
import CustomFAB from '../../components/molecules/fab';

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
      <View style={styles.headerContainer}>
        <HeadingText text="Add Todo" />
      </View>
      <View style={styles.formButtonContainer}>
        <View style={styles.formContainer}>
          <TextInput
            value={text}
            multiline
            onChangeText={text => setText(text)}
            mode={'outlined'}
            activeOutlineColor="#4F4F4F"
          />
        </View>

        <CustomFAB
          onPress={() => {
            route.params
              ? updateTodoDetails(route.params.index, text)
              : addTodo(text);
            setText('');
            navigation.goBack();
          }}
        />
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
  headerContainer: {flex: 1, justifyContent: 'center'},
  formButtonContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    width: '80%',
    flex: 4,
  },
});
