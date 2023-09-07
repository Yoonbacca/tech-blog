const editFormHandler = async (event) => {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('data-id');
  const name = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();
  if (name && description) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post');
    }
  }
};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
