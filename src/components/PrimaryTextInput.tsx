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
};

const PrimaryTextInput = ({placeholder}: Props) => {
  const [height, setHeight] = useState(0);

  const onContentSizeChange = useCallback(
    (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) =>
      setHeight(event.nativeEvent.contentSize.height),
    [],
  );

  const containerStyle = useMemo(
    () => [styles.container, {height: height + paddingContainer * 2}],
    [height],
  );

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.DarkPrimary25}
        style={styles.textInput}
        selectionColor={Colors.PrimaryBlue}
        multiline={true}
        onContentSizeChange={onContentSizeChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 250,
    width: '100%',
    backgroundColor: Colors.LightBluePrimary25,
    borderRadius: 20,
    padding: paddingContainer,
  },
  textInput: {
    fontSize: 24,
    fontFamily: 'Roboto Regular',
    color: Colors.DarkPrimary,
    flex: 1,
    textAlignVertical: 'top',
  },
});

export default memo(PrimaryTextInput);
