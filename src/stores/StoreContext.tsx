import { createContext, useContext } from 'react';
import PostStore from './PostStore';

export interface IStore {
  postStore: PostStore;
}

export const store: IStore = {
  postStore: new PostStore()
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
}