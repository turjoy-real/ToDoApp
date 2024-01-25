import {GestureResponderEvent} from 'react-native';

export type PressProps = {
  onPress: (event: GestureResponderEvent) => void;
};
