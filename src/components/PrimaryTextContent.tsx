import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../utils';
import {memo} from 'react';

type Props = {
  text: string;
};

const PrimaryTextContent = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 100,
    backgroundColor: Colors.LightBluePrimary25,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 24,
    fontFamily: 'Roboto Regular',
    color: Colors.DarkPrimary,
    textAlignVertical: 'top',
    textAlign: 'center',
  },
});

export default memo(PrimaryTextContent);
