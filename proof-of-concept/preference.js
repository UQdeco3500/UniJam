function displayPreferences() {
    const preferenceButtons = document.getElementById('preference-buttons');
    const doneButton = document.getElementById('done-button');
    let preferences = {};

    // Fetch the JSON data from preferences.json
    fetch('preferences.json')
        .then(response => response.json())
        .then(data => {
            preferences = data;
            for (const preference in data) {
                createPreferenceButton(preference, data[preference]);
            }
        })
        .catch(error => console.error('Error fetching data: ' + error));

    // Add a click event to the "Done" button
    doneButton.addEventListener('click', () => {
        // Save the preferences to local storage
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        alert('Preferences saved!');
    });

    // Function to create preference buttons
    function createPreferenceButton(preference, selected) {
        const button = document.createElement('button');
        button.textContent = preference;
        button.classList.add(selected ? 'selected' : 'unselected');

        // Add a click event to toggle the preference
        button.addEventListener('click', () => {
            preferences[preference] = !preferences[preference]; // Toggle the preference
            updateButtonStyle(button, preferences[preference]);
        });

        preferenceButtons.appendChild(button);
    }

    // Function to update the button style
    function updateButtonStyle(button, selected) {
        if (selected) {
            button.classList.remove('unselected');
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
            button.classList.add('unselected');
        }
    }
}

window.addEventListener('load', displayPreferences);
