async function checkAndClearLocalStorage() {
    try {
        // Fetch the current date and server ID from the backend
        const [dateResponse, serverIDResponse] = await Promise.all([
            fetch('/date'),
            fetch('/server_id'),
        ]);


        if (!dateResponse.ok || !serverIDResponse.ok) {
            throw new Error('Failed to fetch required data');
        }


        const backendDate = await dateResponse.json();
        const serverID = await serverIDResponse.text();


        // Retrieve stored ID and other items to preserve
        const storedID = localStorage.getItem('storedID');
        const selectedBackground = localStorage.getItem('selectedBackground');
        const home_streak = localStorage.getItem('home_streak');
        const todaysNumber = localStorage.getItem('todaysNumber');
        const yesterdaysNumber = localStorage.getItem('yesterdaysNumber');

        const classic_streak = localStorage.getItem('classic_streak');
        const todaysClassicNumber = localStorage.getItem('todaysClassicNumber');
        const yesterdaysClassicNumber = localStorage.getItem('yesterdaysClassicNumber');

        const silhoutte_streak = localStorage.getItem('silhoutte_streak');
        const todaysSilhoutteNumber = localStorage.getItem('todaysSilhoutteNumber');
        const yesterdaysSilhoutteNumber = localStorage.getItem('yesterdaysSilhoutteNumber');

        const selectedLanguage = localStorage.getItem('language');



        // Clear localStorage and preserve necessary items
        const clearAndPreserve = () => {
            localStorage.clear();
            if (selectedBackground) localStorage.setItem('selectedBackground', selectedBackground);
            if (home_streak) localStorage.setItem('home_streak', home_streak);
            if (todaysNumber) localStorage.setItem('todaysNumber', todaysNumber);
            if (yesterdaysNumber) localStorage.setItem('yesterdaysNumber', yesterdaysNumber);

            if (classic_streak) localStorage.setItem('classic_streak', classic_streak);
            if (todaysClassicNumber) localStorage.setItem('todaysClassicNumber', todaysClassicNumber);
            if (yesterdaysClassicNumber) localStorage.setItem('yesterdaysClassicNumber', yesterdaysClassicNumber);

            if (silhoutte_streak) localStorage.setItem('silhoutte_streak', silhoutte_streak);
            if (todaysSilhoutteNumber) localStorage.setItem('todaysSilhoutteNumber', todaysSilhoutteNumber);
            if (yesterdaysSilhoutteNumber) localStorage.setItem('yesterdaysSilhoutteNumber', yesterdaysSilhoutteNumber);

            if (selectedLanguage) localStorage.setItem('language', selectedLanguage);
            localStorage.setItem('storedID', serverID); // Do not change
        };


        // Check and update the stored ID
        if (storedID === null || storedID !== serverID) {
            console.log('Initializing or updating stored ID...');
            clearAndPreserve();
        }


        // Get the stored date
        const storedDate = localStorage.getItem('lastUpdatedDate');


        // First-time setup for the date
        if (!storedDate) {
            console.log('First-time setup: Initializing date in localStorage.');
            clearAndPreserve();
            localStorage.setItem('lastUpdatedDate', backendDate);
            location.reload(true);
            return;
        }


        // Compare and update the date
        if (backendDate !== storedDate) {
            console.log('New day detected. Updating date in localStorage...');
            clearAndPreserve();
            localStorage.setItem('lastUpdatedDate', backendDate);
            location.reload(true);
            return;
        }


        console.log('No changes detected. LocalStorage is up-to-date.');
    } catch (error) {
        console.error('Error checking and clearing local storage:', error);
    }
}


// Run the function
checkAndClearLocalStorage();



