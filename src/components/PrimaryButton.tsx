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
  disabled?: boolean;
};

const PrimaryButton = ({title, disabled, onPress, style, styleText}: Props) => {
  const customStyle = useMemo(
    () => [
      styles.container,
      style,
      {
        backgroundColor: disabled
          ? Colors.GrayLightPrimary
          : Colors.PrimaryBlue75,
      },
    ],
    [style, disabled],
  );
  const customStyleText = useMemo(
    () => [
      styles.text,
      styleText,
      {
        color: disabled ? Colors.DarkPrimary50 : Colors.GrayLightPrimary,
      },
    ],
    [styleText, disabled],
  );

  return (
    <TouchableOpacity disabled={disabled} style={customStyle} onPress={onPress}>
      <Text style={customStyleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    minWidth: 240,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto Medium',
    fontSize: 20,
  },
});

export default memo(PrimaryButton);
