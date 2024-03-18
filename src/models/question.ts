export interface IQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface IQuestions {
  questions: IQuestion[];
  title: string;
  id: string;
}
