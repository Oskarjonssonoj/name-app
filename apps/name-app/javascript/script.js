const formSearch = document.querySelector("#formSearch");

const nameEl = document.querySelector("#name-search");

const countryEl = document.querySelector("#country-search");

const content = document.querySelector("#content");

// formSearch.addEventListener('sumbit', e => {
//     e.preventDefault();

//     const name = nameEl.value;
//     const country = countryEl.value;

//     const urlSearch = `https://api.abalin.net/getdate?name=${name}&country=${country}`;

//     const getNames = async () => {
//         const response = await fetch(urlSearch);

//         const searchResult = await response.json();

//         searchResult.results.forEach((data) => {
//             output += `<p>${data.name}</p>
//             <p>${data.month}/${data.day}</p>`;

//             content.innerHTML = output;  
//         });
//     };
//     getNames()  
//     .catch(err => {
//         console.error("Something went very wrong! Error was:", err);
//     });
// });
 
searchBtn.addEventListener('click', async function() {
 
    const name = nameEl.value;
    const country = countryEl.value;
 
    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);
    
    const parse = await response.json();
 
    const content = document.querySelector("#content");
    let output = ""
 
    parse.results.forEach((data) => {
        output += `<p>${data.name}</p>
        <p>${data.month}/${data.day}</p>`;
     });
    content.innerHTML = output;  
});