import {FlatList, StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {useContext} from 'react';
import {ListScreenNavigationProp, TodoContextType} from '../../../types';
import {TodoContext} from '../../todoContext';
import CustomFAB from '../../components/molecules/fab';
import TodoRenderUI from '../../components/organisms/todo';

const TodoList = ({navigation}: {navigation: ListScreenNavigationProp}) => {
  const {tasks} = useContext(TodoContext) as TodoContextType;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeadingText text="Todo List" />
      </View>
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
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
  },
  headerContainer: {flex: 1, justifyContent: 'center'},
  listButtonContainer: {flex: 2, width: '100%'},
  listContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    flex: 3,
    paddingBottom: 30,
  },
});
