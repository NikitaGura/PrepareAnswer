import React from 'react';
import {ScreenTitle} from '../../components';
import {Dictionary} from '../../utils';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores';
import EditInputs from './EditInputs';

const EditQuestionScreen = () => {
  const {questions} = useStore();
  const question = questions.currentSelectedQuestions?.currentQuestion;

  if (!question) {
    return null;
  }

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
        <EditInputs />
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
});

export default observer(EditQuestionScreen);
