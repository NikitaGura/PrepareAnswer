import {makeAutoObservable} from 'mobx';
import {Questions} from '../models';
import {RealmManager} from '../realm';

class QuestionsStore {
  list: Questions[];
  selectedListQuestions: Questions | null = null;

  constructor() {
    makeAutoObservable(this);
    this.list = RealmManager.getQuestionsList();
  }

  selectListQuestions = (questions: Questions) => {
    this.selectedListQuestions = questions;
  };

  updateList = (questions: Questions) => {
    this.list.push(questions);
  };
}

export default QuestionsStore;
