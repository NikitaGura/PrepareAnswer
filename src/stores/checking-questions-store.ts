import {makeAutoObservable} from 'mobx';
import {
  CheckingQuestionsQuestion,
  CheckingQuestionsState,
  Questions,
} from '../models';
import {Dictionary} from '../utils';

class CheckingQuestionStore {
  private questions: Questions;
  private currentQuestionIndex = 0;
  private rememberedAnswer = 0;

  private state: CheckingQuestionsState = new CheckingQuestionsQuestion();

  constructor(questions: Questions) {
    this.questions = questions;
    makeAutoObservable(this);
    this.state.setContext(this);
  }

  public moveTo(state: CheckingQuestionsState): void {
    this.state = state;
    this.state.setContext(this);
  }

  get textContent() {
    return this.state.getTextContent();
  }

  get currentQuestionPosition() {
    return this.currentQuestionIndex;
  }

  get currentQuestion() {
    return this.questions.questions[this.currentQuestionIndex];
  }

  get countRememberedAnswer() {
    return this.rememberedAnswer;
  }

  get currentState() {
    return this.state;
  }

  get titleScreenText() {
    return `${Dictionary.question} ${this.currentQuestionPosition + 1}/${
      this.questions.number
    }`;
  }

  getQuestion = () => {
    return this.questions;
  };

  goNextQuestion = () => {
    this.currentQuestionIndex++;
  };

  increaseRememberedAnswer = () => {
    this.rememberedAnswer++;
  };

  clearState = () => {
    this.currentQuestionIndex = 0;
    this.rememberedAnswer = 0;
  };

  showAnswer = () => {
    this.state.showAnswer();
  };

  remeberAnswer = () => {
    this.state.remeberAnswer();
  };

  notRemeberAnswer = () => {
    this.state.notRemeberAnswer();
  };

  repeat = () => {
    this.state.repeat();
  };
}

export default CheckingQuestionStore;
