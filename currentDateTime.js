// currentDateTime.js

// Function to get the current date and time
function getCurrentDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString(); // Format: MM/DD/YYYY
    const time = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

    return `Current Date: ${date}, Current Time: ${time}`;
}

// Export the function
module.exports = getCurrentDateTime;
