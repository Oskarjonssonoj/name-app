// Rendering a persons name day and other people who also have their name day
const getNames = async (inputName, inputCountry) => {
    const response = await fetch(`https://api.abalin.net/getdate?name=${inputName}&country=${inputCountry}`);
    console.log(response)

    const searchResult = await response.json();

    return searchResult;
};

// Rendering the name/names on a specific searched date
const getDate = async (countryCode, month, day) => {
    const response = await fetch(`https://api.abalin.net/namedays?country=${countryCode}&month=${month}&day=${day}`);

    const data = await response.json();

    return data;
};

// Rendering an alert message to the user 
const renderAlertMsg = (msg => {
    content.innerHTML = `<p class="alert">${msg}</p>`;
})