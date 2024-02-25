import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const HeadingText = ({text}: {text: string}) => {
  return (
    <View style={styles.headerContainer}>
      <Text variant="displayMedium" style={{color: '#fff'}}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {flex: 1, justifyContent: 'center'},
});
export default HeadingText;
