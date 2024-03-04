import uuid from 'react-native-uuid';

export class Question {
  id: string;
  question: string = '';
  answer: string = '';

  constructor(question: string) {
    this.question = question;
    this.id = uuid.v4() as string;
  }

  static mapRealm = (data: any) => {
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
  }

  get number() {
    return this.questions.length + 1;
  }

  static mapRealm = (data: any) => {
    const result = new Questions(data.title || '');
    result.id = data.id || (uuid.v4() as string);
    return result;
  };
}
