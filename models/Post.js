
class Post {
    constructor(title, content, user) {
        this.title = title;
        this.content = content;
        this.user = user;
        this.date = new Date();
        this.id = Post.incrementId();
    }

    static incrementId() {
        Post.currentId = (Post.currentId || 0) + 1;
        return Post.currentId;
    }
}

module.exports = Post;
