import { makeAutoObservable } from 'mobx';
import { Demo } from './demo';
import { B } from './b';
import { setupStores } from './setupStores';
import { Todo } from './todo';

export class RootStore {
  loading: {
    [k: string]: boolean;
  } = { loading: false };
  setLoading: (value: boolean, key: string) => void;
  demo: Demo;
  // 定义 store
  b: B;
  todo: Todo;

  constructor() {
    this.demo = new Demo(this);
    // 实例化
    this.b = new B(this);
    this.todo = new Todo(this);

    makeAutoObservable(this);

    this.setLoading = (value, key = 'loading') => {
      this.loading[key] = value;
    };
  }
}

export const { StoreContext, useStores, withStores } = setupStores<RootStore>(RootStore);
