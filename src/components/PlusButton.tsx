import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconPlus} from '../images';
import {Colors} from '../utils';

type Props = {
  onPress: () => void;
};

const PlusButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.touch} onPress={onPress}>
      <IconPlus />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: Colors.VioletPrimary,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlusButton;
