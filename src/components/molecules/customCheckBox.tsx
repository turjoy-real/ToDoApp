import {Checkbox} from 'react-native-paper';
import {TaskResp} from '../../../types';
import {useAppDispatch} from '../../store/hooks/redux-hooks';
import {updateTodoStatus} from '../../store/actions/todo';
import Colors from '../../constants/Colors';

const CustomCheckBox = ({item}: {item: TaskResp}) => {
  const dispatch = useAppDispatch();
  return (
    <Checkbox.Android
      status={!item.pending ? 'checked' : 'unchecked'}
      onPress={() => {
        dispatch(updateTodoStatus({id: item.id, pending: item.pending}));
      }}
      color={Colors.text}
    />
  );
};

export default CustomCheckBox;
