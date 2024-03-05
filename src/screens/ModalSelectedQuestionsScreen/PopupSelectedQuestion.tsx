import {StyleSheet, Text} from 'react-native';
import {Popup, PrimaryButton} from '../../components';
import {Colors, Dictionary} from '../../utils';
import {useStore} from '../../stores';
import {observer} from 'mobx-react-lite';

const PopupSelectedQuestion = () => {
  const {
    questions: {selectedListQuestions},
  } = useStore();

  return (
    <Popup>
      <Text
        style={
          styles.textSelected
        }>{`${Dictionary.selected} ${selectedListQuestions?.title}`}</Text>
      <PrimaryButton
        style={styles.button}
        title={Dictionary.startQuestions}
        onPress={() => {}}
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
