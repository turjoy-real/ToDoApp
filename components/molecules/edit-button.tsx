import {Icon} from 'react-native-paper';
import TouchableButton from '../atoms/button';
import {PressProps} from '../../types';

const EditButton = ({onPress}: PressProps) => {
  return (
    <TouchableButton onPress={onPress}>
      <Icon size={30} source={'pencil'} />
    </TouchableButton>
  );
};

export default EditButton;
