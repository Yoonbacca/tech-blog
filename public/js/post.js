const newFormHandler = async (event) => {
  const description = document.querySelector('#comment-desc').value.trim();
  const post_id = window.location.pathname.split('/').pop();
  if (description) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ description, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
