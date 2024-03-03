import uuid from 'react-native-uuid';

export class Question {
  id: string;
  question: string = '';
  answer: string = '';

  constructor(question: string) {
    this.question = question;
    this.id = uuid.v4();
  }
}

export class Questions {
  questions: Question[] = [];
  title: string;
  number: number = 0;
  id: string;

  constructor(title: string) {
    this.title = title;
    this.id = uuid.v4();
  }
};