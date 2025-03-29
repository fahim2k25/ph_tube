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
        newBtn.classList.add("btn", "btn-sm", "hover:bg-red-600", "hover:text-white");

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
        
                <figure class="relative">
                        <img class="w-full h-[200px] object-cover" src="${video.thumbnail}" />
                        <span class="absolute text-white bg-black bottom-2 right-2">${video.others.posted_date} </span>
                </figure>
  
                <div class="card-body flex-row">

                    <div class="avatar">
                        <div class="w-12 h-12 rounded-full">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>

                    <div>
                        <h2 class="card-title">${video.title}</h2>
                        <div class="flex"> 
                            <p>${video.authors[0].profile_name} <br> ${video.others.views} Views </p>
                            
                            <div> <img class="w-4" src="./assets/icons8-verified-48.png" </div>
                        </div>
    
                      
                    </div>

                 </div>

        
        
        
        
        `;
        videoContainer.appendChild(cardSingle);

    });


};





loadCatagories();
loadVideos();