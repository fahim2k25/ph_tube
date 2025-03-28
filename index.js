function loadCatagories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCatagories(data));

}

function displayCatagories(elem) {

    console.log(elem);
}

loadCatagories();