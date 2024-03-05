import CreateQuestionsStore from './create-question-store';
import QuestionsStore from './list-questions-store';

class RootStore {
  questions = new QuestionsStore();
  createQuestions = new CreateQuestionsStore();
}

const rootStore = new RootStore();

export {RootStore, rootStore};
