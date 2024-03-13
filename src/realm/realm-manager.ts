import {QuestionRealm, QuestionsRealm} from './schems';
import {Question, Questions} from '../models';
import Realm, {UpdateMode} from 'realm';

class RealmManager {
  private realm: Realm;

  public constructor() {
    this.realm = new Realm({schema: this.getSchemes(), schemaVersion: 3});
  }

  getSchemes() {
    return [QuestionRealm, QuestionsRealm];
  }

  createQuestions(questions: Questions) {
    this.realm.write(() => {
      this.realm.create(QuestionsRealm, questions);
    });
  }

  getQuestionsList(): Questions[] {
    const response = this.realm.objects(QuestionsRealm);
    const result: Questions[] = [];

    if (response) {
      for (let i = 0; i < response.length; i++) {
        result.push(Questions.mapFromRealm(response[i]));
      }
    }

    return result;
  }

  updateQuestion(question: Question) {
    this.realm.write(() => {
      this.realm.create(QuestionRealm, question, UpdateMode.Modified);
    });
  }
}

export default new RealmManager();
