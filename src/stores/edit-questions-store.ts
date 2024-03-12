import {makeAutoObservable} from 'mobx';
import {Questions} from '../models';

class EditQuestionsStore {
  questions: Questions;

  constructor(questions: Questions) {
    this.questions = questions;
    makeAutoObservable(this);
  }
}

export default EditQuestionsStore;
