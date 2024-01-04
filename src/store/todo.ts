import { makeAutoObservable } from 'mobx';
import dayjs from 'dayjs';
import { RootStore } from '.';
import { encrypt, serviceAxios } from '../utils';

interface StateTodo {
  tags: any[];
  todoInfo: Record<string, any>;
}

export class Todo {
  setLoading: (value: boolean, key?: string) => void;
  updateState: (data: Partial<StateTodo>) => void;
  resetState: (data: Partial<StateTodo>) => void;
  state: StateTodo = {
    tags: [],
    todoInfo: {},
  };

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setLoading = (value: boolean, key = 'todo') => {
      rootStore.setLoading(value, key);
    };

    this.resetState = (data) => {
      this.state = { ...this.state, ...data };
    };

    this.updateState = (data) => {
      this.state = { ...this.state, ...data };
    };
  }

  async queryTagList(params: Record<string, any> = {}) {
    this.setLoading(true);
    const data = await serviceAxios.get('/tags', { params: { ...params } });
    this.updateState({ tags: data.data });
    this.setLoading(false);
  }

  async createTodo(params: Record<string, any> = {}) {
    const { text, keyBase, ivBase } = encrypt(params.detail);
    this.setLoading(true);
    await serviceAxios.post('/todos', {
      ...params,
      deadline: dayjs(params.deadline).format('YYYY-MM-DD'),
      operationSource: 'h5',
      detail: text,
      keyBase,
      ivBase,
    });
    this.setLoading(false);
  }

  async editTodo(params: Record<string, any> = {}) {
    const { text, keyBase, ivBase } = encrypt(params.detail);
    this.setLoading(true);
    await serviceAxios.patch(`/todos/${params.id}`, {
      name: params.name,
      detail: text,
      keyBase,
      ivBase,
      link: params.link,
      deadline: dayjs(params.deadline).format('YYYY-MM-DD'),
      tagId: params.tagId,
    });
    this.setLoading(false);
  }

  async delTodo(params: Record<string, any> = {}) {
    this.setLoading(true);
    await serviceAxios.delete(`/todos/${params.id}`);
    this.setLoading(false);
  }

  async finishTodo(params: Record<string, any> = {}) {
    this.setLoading(true);
    await serviceAxios.patch(`/todos/${params.id}`, {
      isFinish: true,
    });
    this.setLoading(false);
  }

  async recoverTodo(params: Record<string, any> = {}) {
    this.setLoading(true);
    await serviceAxios.patch(`/todos/${params.id}`, {
      isFinish: false,
    });
    this.setLoading(false);
  }

  async createTag(params: Record<string, any> = {}) {
    this.setLoading(true);
    await serviceAxios.post('/tags', params);
    this.setLoading(false);
  }

  async delTag(params: Record<string, any> = {}) {
    this.setLoading(true);
    await serviceAxios.delete(`/tags/${params.id}`);
    this.setLoading(false);
  }
}
