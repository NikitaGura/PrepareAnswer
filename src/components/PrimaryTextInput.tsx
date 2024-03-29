import {memo, useCallback, useMemo, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  View,
} from 'react-native';
import {Colors} from '../utils';

const paddingContainer = 20;

type Props = {
  placeholder: string;
  value?: string;
  updateValue?: (value: string) => void;
  minHeight?: number;
};

const PrimaryTextInput = ({
  placeholder,
  value,
  updateValue,
  minHeight = 250,
}: Props) => {
  const [height, setHeight] = useState(0);

  const onContentSizeChange = useCallback(
    (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) =>
      setHeight(event.nativeEvent.contentSize.height),
    [],
  );

  const containerStyle = useMemo(
    () => [
      styles.container,
      {height: height + paddingContainer * 2, minHeight: minHeight},
    ],
    [height, minHeight],
  );

  return (
    <View style={containerStyle}>
      <TextInput
        scrollEnabled={false}
        placeholder={placeholder}
        placeholderTextColor={Colors.DarkPrimary25}
        style={styles.textInput}
        selectionColor={Colors.PrimaryBlue}
        multiline={true}
        onContentSizeChange={onContentSizeChange}
        value={value}
        onChangeText={updateValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.LightBluePrimary25,
    borderRadius: 20,
    padding: paddingContainer,
  },
  textInput: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'Roboto Regular',
    color: Colors.DarkPrimary,
    flex: 1,
    textAlignVertical: 'top',
  },
});

export default memo(PrimaryTextInput);
