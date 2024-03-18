import {makeAutoObservable} from 'mobx';
import {RealmManager} from '../realm';

import uuid from 'react-native-uuid';

export class Question {
  id: string;
  question: string = '';
  answer: string = '';

  constructor(question: string) {
    this.question = question;
    this.id = uuid.v4() as string;
    makeAutoObservable(this);
  }

  static mapFromRealm = (data: any) => {
    const result = new Question(data.question || '');
    result.answer = data.answer || '';
    result.id = data.id || (uuid.v4() as string);
    return result;
  };
}

export class Questions {
  questions: Question[] = [];
  title: string;
  id: string;

  constructor(title: string) {
    this.title = title;
    this.id = uuid.v4() as string;
    makeAutoObservable(this);
  }

  get number() {
    return this.questions.length;
  }

  static mapFromRealm = (data: any) => {
    const result = new Questions(data.title || '');
    result.id = data.id || (uuid.v4() as string);
    const questions = data.questions;
    for (let i = 0; i < questions.length; i++) {
      result.questions.push(Question.mapFromRealm(questions[i]));
    }
    return result;
  };
}

class QuestionsStore {
  list: Questions[];
  private selectedQuestions: Questions | null = null;

  constructor() {
    makeAutoObservable(this);
    this.list = RealmManager.getQuestionsList();
  }

  selectQuestions = (questions: Questions) => {
    this.selectedQuestions = questions;
  };

  updateList = (questions: Questions) => {
    this.list.push(questions);
  };

  get currentSelectedQuestion() {
    return this.list.find(({id}) => id === this.selectedQuestions?.id);
  }
}

export default QuestionsStore;
