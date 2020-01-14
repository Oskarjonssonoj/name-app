const searchBtn = document.querySelector("#search");
const nameEl = document.querySelector("#name-search");
const countryEl = document.querySelector("#country-search");
 
searchBtn.addEventListener('click', async function() {
 
    const name = nameEl.value;
    const country = countryEl.value;
 
    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);
    
    const parse = await response.json()
 
    const content = document.querySelector("#content");
    let output = ""
 
    parse.results.forEach((info) => {
        output += `<p>${info.name}</p>
        <p>${info.month}/${info.day}</p>`;
     });

    content.innerHTML = output;
    
});