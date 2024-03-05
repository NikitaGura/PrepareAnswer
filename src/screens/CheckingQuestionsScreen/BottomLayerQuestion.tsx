import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {useRoute} from '@react-navigation/native';
import {CheckingQuestionsRouteProps} from '../../navigation';

const BottomLayerQuestion = () => {
  const {
    params: {checkingQuestionStore},
  } = useRoute<CheckingQuestionsRouteProps>();

  return (
    <PrimaryButton
      title={Dictionary.showAnswer}
      onPress={checkingQuestionStore.showAnswer}
    />
  );
};

export default observer(BottomLayerQuestion);
