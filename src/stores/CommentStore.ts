import { action, decorate } from "mobx";
import { CommentClient, CommentDto, CreateCommentCommand } from "../Client";
import PostStore from "./PostStore";

class CommentStore {
    constructor(private commentClient: CommentClient, private postStore: PostStore) {        
    }

    async createComment(comment: CommentDto) {
        debugger
        await this.commentClient.create(CreateCommentCommand.fromJS({ ...comment }));            
        this.postStore.posts?.find(_ => _.id === comment.postId)?.comments?.unshift(comment);
    }
}

decorate(CommentStore, {
    createComment: action,
})

export default CommentStore;