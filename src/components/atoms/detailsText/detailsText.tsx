import {Text} from 'react-native-paper';
import {Task} from '../../../../types';
import Colors from '../../../constants/Colors';

const DetailsText = ({
  item,
  lines,
}: {
  item: Task;
  lines: undefined | number;
}) => {
  return (
    <Text
      variant="headlineSmall"
      numberOfLines={lines}
      style={{
        textDecorationLine: !item.pending ? 'line-through' : 'none',
        textAlign: 'left',
        color: Colors.text,
      }}>
      {item.description}
    </Text>
  );
};

export default DetailsText;