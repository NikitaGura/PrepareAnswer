import {
  BottomLayerAnswer,
  BottomLayerFinish,
  BottomLayerQuestion,
} from '../screens/CheckingQuestionsScreen';
import {CheckingQuestionStore} from '../stores';
import {Dictionary} from '../utils';

abstract class CheckingQuestionsState {
  protected context: CheckingQuestionStore | null = null;

  protected abstract bottomLayout: () => JSX.Element;

  public setContext(context: CheckingQuestionStore) {
    this.context = context;
  }

  abstract getTitleScreen: () => string;

  abstract getTextContent: () => string;

  abstract getResultAnswer: () => string;

  getBottomLayout = () => this.bottomLayout;

  abstract showAnswer: () => void;

  abstract rememberAnswer: () => void;

  abstract notRememberAnswer: () => void;

  abstract repeat: () => void;
}

class CheckingQuestionsQuestion extends CheckingQuestionsState {
  protected bottomLayout = BottomLayerQuestion;

  getTextContent = () => this.context?.currentQuestion?.question || '';

  getResultAnswer = () => '';

  getTitleScreen = () =>
    `${Dictionary.question} ${
      (this.context?.currentQuestionPosition || 0) + 1
    }/${this.context?.getQuestion()?.number}`;

  showAnswer = () => {
    this.context?.moveTo(new CheckingQuestionsAnswer());
  };
  rememberAnswer = () => {};
  notRememberAnswer = () => {};
  repeat = () => {};
}

class CheckingQuestionsAnswer extends CheckingQuestionsState {
  protected bottomLayout = BottomLayerAnswer;

  getTextContent = () => this.context?.currentQuestion?.answer || '';

  getResultAnswer = () => '';

  getTitleScreen = () =>
    `${Dictionary.question} ${
      (this.context?.currentQuestionPosition || 0) + 1
    }/${this.context?.getQuestion()?.number}`;

  showAnswer = () => {};

  rememberAnswer = () => {
    this.context?.increaseRememberedAnswer();
    this.decideNextState();
  };

  notRememberAnswer = () => {
    this.decideNextState();
  };

  repeat = () => {};

  decideNextState = () => {
    const isLastQuestion =
      this.context?.getQuestion()?.number ===
      (this.context?.currentQuestionPosition || 0) + 1;
    if (isLastQuestion) {
      this.context?.moveTo(new CheckingQuestionsFinish());
    } else {
      this.context?.goNextQuestion();
      this.context?.moveTo(new CheckingQuestionsQuestion());
    }
  };
}

class CheckingQuestionsFinish extends CheckingQuestionsState {
  protected bottomLayout = BottomLayerFinish;
  getTextContent = () =>
    `${Dictionary.completed} ${this.context?.getQuestion()?.title}`;

  getResultAnswer = () =>
    `${this.context?.countRememberedAnswer}/${
      this.context?.getQuestion()?.number
    }`;

  getTitleScreen = () => Dictionary.finished;

  showAnswer = () => {};

  rememberAnswer = () => {};

  notRememberAnswer = () => {};

  repeat = () => {
    this.context?.clearState();
    this.context?.moveTo(new CheckingQuestionsQuestion());
  };
}

export {CheckingQuestionsState, CheckingQuestionsQuestion};
