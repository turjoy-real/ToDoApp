import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import Colors from '../../constants/Colors';

const CustomFAB = ({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.FABContainer} accessibilityLabel={'FabButton'}>
      <FAB
        icon="plus"
        style={{
          backgroundColor: Colors.fabColor,
          borderRadius: 60,
        }}
        onPress={onPress}
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
