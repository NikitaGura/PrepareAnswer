import {View, StyleSheet} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {useStore} from '../../stores';
import {Dictionary} from '../../utils';

const BottomButtons = () => {
  const {questions} = useStore();
  const question = questions.currentSelectedQuestions?.currentQuestion;

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
      <PrimaryButton onPress={() => {}} title={Dictionary.deleteQuestion} />
    </View>
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

export default observer(BottomButtons);
