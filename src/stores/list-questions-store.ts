import {makeAutoObservable} from 'mobx';
import {Questions} from '../models';
import {mockQuestionsList} from '../utils';

class QuestionsStore {
  list: Questions[] = mockQuestionsList;
  selectedListQuestions: Questions | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectListQuestions = (questions: Questions) => {
    this.selectedListQuestions = questions;
  };
}

export default QuestionsStore;
