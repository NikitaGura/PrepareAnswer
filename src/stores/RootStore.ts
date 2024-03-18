import CheckingQuestionStore from './checking-questions-store';
import CreateQuestionsStore from './create-question-store';
import QuestionsStore from './list-questions-store';

class RootStore {
  questions = new QuestionsStore();
  createQuestions = new CreateQuestionsStore();
  checkingQuestionStore = new CheckingQuestionStore();
}

const rootStore = new RootStore();

export {RootStore, rootStore};
