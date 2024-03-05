import CreateQuestionsStore from './create-question-store';
import QuestionsStore from './list-questions-store';
import ModalPopupStore from './modal-popup-store';

class RootStore {
  modalPopup = new ModalPopupStore();
  questions = new QuestionsStore();
  createQuestions = new CreateQuestionsStore();
}

const rootStore = new RootStore();

export {RootStore, rootStore};
