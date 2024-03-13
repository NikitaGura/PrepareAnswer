import {makeAutoObservable} from 'mobx';
import {Question} from '../models';

class EditQuestionStore {
  question: Question;

  constructor(question: Question) {
    this.question = question;
    makeAutoObservable(this);
  }

  updateAnswer = (answer: string) => {
    this.question.answer = answer;
    this.triggerUpdateQuestion();
  };

  updateQuestion = (question: string) => {
    this.question.question = question;
    this.triggerUpdateQuestion();
  };

  private triggerUpdateQuestion = () => {
    this.question = {...this.question};
  };
}

export default EditQuestionStore;
