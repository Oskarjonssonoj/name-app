// Getting references for our first form
const formSearch = document.querySelector("#formSearch");
const nameEl = document.querySelector("#name-search");
const countryEl = document.querySelector("#country-search");


// Getting references for our second form
const specDaySearch = document.querySelector("#specDaySearch");
const countrySearch = document.querySelector("#countrySearch");
const monthSearch = document.querySelector("#monthSearch");
const daySearch = document.querySelector("#daySearch");


// Getting references to the empty div 
const content = document.querySelector("#content");


// Calling our function when submitting values
formSearch.addEventListener('submit', e => {
    e.preventDefault();

    const name = nameEl.value;
    const country = countryEl.value;

    getNames(name, country)
        .then(searchResult => {
            if(200 && searchResult.results.length > 0){
                let output = ""
                searchResult.results.forEach((data) => {
                    output = `
                    <h2>Date (DD/MM)</h2>
                        <p class="date">${data.day}/${data.month}</p>
                    <h2>Name or names that has its' birthday</h2>
                        <p class="names">${data.name}</p>`;   
                    }); 
                content.innerHTML = output;  
            } else {
                renderAlertMsg("There is no name that matched your search")
            }
        })
});

// Calling our function when submitting values
specDaySearch.addEventListener('submit', e => {
    e.preventDefault();

    const countryCode = countrySearch.value;
    const month = monthSearch.value;
    const day = daySearch.value;

    getDate(countryCode, month, day)
        .then(data => {
            let output = ""
            data.data.forEach(item => {
                const countryCodeAPI = countrySearch.value;
                output = `
                <h2>Name or names that has a birthday</h2>
                    <p class="names">${item.namedays[countryCodeAPI]}</p>`;   
                }); 
            content.innerHTML = output;  
            console.log(data);
        })
});
