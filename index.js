function loadCatagories() {
    // 1. Fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        // 2. Convert Promise to JSON
        .then((res) => res.json())
        // 3. Send data to display
        .then((data) => displayCatagories(data.categories));

}

function displayCatagories(arrr) {
    // 1.get the contianer
    const cataCont = document.getElementById("category-container");

    //2.Loop operation on an ARRAY of object
    arrr.forEach(element => {

        //Create an Element
        const newBtn = document.createElement("button");
        newBtn.innerText = element.category;
        newBtn.classList.add("btn", "btn-sm");

        //Append that element
        cataCont.appendChild(newBtn);
    });



}

loadCatagories();