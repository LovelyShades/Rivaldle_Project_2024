async function checkAndClearLocalStorage() {
    try {
        // Fetch the current date and server ID from the backend
        const response = await fetch('/date');
        const serverIDResponse = await fetch('/server_id');

        if (!response.ok) throw new Error('Failed to fetch date');
        if (!serverIDResponse.ok) throw new Error('Failed to fetch server ID');

        const data = await response.json();
        const serverID = await serverIDResponse.text();

        // Retrieve stored ID from local storage
        let storedID = localStorage.getItem('storedID');
        console.log(storedID, serverID);

        //stored items to not clear
        let selectedBackground = localStorage.getItem('selectedBackground');
        let tosHasBeenLoaded = localStorage.getItem('tosHasBeenLoaded')

        // Handle first-time setup for stored ID
        if (storedID === null) {
            console.log('No stored ID found. Initializing stored ID and clearing localStorage.');
            localStorage.clear();
            localStorage.setItem('storedID', serverID);
        } else if (storedID !== serverID) {
            console.log('Server ID mismatch detected. Clearing localStorage...');
            localStorage.clear();
            localStorage.setItem('storedID', serverID);
        }        
        console.log(localStorage.getItem('storedID'))
        const backendDate = data;

        // Get the stored date from localStorage
        const storedDate = localStorage.getItem('lastUpdatedDate');
        // Handle first-time setup
        if (storedDate == undefined) {
            location.reload(true);
            console.log('First-time setup: initializing localStorage with the current date.');
            localStorage.setItem('lastUpdatedDate', backendDate);
            return;
        }

        // Compare dates
        if (backendDate !== storedDate) {
            console.log('New day detected, clearing local storage...');

            
            localStorage.clear();
            localStorage.setItem('lastUpdatedDate', backendDate);
            location.reload(true);

            console.log('Local storage cleared and updated with the new date.');
        } else {
            console.log('Same day, no action required.');
        }
        if(selectedBackground){
            localStorage.setItem('selectedBackground', selectedBackground)    
        }
        localStorage.setItem('tosHasBeenLoaded', tosHasBeenLoaded)
    } catch (error) {
        console.error('Error checking and clearing local storage:', error);
    }

}

checkAndClearLocalStorage();
