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

const loadVideos = () => {

    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(response => response.json())
        .then(data => displayVideos(data.videos));

};

const displayVideos = (arrr2) => {
    const videoContainer = document.getElementById("video-container");

    arrr2.forEach((video) => {
        const cardSingle = document.createElement("div");
        cardSingle.classList.add("card", "bg-base-100", "shadow-sm");
        cardSingle.innerHTML = `
        
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>

        
        
        
        
        `;
        videoContainer.appendChild(cardSingle);

    });


};





loadCatagories();
loadVideos();