import { CommentClient, CommentDto, CreateCommentCommand } from "../Client";
import { action, decorate } from "mobx";
import PostStore from "./PostStore";

class CommentStore {
    constructor(private commentClient: CommentClient, private postStore: PostStore) {        
    }

    createComment(comment: CommentDto) {
        this.commentClient.create(CreateCommentCommand.fromJS({ ...comment }))
            .then(() => {
                this.postStore.vm.posts.find(_ => _.id === comment.postId)?.comments?.push(comment);
            });
    }
}

decorate(CommentStore, {
    createComment: action,
})

export default CommentStore;