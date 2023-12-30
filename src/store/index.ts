import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { Demo } from './demo';
import { B } from './b';

interface ContextProps {
  state: RootStore;
}

export class RootStore {
  loading: {
    [k: string]: boolean;
  } = { loading: false };
  setLoading: (value: boolean, key: string) => void;
  demo: Demo;
  b: B;

  constructor() {
    this.demo = new Demo(this);
    this.b = new B(this);

    makeAutoObservable(this);

    this.setLoading = (value, key = 'loading') => {
      this.loading[key] = value;
    };
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext<ContextProps>({ state: rootStore });
