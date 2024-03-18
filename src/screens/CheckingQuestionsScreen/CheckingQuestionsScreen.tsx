import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PrimaryTextContent, ScreenTitle, ScreenWrapper} from '../../components';
import {observer} from 'mobx-react-lite';
import {Colors, sharedValues} from '../../utils';
import {useStore} from '../../stores';
import {useEffect} from 'react';

const CheckingQuestionsScreen = () => {
  const {questions, checkingQuestionStore} = useStore();

  useEffect(() => {
    if (questions.currentSelectedQuestions) {
      checkingQuestionStore.updateQuestions(questions.currentSelectedQuestions);
    }
  }, [checkingQuestionStore, questions.currentSelectedQuestions]);

  const BottomLayer = checkingQuestionStore.currentState.getBottomLayout();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ScreenTitle title={checkingQuestionStore.titleScreenText} />
        <View style={styles.textContent}>
          <PrimaryTextContent text={checkingQuestionStore.textContent}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                {checkingQuestionStore.resultAnswer}
              </Text>
            </View>
          </PrimaryTextContent>
          <BottomLayer />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  textContent: {
    marginVertical: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: sharedValues.paddingHorizontalScreen,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  resultText: {
    fontSize: 40,
    color: Colors.DarkPrimary,
    fontFamily: 'Roboto Bold',
  },
});

export default observer(CheckingQuestionsScreen);
