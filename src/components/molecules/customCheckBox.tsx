import {Checkbox} from 'react-native-paper';
import {Task} from '../../../types';
import {useAppDispatch} from '../../store/hooks/redux-hooks';
import {updateTodoStatus} from '../../store/actions/todo';
import Colors from '../../constants/Colors';

const CustomCheckBox = ({item, index}: {item: Task; index: number}) => {
  const dispatch = useAppDispatch();

  return (
    <Checkbox.Android
      status={!item.pending ? 'checked' : 'unchecked'}
      onPress={() => dispatch(updateTodoStatus(index))}
      color={Colors.text}
    />
  );
};

export default CustomCheckBox;
