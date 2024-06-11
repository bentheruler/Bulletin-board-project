document.getElementById('createPostForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    try {
        const response = await fetch('http://localhost:5000/create-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            alert('Post created successfully');
            loadPosts();
        } else {
            alert('Failed to create post');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

async function loadPosts() {
    try {
        const response = await fetch('http://localhost:5000/posts');
        const posts = await response.json();

        const postList = document.getElementById('postList');
        postList.innerHTML = '';

        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = `${post.title}: ${post.content}`;
            postList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

// Load posts when the page loads
window.onload = loadPosts;
