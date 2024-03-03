import {makeAutoObservable} from 'mobx';

class InputStore {
  value: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  updateValue = (value: string) => {
    this.value = value;
  };

  clearValue = () => {
    this.value = '';
  };

  get isValueEmpty() {
    return !this.value;
  }
}

export default InputStore;
