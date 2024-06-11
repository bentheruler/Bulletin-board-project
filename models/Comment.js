
class Comment {
    constructor(postId, user, content) {
        this.postId = postId;
        this.user = user;
        this.content = content;
        this.date = new Date();
        this.id = Comment.incrementId();
    }

    static incrementId() {
        Comment.currentId = (Comment.currentId || 0) + 1;
        return Comment.currentId;
    }
}

module.exports = Comment;
