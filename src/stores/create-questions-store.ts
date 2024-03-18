import {makeAutoObservable} from 'mobx';
import {CreateQuestionsName, CreateQuestionsState} from '../models';
import InputStore from './input-store';
import {Question, Questions} from './list-questions-store';

class CreateQuestionsStore {
  private state: CreateQuestionsState = new CreateQuestionsName();
  private questions: Questions | null = null;
  private selectedIndexQuestion: number = 0;
  public inputStore: InputStore = new InputStore();

  constructor() {
    makeAutoObservable(this);
    this.state.setContext(this);
  }

  public moveTo(state: CreateQuestionsState): void {
    this.state = state;
    this.state.setContext(this);
  }

  public createQuestions() {
    this.questions = new Questions(this.inputStore.value);
  }

  public updateQuestions = () => {
    if (this.questions === null) {
      throw new Error('questions is null');
    }

    this.questions.title = this.inputStore.value;
  };

  public createQuestion = () => {
    if (this.questions === null) {
      throw new Error('questions is null');
    }
    this.questions.questions.push(new Question(this.inputStore.value));
  };

  public updateQuestion = () => {
    if (this.questions === null) {
      throw new Error('questions is null');
    }
    this.questions.questions[this.selectedIndexQuestion].question =
      this.inputStore.value;
  };

  public updateAnswer = () => {
    if (this.questions === null) {
      throw new Error('questions is null');
    }
    this.questions.questions[this.selectedIndexQuestion].answer =
      this.inputStore.value;
  };

  public getQuestions = () => {
    return this.questions;
  };

  public nextIndexQuestion = () => {
    this.selectedIndexQuestion++;
  };

  public backIndexQuestion = () => {
    this.selectedIndexQuestion--;
  };

  getSelectedIndexQuestion = () => {
    return this.selectedIndexQuestion;
  };

  get selectedQuestion() {
    return this.questions?.questions[this.selectedIndexQuestion];
  }

  get currentState() {
    return this.state;
  }

  clearState = () => {
    this.state = new CreateQuestionsName();
    this.questions = null;
    this.selectedIndexQuestion = 0;
    this.inputStore = new InputStore();
  };
}

export default CreateQuestionsStore;
