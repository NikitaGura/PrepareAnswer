import React from 'react';
import {ScreenTitle, PrimaryTextInput, PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {useRoute} from '@react-navigation/native';
import {EditQuestionRouteProps} from '../../navigation';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {observer} from 'mobx-react-lite';

const EditQuestionScreen = () => {
  const {
    params: {editQuestionStore},
  } = useRoute<EditQuestionRouteProps>();
  const {question, updateAnswer, updateQuestion} = editQuestionStore;

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      keyboardVerticalOffset={60}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}>
        <ScreenTitle title={Dictionary.editQuestion} />
        <View style={styles.space} />
        <PrimaryTextInput
          minHeight={80}
          placeholder={''}
          value={question.question}
          updateValue={updateQuestion}
        />
        <View style={styles.space} />
        <PrimaryTextInput
          minHeight={80}
          placeholder={''}
          value={question.answer}
          updateValue={updateAnswer}
        />
        <View style={styles.bottomContent}>
          <PrimaryButton onPress={() => {}} title={Dictionary.saveQuestion} />
          <View style={styles.space} />
          <View style={styles.space} />
          <PrimaryButton onPress={() => {}} title={Dictionary.deleteQuestion} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  containerScroll: {
    flexGrow: 1,
    padding: 10,
    paddingTop: 15,
  },
  space: {
    height: 10,
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    minHeight: 200,
    paddingHorizontal: '20%',
  },
});

export default observer(EditQuestionScreen);
