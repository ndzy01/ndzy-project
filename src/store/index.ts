import { makeAutoObservable } from 'mobx';
import { Demo } from './demo';
import { B } from './b';
import { setupStores } from './setupStores';

export class RootStore {
  loading: {
    [k: string]: boolean;
  } = { loading: false };
  setLoading: (value: boolean, key: string) => void;
  demo: Demo;
  // 定义 store
  b: B;

  constructor() {
    this.demo = new Demo(this);
    // 实例化
    this.b = new B(this);

    makeAutoObservable(this);

    this.setLoading = (value, key = 'loading') => {
      this.loading[key] = value;
    };
  }
}

export const { StoreContext, useStores, withStores } = setupStores<RootStore>(RootStore);
