// Function to fetch GitHub user information with security vulnerabilities
function fetchGitHubUser() {
    // Get user input from a prompt
    const username = prompt("Enter your GitHub username:");

    // GitHub token placed directly in the source code (highly unsafe)
    const token = "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

    // Create a new script element for JSONP
    const script = document.createElement('script');
    
    // Set the source of the script element to GitHub's API with the unsanitized user input
    // and including the GitHub token in the URL
    script.src = `https://api.github.com/users/${username}?access_token=${token}&callback=handleResponse`;

    // Append the script to the document's body to send the request
    document.body.appendChild(script);
}

// Callback function to handle the response from GitHub API
function handleResponse(response) {
    console.log('GitHub User Data:', response.data);
}

// Trigger the function to fetch user data
fetchGitHubUser();
