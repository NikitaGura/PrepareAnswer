import {ScreenTitle, ScreenWrapper} from '../../components';
import {Dictionary} from '../../utils';

const CreateQuestionsScreen = () => {
  return (
    <ScreenWrapper>
      <ScreenTitle title={Dictionary.createQuestions} />
    </ScreenWrapper>
  );
};

export default CreateQuestionsScreen;
