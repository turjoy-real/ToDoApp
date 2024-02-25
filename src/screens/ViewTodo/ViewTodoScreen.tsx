import {StyleSheet, View} from 'react-native';
import HeadingText from '../../components/atoms/headingText';
import {ViewScreenRouteProp} from '../../../types';
import CustomCheckBox from '../../components/molecules/customCheckBox';
import DetailsText from '../../components/atoms/detailsText';
import useTodoData from '../../store/selectors/todo';
import BasicContainer from '../../components/atoms/container';

const ViewTodo = ({route}: {route: ViewScreenRouteProp}) => {
  const tasks = useTodoData();
  const index = route.params.index;

  return (
    <BasicContainer>
      <HeadingText text="Todo Details" />
      <View style={styles.detailsContainer}>
        <View style={styles.taskActionsContainer}>
          <View style={styles.taskContainer}>
            <CustomCheckBox item={tasks[index]} index={index} />
            <DetailsText item={tasks[index]} lines={undefined} />
          </View>
        </View>
      </View>
    </BasicContainer>
  );
};

export default ViewTodo;

const styles = StyleSheet.create({
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
