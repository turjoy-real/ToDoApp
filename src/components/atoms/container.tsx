import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/Colors';

const BasicContainer = ({children}: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

export default BasicContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    backgroundColor: Colors.bgColor,
  },
});
