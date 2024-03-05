import {StyleSheet, Text} from 'react-native';
import {Popup, PrimaryButton} from '../../components';
import {Colors, Dictionary} from '../../utils';
import {useStore} from '../../stores';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {MainScreenQuestionsNavigationProp, ScreensName} from '../../navigation';

const PopupSelectedQuestion = () => {
  const {
    questions: {selectedListQuestions},
  } = useStore();

  const navigation = useNavigation<MainScreenQuestionsNavigationProp>();

  return (
    <Popup>
      <Text
        style={
          styles.textSelected
        }>{`${Dictionary.selected} ${selectedListQuestions?.title}`}</Text>
      <PrimaryButton
        style={styles.button}
        title={Dictionary.startQuestions}
        onPress={() => {
          navigation.pop();
          navigation.push(ScreensName.CheckingQuestions);
        }}
      />
      <PrimaryButton
        style={styles.button}
        title={Dictionary.editeQuestions}
        onPress={() => {}}
      />
      <PrimaryButton
        style={styles.button}
        title={Dictionary.deleteQuestions}
        onPress={() => {}}
      />
    </Popup>
  );
};

const styles = StyleSheet.create({
  textSelected: {
    fontFamily: 'Roboto Medium',
    fontSize: 24,
    color: Colors.DarkPrimary,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  button: {
    marginTop: 40,
  },
});

export default observer(PopupSelectedQuestion);
