import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: ReactNode;
};

const ScreenWrapper = ({children}: Props) => {
  return <View style={styles.screen}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    margin: 10,
  },
});

export default ScreenWrapper;
