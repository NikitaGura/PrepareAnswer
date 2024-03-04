import {QuestionRealm, QuestionsRealm} from './schems';
import {Questions} from '../models';
import Realm from 'realm';

class RealmManager {
  private realm: Realm;

  public constructor() {
    this.realm = new Realm({schema: this.getSchems(), schemaVersion: 3});
  }

  getSchems() {
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
}

export default new RealmManager();
