import {createForm, createField} from 'mobx-easy-form';
import {rootStore} from './RootStore';
import {Question} from './list-questions-store';
import * as yup from 'yup';

class AddQuestionStore {
  form;
  questionField;
  answerField;

  constructor() {
    this.form = createForm({onSubmit: this.addQuestion});
    this.questionField = createField({
      id: 'question',
      initialValue: '',
      form: this.form,
      validationSchema: yup.string().required(),
    });
    this.answerField = createField({
      id: 'answer',
      initialValue: '',
      form: this.form,
      validationSchema: yup.string().required(),
    });
  }

  addQuestion = ({values}: {values: any}) => {
    const question = new Question(values.question);
    question.answer = values.answer;
    rootStore.questions.currentSelectedQuestions?.addQuestion(question);
  };
}

export default AddQuestionStore;
