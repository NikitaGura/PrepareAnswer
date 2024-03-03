import {StyleSheet, View} from 'react-native';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores';

const BottomLayerAnswer = () => {
  const {
    createQuestions: {currentState, inputeStore},
  } = useStore();

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
          disabled={inputeStore.isValueEmpty}
          onPress={() => currentState.moveNext()}
        />
      </View>
      <PrimaryButton
        style={styles.saveButton}
        styleText={styles.buttonText}
        title={Dictionary.saveQuestions}
        disabled={inputeStore.isValueEmpty}
        onPress={() => currentState.save()}
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
