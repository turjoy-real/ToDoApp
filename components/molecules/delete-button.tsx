import {Icon} from 'react-native-paper';
import TouchableButton from '../atoms/button';
import {PressProps} from '../../types';

const DeleteButton = ({onPress}: PressProps) => {
  return (
    <TouchableButton onPress={onPress}>
      <Icon size={30} source={'delete-outline'} />
    </TouchableButton>
  );
};

export default DeleteButton;
