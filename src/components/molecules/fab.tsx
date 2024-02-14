import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';

const CustomFAB = ({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.FABContainer}>
      <FAB
        icon="plus"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 60,
        }}
        onPress={onPress}
        rippleColor={'#ffffff'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FABContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    flex: 1,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomFAB;
