import {Checkbox} from 'react-native-paper';
import {Task, TodoContextType} from '../../../types';
import {useContext} from 'react';
import {TodoContext} from '../../todoContext';

const CustomCheckBox = ({item, index}: {item: Task; index: number}) => {
  const {updateTodoStatus} = useContext(TodoContext) as TodoContextType;

  return (
    <Checkbox.Android
      status={!item.pending ? 'checked' : 'unchecked'}
      onPress={() => updateTodoStatus(index)}
      color="#4F4F4F"
    />
  );
};

export default CustomCheckBox;
