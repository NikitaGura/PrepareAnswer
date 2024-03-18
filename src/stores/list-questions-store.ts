import {makeAutoObservable, runInAction} from 'mobx';
import {RealmManager} from '../realm';

import uuid from 'react-native-uuid';
import {IQuestion, IQuestions} from '../models';
import {Field, Form, createField, createForm} from 'mobx-easy-form';

export class Question implements IQuestion {
  id: string;
  question: string = '';
  answer: string = '';

  form: Form | null = null;
  questionField: Field<string> | null = null;
  answerField: Field<string> | null = null;

  constructor(question: string) {
    this.question = question;
    this.id = uuid.v4() as string;
    makeAutoObservable(this);
  }

  setupFields = () => {
    this.form = createForm({onSubmit: this.saveChanges});
    this.questionField = createField({
      id: 'question',
      initialValue: this.question,
      form: this.form,
    });
    this.answerField = createField({
      id: 'answer',
      initialValue: this.answer,
      form: this.form,
    });
  };

  saveChanges = ({values}: {values: any}) => {
    this.question = values.question;
    this.answer = values.answer;
    RealmManager.updateQuestion(this);
  };

  static mapFromRealm = (data: any) => {
    const result = new Question(data.question || '');
    result.answer = data.answer || '';
    result.id = data.id || (uuid.v4() as string);
    return result;
  };
}

export class Questions implements IQuestions {
  questions: Question[] = [];
  private selectedQuestion: Question | null = null;
  title: string;
  id: string;

  constructor(title: string) {
    this.title = title;
    this.id = uuid.v4() as string;
    makeAutoObservable(this);
  }

  selectQuestion = (question: Question) => {
    this.selectedQuestion = question;
  };

  get number() {
    return this.questions.length;
  }

  get currentQuestion() {
    return this.questions.find(({id}) => id === this.selectedQuestion?.id);
  }

  deleteCurrentQuestion = () => {
    if (!this.currentQuestion) {
      return;
    }
    RealmManager.deleteQuestion(this.currentQuestion);
    this.questions = this.questions.filter(
      ({id}) => this.currentQuestion?.id !== id,
    );
  };

  addQuestion = (question: Question) => {
    if (!this.questions) {
      return;
    }
    runInAction(() => {
      this.questions.push(question);
    });

    RealmManager.updateQuestions(this);
  };

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
    this.list = RealmManager.getQuestionsList();
    makeAutoObservable(this);
  }

  selectQuestions = (questions: Questions) => {
    this.selectedQuestions = questions;
  };

  updateList = (questions: Questions) => {
    this.list.push(questions);
  };

  deleteCurrentSelectedQuestions = () => {
    if (!this.currentSelectedQuestions) {
      return;
    }

    RealmManager.deleteQuestions(this.currentSelectedQuestions);
    this.list = this.list.filter(({id}) => id !== this.selectedQuestions?.id);
  };

  get currentSelectedQuestions() {
    return this.list.find(({id}) => id === this.selectedQuestions?.id);
  }

  get currentList() {
    return this.list;
  }
}

export default QuestionsStore;
