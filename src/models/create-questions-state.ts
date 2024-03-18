import {RealmManager} from '../realm';
import {
  BottomLayerAnswer,
  BottomLayerName,
  BottomLayerQuestion,
} from '../screens/CreateQuestionsScreen';
import {CreateQuestionsStore, rootStore} from '../stores';
import {Dictionary} from '../utils';

abstract class CreateQuestionsState {
  protected context: CreateQuestionsStore | null = null;

  protected abstract topTitle: string;
  protected abstract placeholder: string;
  protected abstract bottomLayout: () => JSX.Element;

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
    if (this.context === null) {
      throw Error('Context is null');
    }

    if (this.context.selectedQuestion) {
      this.context.updateQuestion();
    } else {
      this.context.createQuestion();
    }

    this.context.inputStore.updateValue(
      this.context.selectedQuestion?.answer || '',
    );

    this.context.moveTo(new CreateQuestionsAnswer());
  };

  moveBack = () => {
    if (this.context === null) {
      throw Error('Context is null');
    }
    if (this.context.selectedQuestion) {
      this.context.updateQuestion();
    }

    if (this.context.getSelectedIndexQuestion() > 0) {
      this.context.backIndexQuestion();
      this.context.inputStore.updateValue(
        this.context.selectedQuestion?.answer || '',
      );
      this.context.moveTo(new CreateQuestionsAnswer());
    } else {
      this.context.inputStore.updateValue(
        this.context.getQuestions()?.title || '',
      );
      this.context.moveTo(new CreateQuestionsName());
    }
  };
  save = () => {};
}

class CreateQuestionsName extends CreateQuestionsState {
  protected topTitle: string = Dictionary.pleaseWriteNameOfQuestions;
  protected placeholder: string = Dictionary.typeName;
  protected bottomLayout = BottomLayerName;

  moveNext = () => {
    if (this.context === null) {
      throw Error('Context is null');
    }

    if (this.context.getQuestions() === null) {
      this.context.createQuestions();
    } else {
      this.context.updateQuestions();
    }

    this.context.inputStore.updateValue(
      this.context.selectedQuestion?.question || '',
    );

    this.context.moveTo(new CreateQuestionsQuestion());
  };
  moveBack = () => {};
  save = () => {};
}

class CreateQuestionsAnswer extends CreateQuestionsState {
  protected topTitle: string = Dictionary.pleaseWriteAnswer;
  protected placeholder: string = Dictionary.typeAnswer;
  protected bottomLayout = BottomLayerAnswer;

  moveBack = () => {
    if (this.context === null) {
      throw Error('Context is null');
    }

    if (this.context.selectedQuestion) {
      this.context.updateAnswer();
    }

    this.context.inputStore.updateValue(
      this.context.selectedQuestion?.question || '',
    );

    this.context?.moveTo(new CreateQuestionsQuestion());
  };
  moveNext = () => {
    if (this.context === null) {
      throw Error('Context is null');
    }

    if (this.context.selectedQuestion) {
      this.context.updateAnswer();
    }

    this.context.nextIndexQuestion();

    this.context.inputStore.updateValue(
      this.context.selectedQuestion?.question || '',
    );

    this.context.moveTo(new CreateQuestionsQuestion());
  };
  save = () => {
    if (this.context === null) {
      throw Error('Context is null');
    }

    const questions = this.context.getQuestions();
    if (questions !== null) {
      rootStore.questions.updateList(questions);
      RealmManager.createQuestions(questions);
    }
    this.context.clearState();
  };
}

export {CreateQuestionsState, CreateQuestionsName};
