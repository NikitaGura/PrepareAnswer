import {View, StyleSheet} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {useStore} from '../../stores';
import {Dictionary} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {EditQuestionNavigationProp} from '../../navigation';

const BottomButtons = () => {
  const {questions} = useStore();
  const question = questions.currentSelectedQuestions?.currentQuestion;
  const navigation = useNavigation<EditQuestionNavigationProp>();

  const deleteQuestion = () => {
    navigation.pop();
    questions?.currentSelectedQuestions?.deleteCurrentQuestion();
  };

  if (!question) {
    return null;
  }

  return (
    <View style={styles.bottomContent}>
      <PrimaryButton
        onPress={question.form?.actions.submit}
        title={Dictionary.saveQuestion}
      />
      <View style={styles.space} />
      <View style={styles.space} />
      <PrimaryButton
        onPress={deleteQuestion}
        title={Dictionary.deleteQuestion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default observer(BottomButtons);
