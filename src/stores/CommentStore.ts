import { action, decorate } from 'mobx'
import { CommentClient, CommentDto, CreateCommentCommand, PostDto } from '../Client'
import PostStore from './PostStore'

class CommentStore {
    constructor(private commentClient: CommentClient, private postStore: PostStore) {}

    async createComment(comment: CommentDto): Promise<void> {
        await this.commentClient.create(CreateCommentCommand.fromJS({ ...comment }))
        const post = this.postStore.posts?.find((post: PostDto) => post.id === comment.postId)
        if (post && !post?.comments) {
            post.comments = []
        }
        post?.comments?.push(comment)
    }
}

decorate(CommentStore, {
    createComment: action,
})

export default CommentStore
