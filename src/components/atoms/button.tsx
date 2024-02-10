import {ReactNode} from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  children: ReactNode;
}

const TouchableButton = ({onPress, children}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 30,
        flex: 1,
        alignItems: 'flex-end',
        padding: 5,
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableButton;
