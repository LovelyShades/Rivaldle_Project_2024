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
        const best_home_streak = localStorage.getItem('best_home_streak');
        const todaysNumber = localStorage.getItem('todaysNumber');
        const yesterdaysNumber = localStorage.getItem('yesterdaysNumber');

        const classic_streak = localStorage.getItem('classic_streak');
        const best_classic_streak = localStorage.getItem('best_classic_streak');
        const todaysClassicNumber = localStorage.getItem('todaysClassicNumber');
        const yesterdaysClassicNumber = localStorage.getItem('yesterdaysClassicNumber');

        const silhoutte_streak = localStorage.getItem('silhoutte_streak');
        const best_silhoutte_streak = localStorage.getItem('best_silhoutte_streak');
        const todaysSilhoutteNumber = localStorage.getItem('todaysSilhoutteNumber');
        const yesterdaysSilhoutteNumber = localStorage.getItem('yesterdaysSilhoutteNumber');

        const emoji_streak = localStorage.getItem('emoji_streak');
        const best_emoji_streak = localStorage.getItem('best_emoji_streak');
        const todaysEmojiNumber = localStorage.getItem('todaysEmojiNumber');
        const yesterdaysEmojiNumber = localStorage.getItem('yesterdaysEmojiNumber');

        const ability_streak = localStorage.getItem('ability_streak');
        const best_ability_streak = localStorage.getItem('best_ability_streak');
        const todaysAbilityNumber = localStorage.getItem('todaysAbilityNumber');
        const yesterdaysAbilityNumber = localStorage.getItem('yesterdaysAbilityNumber');

        const selectedLanguage = localStorage.getItem('language');



        // Clear localStorage and preserve necessary items
        const clearAndPreserve = () => {
            localStorage.clear();
            if (selectedBackground) localStorage.setItem('selectedBackground', selectedBackground);
            if (home_streak) localStorage.setItem('home_streak', home_streak);
            if (best_home_streak) localStorage.setItem('best_home_streak', best_home_streak);
            if (todaysNumber) localStorage.setItem('todaysNumber', todaysNumber);
            if (yesterdaysNumber) localStorage.setItem('yesterdaysNumber', yesterdaysNumber);

            if (classic_streak) localStorage.setItem('classic_streak', classic_streak);
            if (best_classic_streak) localStorage.setItem('best_classic_streak', best_classic_streak);
            if (todaysClassicNumber) localStorage.setItem('todaysClassicNumber', todaysClassicNumber);
            if (yesterdaysClassicNumber) localStorage.setItem('yesterdaysClassicNumber', yesterdaysClassicNumber);

            if (silhoutte_streak) localStorage.setItem('silhoutte_streak', silhoutte_streak);
            if (best_silhoutte_streak) localStorage.setItem('best_silhoutte_streak', best_silhoutte_streak);
            if (todaysSilhoutteNumber) localStorage.setItem('todaysSilhoutteNumber', todaysSilhoutteNumber);
            if (yesterdaysSilhoutteNumber) localStorage.setItem('yesterdaysSilhoutteNumber', yesterdaysSilhoutteNumber);

            if (emoji_streak) localStorage.setItem('emoji_streak', emoji_streak);
            if (best_emoji_streak) localStorage.setItem('best_emoji_streak', best_emoji_streak);
            if (todaysEmojiNumber) localStorage.setItem('todaysEmojiNumber', todaysEmojiNumber);
            if (yesterdaysEmojiNumber) localStorage.setItem('yesterdaysEmojiNumber', yesterdaysEmojiNumber);

            if (ability_streak) localStorage.setItem('ability_streak', ability_streak);
            if (best_ability_streak) localStorage.setItem('best_ability_streak', best_ability_streak);
            if (todaysAbilityNumber) localStorage.setItem('todaysAbilityNumber', todaysAbilityNumber);
            if (yesterdaysAbilityNumber) localStorage.setItem('yesterdaysAbilityNumber', yesterdaysAbilityNumber);

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



