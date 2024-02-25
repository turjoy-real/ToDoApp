import {Icon} from 'react-native-paper';
import {CustomIconButtonProps} from '../../../types';
import {TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const IconButton = ({onPress, icon}: CustomIconButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        margin: 3,
      }}
      onPress={onPress}>
      <Icon size={30} source={icon} color={Colors.text} />
    </TouchableOpacity>
  );
};

export default IconButton;
