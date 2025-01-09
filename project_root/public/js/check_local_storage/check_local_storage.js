async function checkAndClearLocalStorage() {
    try {
        // Fetch the current date from the backend
        const response = await fetch('/date');
        if (!response.ok) throw new Error('Failed to fetch date from backend');
        const data = await response.json();

        // Assuming the backend sends the date as a string (e.g., "Tue Jan 08 2025")
        const backendDate = data.lastUpdatedDate;

        // Get the stored date from localStorage
        const storedDate = localStorage.getItem('lastUpdatedDate');

        // Compare dates
        if (backendDate !== storedDate) {
            console.log('New day detected, clearing local storage...');

            // Clear localStorage and set the new date
            localStorage.clear();
            localStorage.setItem('lastUpdatedDate', backendDate);

            console.log('Local storage cleared and updated with the new date.');
        } else {
            console.log('Same day, no action required.');
        }
    } catch (error) {
        console.error('Error checking and clearing local storage:', error);
    }
}

// Call the function on page load
checkAndClearLocalStorage();
