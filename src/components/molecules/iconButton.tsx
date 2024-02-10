import {Icon} from 'react-native-paper';
import {CustomIconButtonProps} from '../../../types';
import TouchableButton from '../atoms/button';

const IconButton = ({onPress, icon}: CustomIconButtonProps) => {
  return (
    <TouchableButton onPress={onPress}>
      <Icon size={30} source={icon} />
    </TouchableButton>
  );
};

export default IconButton;
