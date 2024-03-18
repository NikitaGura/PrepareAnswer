import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {CheckingQuestionsNavigationProp} from '../../navigation';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {useStore} from '../../stores';

const BottomLayerFinish = () => {
  const {checkingQuestionStore} = useStore();

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
