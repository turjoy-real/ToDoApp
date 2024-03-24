import {StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {
  AddEditScreenNavigationProp,
  AddEditScreenRouteProp,
} from '../../../types';
import CustomFAB from '../../components/molecules/fab';
import {addTodo, updateTodoDetails} from '../../store/actions/todo';
import {useAppDispatch} from '../../store/hooks/redux-hooks';
import BasicContainer from '../../components/atoms/container/container';
import Colors from '../../constants/Colors';

const AddTodo = ({
  navigation,
  route,
}: {
  navigation: AddEditScreenNavigationProp;
  route: AddEditScreenRouteProp;
}) => {
  const [text, setText] = useState(
    route.params ? route.params.description : '',
  );
  const dispatch = useAppDispatch();

  return (
    <BasicContainer>
      <HeadingText text="Add Todo" />
      <View style={styles.formButtonContainer}>
        <View style={styles.formContainer}>
          <TextInput
            value={text}
            multiline
            onChangeText={text => setText(text)}
            mode={'outlined'}
            style={{backgroundColor: Colors.bgColor}}
            activeOutlineColor={Colors.activeOutlineColor}
            outlineColor={Colors.outLineColor}
            textColor={Colors.text}
            contentStyle={styles.inputStyle}
          />
        </View>
        <CustomFAB
          onPress={() => {
            route.params
              ? dispatch(
                  updateTodoDetails({
                    id: route.params.id,
                    description: text,
                  }),
                )
              : dispatch(addTodo(text));
            setText('');
            navigation.goBack();
          }}
        />
      </View>
    </BasicContainer>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
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

  inputStyle: {
    fontSize: 24,
    flex: 1,
  },
});
