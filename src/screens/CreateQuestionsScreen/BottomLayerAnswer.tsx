import {StyleSheet, View} from 'react-native';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores';
import {useNavigation} from '@react-navigation/native';
import {CreateQuestionsNavigationProp} from '../../navigation';

const BottomLayerAnswer = () => {
  const {
    createQuestions: {currentState, inputStore: inputStore},
  } = useStore();

  const navigation = useNavigation<CreateQuestionsNavigationProp>();

  const onSavePress = () => {
    currentState.save();
    navigation.pop();
  };

  return (
    <View>
      <View style={styles.container}>
        <PrimaryButton
          style={styles.button}
          styleText={styles.buttonText}
          title={Dictionary.back}
          onPress={() => currentState.moveBack()}
        />
        <PrimaryButton
          style={styles.button}
          styleText={styles.buttonText}
          title={Dictionary.next}
          disabled={inputStore.isValueEmpty}
          onPress={() => currentState.moveNext()}
        />
      </View>
      <PrimaryButton
        style={styles.saveButton}
        styleText={styles.buttonText}
        title={Dictionary.saveQuestions}
        disabled={inputStore.isValueEmpty}
        onPress={onSavePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    minWidth: 160,
  },
  buttonText: {
    fontSize: 28,
  },
  saveButton: {
    marginTop: 30,
  },
});

export default observer(BottomLayerAnswer);
