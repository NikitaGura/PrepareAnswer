import {ScrollView, StyleSheet, View} from 'react-native';
import {PrimaryTextContent, ScreenTitle, ScreenWrapper} from '../../components';
import {Dictionary} from '../../utils';
import {observer} from 'mobx-react-lite';
import {useRoute} from '@react-navigation/native';
import {CheckingQuestionsRouteProps} from '../../navigation';

const CheckingQuestionsScreen = () => {
  const {
    params: {checkingQuestionStore},
  } = useRoute<CheckingQuestionsRouteProps>();

  const BottomLayer = checkingQuestionStore.currentState.getBottomLayout();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ScreenTitle title={Dictionary.question} />
        <View style={styles.textContent}>
          <PrimaryTextContent text={checkingQuestionStore.textContent} />
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
  },
});

export default observer(CheckingQuestionsScreen);
