import { action, decorate, observable, computed } from 'mobx';
import { PostDto, PostClient, CreatePostCommand, PostsVm } from '../Client';

class PostStore {

    vm: PostsVm = new PostsVm();

    constructor(private postClient: PostClient) {
        // this.vm = new PostsVm();
        // if (this.vm.posts && this.vm.posts.length === 0) {
            this.postClient.get().then((result: PostsVm) => {
                // this.vm.posts = [];
                result.posts?.map(post => this.vm.posts.push(post))
            })
        // }
    }

    async createPost(post: PostDto) {
        let id = await this.postClient.create(CreatePostCommand.fromJS({ ...post }));
        console.log(id)
        this.vm.posts?.push(post);
        // this.postClient.create(CreatePostCommand.fromJS({ ...post }))
        //     .then((id: number) => {
        //         debugger
        //         console.log(id);
        //         this.vm.posts?.push(post);
        //     });
    }

    get getPosts(): PostDto[] {
        return this.vm.posts;
    }
}

decorate(PostStore, {
    vm: observable,
    createPost: action,
    getPosts: computed
})

export default PostStore;