import { makeAutoObservable } from 'mobx';
import { RootStore } from '.';

interface StateB {
  b: number;
}

export class B {
  setLoading: (value: boolean, key?: string) => void;
  updateState: (data: Partial<StateB>) => void;
  state: StateB = {
    b: 0,
  };
  ib: () => void;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setLoading = (value: boolean, key = 'b') => {
      rootStore.setLoading(value, key);
    };

    this.updateState = (data) => {
      this.state = { ...this.state, ...data };
    };

    this.ib = () => {
      this.updateState({ b: this.state.b + 1 });
    };
  }

  async fb1Async() {
    this.setLoading(true);
    await new Promise((res) => {
      setTimeout(() => {
        res('1');
      }, 3000);
    });
    this.setLoading(false);

    this.ib();
  }
}
