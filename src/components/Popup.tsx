import {ReactNode, memo, useMemo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from '../utils';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Popup = ({children, style}: Props) => {
  const custopnStyle = useMemo(() => [styles.container, style], [style]);
  return <View style={custopnStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GrayLightPrimary,
    width: '90%',
    marginHorizontal: '5%',
    minHeight: 300,
    marginVertical: 100,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 40,
  },
});

export default memo(Popup);
