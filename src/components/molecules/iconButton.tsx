import {Icon} from 'react-native-paper';
import {CustomIconButtonProps} from '../../../types';
import {TouchableOpacity} from 'react-native';

const IconButton = ({onPress, icon}: CustomIconButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        margin: 3,
      }}
      onPress={onPress}>
      <Icon size={30} source={icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
