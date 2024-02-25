import {FlatList, StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {ListScreenNavigationProp} from '../../../types';
import CustomFAB from '../../components/molecules/fab';
import TodoRenderUI from '../../components/organisms/todo';
import useTodoData from '../../store/selectors/todo';
import BasicContainer from '../../components/atoms/container';

const TodoList = ({navigation}: {navigation: ListScreenNavigationProp}) => {
  const tasks = useTodoData();

  return (
    <BasicContainer>
      <HeadingText text="Todo List" />
      <View style={styles.listButtonContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={({item, index}) => (
              <TodoRenderUI item={item} index={index} navigation={navigation} />
            )}
          />
        </View>
        <CustomFAB onPress={() => navigation.navigate('AddEdit')} />
      </View>
    </BasicContainer>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listButtonContainer: {flex: 2, width: '100%'},
  listContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    flex: 3,
    paddingBottom: 30,
  },
});
