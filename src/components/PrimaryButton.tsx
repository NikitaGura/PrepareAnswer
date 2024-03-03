import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Colors} from '../utils';
import {memo, useMemo} from 'react';

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

const PrimaryButton = ({title, onPress, style, styleText}: Props) => {
  const customStyle = useMemo(() => [styles.container, style], [style]);
  const customStyleText = useMemo(() => [styles.text, styleText], [styleText]);

  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      <Text style={customStyleText}>{title}</Text>
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

export default memo(PrimaryButton);
