import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {useStore} from '../../stores';

const BottomLayerQuestion = () => {
  const {checkingQuestionStore} = useStore();

  return (
    <PrimaryButton
      title={Dictionary.showAnswer}
      onPress={checkingQuestionStore.showAnswer}
    />
  );
};

export default observer(BottomLayerQuestion);
