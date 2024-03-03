import {makeAutoObservable} from 'mobx';
import {CreateQuestionsName, CreateQuestionsState} from '../models';

class CreateQuestionsStore {
  private state: CreateQuestionsState = new CreateQuestionsName();

  constructor() {
    makeAutoObservable(this);
    this.state.setContext(this);
  }

  public moveTo(state: CreateQuestionsState): void {
    this.state = state;
    this.state.setContext(this);
  }

  get currentState() {
    return this.state;
  }
}

export default CreateQuestionsStore;
