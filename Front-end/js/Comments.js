// frontend/js/comments.js
async function loadComments(postId, postElement) {
    const res = await fetch(`http://localhost:3000/comments/post/${postId}`);
    const comments = await res.json();
    let commentSection = postElement.querySelector('.comments');
    if (!commentSection) {
        const template = document.getElementById('commentTemplate').content.cloneNode(true);
        commentSection = template.querySelector('.comments');
        postElement.appendChild(template);
        commentSection.querySelector('form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const content = commentSection.querySelector('textarea').value;
            const token = localStorage.getItem('token');
            await fetch('http://localhost:3000/comments/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ postId, content })
            });
            loadComments(postId, postElement);
        });
    }
    const commentList = commentSection.querySelector('.commentList');
    commentList.innerHTML = '';
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.innerText = comment.content;
        commentList.appendChild(li);
    });
}
