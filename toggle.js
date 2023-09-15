const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

// Function to toggle between themes
themeToggle.addEventListener('click', () => {
    // Get the current stylesheet href
    const currentTheme = themeStyle.getAttribute('href');

    // Define the two stylesheets you want to toggle between
    const defaultTheme = 'default.css';
    const alternateTheme = 'alternate.css';

    // Check the current theme and toggle accordingly
    if (currentTheme === defaultTheme) {
        themeStyle.setAttribute('href', alternateTheme);
        localStorage.setItem('theme', alternateTheme); // Store the theme choice in local storage
    } else {
        themeStyle.setAttribute('href', defaultTheme);
        localStorage.setItem('theme', defaultTheme); // Store the theme choice in local storage
    }
});

// Check if the user has a stored theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    themeStyle.setAttribute('href', storedTheme); // Apply the stored theme if it exists
}