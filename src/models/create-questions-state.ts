import {
  BottomLayerAnswer,
  BottomLayerName,
  BottomLayerQuestion,
} from '../screens/CreateQuestionsScreen';
import {CreateQuestionsStore} from '../stores';
import {Dictionary} from '../utils';

abstract class CreateQuestionsState {
  protected context: CreateQuestionsStore | undefined;

  protected abstract topTitle: string;
  protected abstract placeholder: string;
  protected abstract bottomLayout: (() => Element) & {displayName: string};

  public setContext(context: CreateQuestionsStore) {
    this.context = context;
  }

  getTopTitle = () => this.topTitle;

  getPlaceholder = () => this.placeholder;

  getBottomLayout = () => this.bottomLayout;

  abstract moveNext: () => void;

  abstract moveBack: () => void;

  abstract save: () => void;
}

class CreateQuestionsQuestion extends CreateQuestionsState {
  protected topTitle: string = Dictionary.pleaseWriteQuestion;
  protected placeholder: string = Dictionary.typeQuestion;
  protected bottomLayout = BottomLayerQuestion;

  moveNext = () => {
    this.context?.moveTo(new CreateQuestionsAnswer());
  };
  moveBack = () => {
    this.context?.moveTo(new CreateQuestionsName());
  };
  save = () => {};
}

class CreateQuestionsName extends CreateQuestionsState {
  protected topTitle: string = Dictionary.pleaseWriteNameOfQuestions;
  protected placeholder: string = Dictionary.typeName;
  protected bottomLayout = BottomLayerName;

  moveNext = () => {
    this.context?.moveTo(new CreateQuestionsQuestion());
  };
  moveBack = () => {};
  save = () => {};
}

class CreateQuestionsAnswer extends CreateQuestionsState {
  protected topTitle: string = Dictionary.pleaseWriteQuestion;
  protected placeholder: string = Dictionary.typeQuestion;
  protected bottomLayout = BottomLayerAnswer;

  moveBack = () => {
    this.context?.moveTo(new CreateQuestionsQuestion());
  };
  moveNext = () => {
    this.context?.moveTo(new CreateQuestionsQuestion());
  };
  save = () => {
    this.context?.moveTo(new CreateQuestionsName());
  };
}

export {CreateQuestionsState, CreateQuestionsName};
