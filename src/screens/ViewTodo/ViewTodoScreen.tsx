import {StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {TodoContextType, ViewScreenRouteProp} from '../../../types';
import CustomCheckBox from '../../components/molecules/customCheckBox';
import DetailsText from '../../components/atoms/detailsText';
import {useContext} from 'react';
import {TodoContext} from '../../todoContext';

const ViewTodo = ({route}: {route: ViewScreenRouteProp}) => {
  const {tasks} = useContext(TodoContext) as TodoContextType;
  const item = route.params.task;
  const index = route.params.index;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeadingText text="Todo Details" />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.taskActionsContainer}>
          <View style={styles.taskContainer}>
            <CustomCheckBox item={item} index={index} />
            <DetailsText item={tasks[index]} lines={undefined} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewTodo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
  },
  headerContainer: {flex: 1, justifyContent: 'center'},
  detailsContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    flex: 2,
    paddingBottom: 30,
  },
  taskContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 20,
  },
  taskActionsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});
