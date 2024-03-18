import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {Colors} from '../utils';
import {ReactNode, memo, useMemo} from 'react';
import TypeWriter from 'react-native-typewriter';

type Props = {
  text: string;
  children?: ReactNode;
};

const PrimaryTextContent = ({text, children}: Props) => {
  const textStyle = useMemo<StyleProp<TextStyle>>(
    () => [styles.textInput, {textAlign: children ? 'center' : 'left'}],
    [children],
  );

  return (
    <View style={styles.container}>
      <TypeWriter initialDelay={180} typing={1} style={textStyle}>
        {text}
      </TypeWriter>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 80,
    backgroundColor: Colors.LightBluePrimary25,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 24,
    fontFamily: 'Roboto Regular',
    color: Colors.DarkPrimary,
    textAlignVertical: 'top',
  },
});

export default memo(PrimaryTextContent);
