import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {
  CheckingQuestionsNavigationProp,
  CheckingQuestionsRouteProps,
} from '../../navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

const BottomLayerFinish = () => {
  const {
    params: {checkingQuestionStore},
  } = useRoute<CheckingQuestionsRouteProps>();

  const navigation = useNavigation<CheckingQuestionsNavigationProp>();

  return (
    <View>
      <PrimaryButton
        title={Dictionary.goBackToList}
        onPress={() => navigation.pop(2)}
      />
      <View style={styles.space} />
      <PrimaryButton
        title={Dictionary.repeat}
        onPress={checkingQuestionStore.repeat}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    height: 30,
  },
});

export default observer(BottomLayerFinish);
