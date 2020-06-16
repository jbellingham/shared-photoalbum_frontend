import { createContext, useContext } from 'react';
import PostStore from './PostStore';
import { PostClient, CommentClient } from '../Client';
import CommentStore from './CommentStore';

const baseUrl = "https://localhost:44312";
const postStore = new PostStore(new PostClient(baseUrl))
const commentStore = new CommentStore(new CommentClient(baseUrl), postStore);

export interface IStore {
  postStore: PostStore;
  commentStore: CommentStore
}

export const store: IStore = {
  postStore,
  commentStore
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
}