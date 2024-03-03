import {makeAutoObservable} from 'mobx';

class ModalPopupStore {
  visible = false;

  constructor() {
    makeAutoObservable(this);
  }

  show = () => {
    this.visible = true;
  };

  hide = () => {
    this.visible = false;
  };
}

export default ModalPopupStore;
