import {StyleSheet} from 'react-native';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores';

const BottomLayerName = () => {
  const {
    createQuestions: {currentState, inputeStore},
  } = useStore();

  return (
    <PrimaryButton
      style={styles.nextButton}
      styleText={styles.nextButtonText}
      title={Dictionary.next}
      disabled={inputeStore.isValueEmpty}
      onPress={() => currentState.moveNext()}
    />
  );
};

const styles = StyleSheet.create({
  nextButton: {
    marginTop: 50,
  },
  nextButtonText: {
    fontSize: 28,
  },
});

export default observer(BottomLayerName);
