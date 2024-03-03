import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Colors} from '../utils';
import {useMemo} from 'react';

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const PrimaryButton = ({title, onPress, style}: Props) => {
  const customStyle = useMemo(() => [styles.container, style], [style]);

  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: Colors.PrimaryBlue75,
    minWidth: 240,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto Medium',
    color: Colors.GrayLightPrimary,
    fontSize: 20,
  },
});

export default PrimaryButton;
