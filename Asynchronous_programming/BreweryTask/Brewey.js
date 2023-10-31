document.body.innerHTML = `
<div class="heading-container">
<h1>Brewery List</h1>
<img src="https://original40brewing.com/wp-content/uploads/2023/04/sandiego-brewery-600x450.png" class="icon"><br>
<label for="Brews">Search for Brewerages:</label><br>
<select id="arrayDropdown" style="outline:none;padding: 0.4rem;border-radius: 5px; border: none; box-shadow: 0 0 10px rgb(202, 202, 202);margin: 0.8rem;"></select>
<button onclick="getDropDown()" type="submit">Search</button>
<button onclick="getBreweyData()" type="submit">Home</button>

</div>
<div id="maincontainer" class="main-container"></div>
`;


//Get the Brewery Data
const getBreweyData = async() => {
    try {
        // fetch the data from an api
        const data = await fetch("https://api.openbrewerydb.org/v1/breweries/");
        //convert the data into a json object
        const brewerobj = await data.json();
        // console.log(typeof brewerobj);
        maincontainer.innerHTML = "";
        const dropdown = document.getElementById("arrayDropdown");
        brewerobj.forEach((brewery) => {
            //console.log(brewery);
            displayBreweryData(brewery);
            dropdown.innerHTML += `<option value="${brewery.name}" id="${brewery.id}" style="border-radius: 5px;">${brewery.name}</option>`
        });
        //returning brewer details
        return brewerobj;

    } catch (err) {
        console.log(err);
    }
};
getBreweyData();


//display Brewery Data
const displayBreweryData = (obj) => {
    maincontainer.innerHTML += `
   <div class="container">
      <h3 class="test"><span>Name:${obj.name}</span></h3>
      <h3 class="test"><span>City:${obj.brewery_type}</span></h3>
      <h3 class="test"><span>State:${obj.state}</span></h3>
      <h3 class="test"><span>Country:${obj.city}</span></h3>
      <h3 class="test"><span>Website:${obj.postal_code}</span></h3>
      <h3 class="test"><span>Address:${obj.country}</span></h3>
      <h3 class="test"><span>Phone:${obj.phone}</span></h3>
   </div>
   `;
};

//Get the Dropdown data

const getDropDown = () => {
    const selectedBrewery = document.getElementById('arrayDropdown').value;
    filterBreweries(selectedBrewery);
}

//Filter Breweries
const filterBreweries = (selectedName) => {
    const breweryContainers = document.querySelectorAll('.container');

    breweryContainers.forEach(container => {
        const breweryName = container.querySelector('h3 span');
        console.log(breweryName);
        if (breweryName.textContent.includes(selectedName)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}