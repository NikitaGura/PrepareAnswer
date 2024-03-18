import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useStore} from '../../stores';
import {PrimaryTextInput} from '../../components';
import {observer} from 'mobx-react-lite';

const EditInputs = () => {
  const {questions} = useStore();
  const question = questions.currentSelectedQuestions?.currentQuestion;

  useEffect(() => {
    question?.setupFields();
  }, [question]);

  if (!question) {
    return null;
  }

  return (
    <View>
      <View style={styles.space} />
      <PrimaryTextInput
        minHeight={80}
        placeholder={''}
        value={question.questionField?.state.value}
        updateValue={question.questionField?.actions.onChange}
      />
      <View style={styles.space} />
      <PrimaryTextInput
        minHeight={80}
        placeholder={''}
        value={question.answerField?.state.value}
        updateValue={question.answerField?.actions.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    height: 10,
  },
});

export default observer(EditInputs);
