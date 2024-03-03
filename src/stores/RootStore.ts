import QuestionsStore from './list-questions-store';
import ModalPopupStore from './modal-popup-store';

class RootStore {
  modalPopup = new ModalPopupStore();
  questions = new QuestionsStore();
}

export default RootStore;
