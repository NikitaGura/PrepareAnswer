import {makeAutoObservable} from 'mobx';
import {RealmManager} from '../realm';
import {Question} from './list-questions-store';

class EditQuestionStore {
  question: Question;
  hasChanges = false;

  constructor(question: Question) {
    this.question = question;
    makeAutoObservable(this);
  }

  updateAnswer = (answer: string) => {
    this.question.answer = answer;
    this.triggerUpdateQuestion();
    this.hasChanges = true;
  };

  updateQuestion = (question: string) => {
    this.question.question = question;
    this.triggerUpdateQuestion();
    this.hasChanges = true;
  };

  private triggerUpdateQuestion = () => {
    this.question = {...this.question};
  };

  saveChanges = () => {
    this.hasChanges = false;
    RealmManager.updateQuestion(this.question);
  };
}

export default EditQuestionStore;
