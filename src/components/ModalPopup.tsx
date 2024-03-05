import React, {ReactNode, memo} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {
  children: ReactNode;
};

const ModalPopup = ({children}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.conainer}>
      <Pressable style={styles.pressable} onPress={() => navigation.goBack()} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  pressable: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default memo(ModalPopup);
