import {makeAutoObservable} from 'mobx';
import {Question} from '../models';
import {RealmManager} from '../realm';

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
