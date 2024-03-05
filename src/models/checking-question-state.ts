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

  getBottomLayout = () => this.bottomLayout;

  abstract showAnswer: () => void;

  abstract remeberAnswer: () => void;

  abstract notRemeberAnswer: () => void;

  abstract repeat: () => void;
}

class CheckingQuestionsQuestion extends CheckingQuestionsState {
  protected bottomLayout = BottomLayerQuestion;

  getTextContent = () => this.context?.currentQuestion.question || '';

  getTitleScreen = () =>
    `${Dictionary.question} ${
      (this.context?.currentQuestionPosition || 0) + 1
    }/${this.context?.getQuestion().number}`;

  showAnswer = () => {
    this.context?.moveTo(new CheckingQuestionsAnswer());
  };
  remeberAnswer = () => {};
  notRemeberAnswer = () => {};
  repeat = () => {};
}

class CheckingQuestionsAnswer extends CheckingQuestionsState {
  protected bottomLayout = BottomLayerAnswer;

  getTextContent = () => this.context?.currentQuestion.answer || '';

  getTitleScreen = () =>
    `${Dictionary.question} ${
      (this.context?.currentQuestionPosition || 0) + 1
    }/${this.context?.getQuestion().number}`;

  showAnswer = () => {};

  remeberAnswer = () => {
    this.context?.increaseRememberedAnswer();
    this.decideNextState();
  };

  notRemeberAnswer = () => {
    this.decideNextState();
  };

  repeat = () => {};

  decideNextState = () => {
    const isLastQuestion =
      this.context?.getQuestion().questions.length ===
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
    `${Dictionary.completed} ${this.context?.getQuestion().title}`;

  getTitleScreen = () => Dictionary.finished;

  showAnswer = () => {};

  remeberAnswer = () => {};

  notRemeberAnswer = () => {};

  repeat = () => {
    this.context?.clearState();
    this.context?.moveTo(new CheckingQuestionsQuestion());
  };
}

export {CheckingQuestionsState, CheckingQuestionsQuestion};
