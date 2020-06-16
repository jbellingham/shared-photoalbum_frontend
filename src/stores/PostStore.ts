import { action, decorate, observable, computed } from 'mobx';
import { ICommentProps } from "../components/Post/Comment";
import { IPostProps } from "../components/Post";

import postsJson from './data/posts.json';

export type TPost = {
    id: string;
    linkUrl: string;
    text: string;
    comments: ICommentProps[];
}

class PostStore {
    constructor() {
        if (this.posts && this.posts.length === 0) {
            postsJson.forEach(post => this.posts.push(post));
        }
    }

    posts: TPost[] = [];

    createPost(post: IPostProps) {
        this.posts.push(post);
    }

    @computed get getPosts(): TPost[] {
        return this.posts;
    }
}

decorate(PostStore, {
    posts: observable,
    createPost: action,
    getPosts: computed
})

export default PostStore;