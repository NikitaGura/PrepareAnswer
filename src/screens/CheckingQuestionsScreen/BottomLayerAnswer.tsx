import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {StyleSheet, View} from 'react-native';
import {useStore} from '../../stores';

const BottomLayerAnswer = () => {
  const {checkingQuestionStore} = useStore();

  return (
    <View>
      <PrimaryButton
        title={Dictionary.rememberAnswer}
        onPress={checkingQuestionStore.rememberAnswer}
      />
      <View style={styles.space} />
      <PrimaryButton
        title={Dictionary.notRemember}
        onPress={checkingQuestionStore.notRememberAnswer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    height: 30,
  },
});

export default observer(BottomLayerAnswer);
