const getNames = async (inputName, inputCountry) => {
    const response = await fetch(`https://api.abalin.net/getdate?name=${inputName}&country=${inputCountry}`);
    console.log(response)

    const searchResult = await response.json();

    return searchResult;
};

const getDate = async (countryCode, month, day) => {
    const response = await fetch(`https://api.abalin.net/namedays?country=${countryCode}&month=${month}&day=${day}`);

    const data = await response.json();

    return data;
};