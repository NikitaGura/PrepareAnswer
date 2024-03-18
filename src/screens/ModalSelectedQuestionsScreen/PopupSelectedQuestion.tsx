import {StyleSheet, Text} from 'react-native';
import {Popup, PrimaryButton} from '../../components';
import {Colors, Dictionary} from '../../utils';
import {useStore} from '../../stores';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {MainScreenQuestionsNavigationProp, ScreensName} from '../../navigation';

const PopupSelectedQuestion = () => {
  const {
    questions: {currentSelectedQuestions, deleteCurrentSelectedQuestions},
  } = useStore();

  const navigation = useNavigation<MainScreenQuestionsNavigationProp>();

  const start = () => {
    navigation.push(ScreensName.CheckingQuestions);
  };

  const editQuestions = () => {
    navigation.push(ScreensName.EditQuestions);
  };

  const deleteSelectedQuestions = () => {
    deleteCurrentSelectedQuestions();
    navigation.pop();
  };

  return (
    <Popup>
      <Text
        style={
          styles.textSelected
        }>{`${Dictionary.selected} ${currentSelectedQuestions?.title}`}</Text>
      <PrimaryButton
        style={styles.button}
        title={Dictionary.startQuestions}
        onPress={start}
      />
      <PrimaryButton
        style={styles.button}
        title={Dictionary.editQuestions}
        onPress={editQuestions}
      />
      <PrimaryButton
        style={styles.button}
        title={Dictionary.deleteQuestions}
        onPress={deleteSelectedQuestions}
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
