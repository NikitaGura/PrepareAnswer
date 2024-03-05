import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {CheckingQuestionsRouteProps} from '../../navigation';

const BottomLayerAnswer = () => {
  const {
    params: {checkingQuestionStore},
  } = useRoute<CheckingQuestionsRouteProps>();

  return (
    <View>
      <PrimaryButton
        title={Dictionary.rememberAnswer}
        onPress={checkingQuestionStore.remeberAnswer}
      />
      <View style={styles.space} />
      <PrimaryButton
        title={Dictionary.notRemember}
        onPress={checkingQuestionStore.notRemeberAnswer}
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
