document.addEventListener('DOMContentLoaded', () => {
    // Select all like buttons
    const likeButtons = document.querySelectorAll('.like-btn');

    // Loop through each like button and add an event listener
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const postId = button.closest('.post').dataset.postId; // Get the ID of the post
            const likeIcon = button.querySelector('i'); // Get the heart icon
            const likeCountSpan = button.querySelector('.like-count'); // Get the like count span
            let currentLikes = parseInt(likeCountSpan.textContent); // Get current likes as a number

            // Toggle the 'liked' class on the button
            button.classList.toggle('liked');

            // Check if the button now has the 'liked' class
            if (button.classList.contains('liked')) {
                // If liked, change icon to solid heart and increment count
                likeIcon.classList.remove('far'); // far = font awesome regular (outline)
                likeIcon.classList.add('fas');   // fas = font awesome solid (filled)
                currentLikes++;
                console.log(`Post ${postId} liked! Total likes: ${currentLikes}`);
            } else {
                // If unliked, change icon to outline heart and decrement count
                likeIcon.classList.remove('fas');
                likeIcon.classList.add('far');
                currentLikes--;
                console.log(`Post ${postId} unliked! Total likes: ${currentLikes}`);
            }
            
            // Update the displayed like count
            likeCountSpan.textContent = currentLikes;

            // In a real application, you would send an AJAX request to your
            // backend here to persist the like/unlike action in a database.
            // Example: fetch(`/api/posts/${postId}/like`, { method: 'POST' });
        });
    });

    // You could add more JavaScript for:
    // - Dynamic loading of posts (e.g., infinite scroll)
    // - Comment submission
    // - Post creation
    // - User authentication
});