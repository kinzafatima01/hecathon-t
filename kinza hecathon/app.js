// Handle sign-up button click
document.getElementById('signupButton').addEventListener('click', function() {
    // Show sign-up form and hide blog section
    document.getElementById('signupFormContainer').style.display = 'block';
    document.getElementById('blogSection').style.display = 'none';
    document.getElementById('signupButton').style.display = 'none';  // Hide sign-up button after clicking
  });

  // Handle sign-up form submission
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (username && password && email) {
      // Hide sign-up form and show upload page
      document.getElementById('signupFormContainer').style.display = 'none';
      document.getElementById('uploadPage').style.display = 'block';
    } else {
      alert('Please fill in all fields');
    }
  });

  // Handle blog post upload form submission
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;

    if (postTitle && postContent) {
      // Display the new post
      const newPostDiv = document.createElement('div');
      newPostDiv.classList.add('blog-entry');
      newPostDiv.innerHTML = `
        <h5>${postTitle}</h5>
        <p>${postContent}</p>
        <div class="d-flex align-items-center">
          
          <small class="meta-info text-primary">5 min read</small>
        </div>
      `;
      document.getElementById('newPostSection').appendChild(newPostDiv);

      // Clear the form
      document.getElementById('postTitle').value = '';
      document.getElementById('postContent').value = '';
    } else {
      alert('Please fill in all fields');
    }
  });
