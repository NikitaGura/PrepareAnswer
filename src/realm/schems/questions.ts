import {ObjectSchema, Object} from 'realm';

class QuestionsRealm extends Object<QuestionsRealm> {
  id!: string;
  title!: string;
  questions!: Realm.List<QuestionRealm>;

  static schema: ObjectSchema = {
    name: 'QuestionsRealm',
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      questions: 'QuestionRealm[]',
    },
    primaryKey: 'id',
  };
}

class QuestionRealm extends Object<QuestionRealm> {
  id!: string;
  answer!: string;
  question!: string;

  static schema: ObjectSchema = {
    name: 'QuestionRealm',
    properties: {
      id: {type: 'string'},
      question: {type: 'string'},
      answer: {type: 'string'},
      questions: {
        type: 'linkingObjects',
        objectType: 'QuestionsRealm',
        property: 'questions',
      },
    },
    primaryKey: 'id',
  };
}

export {QuestionRealm, QuestionsRealm};
