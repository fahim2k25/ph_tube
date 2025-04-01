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
        newBtn.setAttribute("onclick", `loadCatagoryVideo(${element.category_id})`);
        newBtn.setAttribute("id", `btn-${element.category_id}`);
        //Append that element
        cataCont.appendChild(newBtn);
    });



}

const loadVideos = () => {

    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(response => response.json())
        .then(data => {
            const oddBtn = document.getElementById("btn-all");
            removeActivity();
            oddBtn.classList.add("active");
            displayVideos(data.videos)
        });

};

const displayVideos = (arrr2) => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = "";

    if (arrr2.length === 0) {
        videoContainer.innerHTML = `
        <div class="mt-6 col-span-4 flex flex-col items-center py-6">
            <img class="w-[120px]" src="./assets/Icon.png" alt="no-vdo">
            <p class="text-2xl font-bold">Oops! SOrry no content</p>
        </div>`;
        return;
    }

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
                            
                            <div> ${video.authors[0].verified === true ? `<img class="w-4" src="./assets/icons8-verified-48.png"` : `<img class="w-7" src="https://img.icons8.com/?size=100&id=85083&format=png&color=000000">`} </div>
                        </div>
                    </div>
                     <div class ="mt-4">
                            <button onclick="loadVidDeets('${video.video_id}')" class="btn btn-wide">Show Details</button>
                    </div>

                 </div>
        
        
        `;
        videoContainer.appendChild(cardSingle);

    });


};

const loadCatagoryVideo = (id) => {
    const filterURL = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(filterURL)
        .then(response => response.json())
        .then((data) => {
            removeActivity();
            const clickedButton = document.getElementById(`btn-${id}`);
            clickedButton.classList.add("active");
            displayVideos(data.category);
        });

};

const loadVidDeets = (specificId) => {

    const urll = `https://openapi.programming-hero.com/api/phero-tube/video/${specificId}`;

    fetch(urll)
        .then((response) => response.json())
        .then((data) => displayVidDeets(data.video));
};

const displayVidDeets = (elemObj) => {
    video_modal.showModal();
    const modalContent = document.getElementById("customModal");
    modalContent.innerHTML = `

            <div class="card bg-base-100 image-full shadow-sm">
                <figure>
                    <img src="${elemObj.thumbnail}" />
                </figure>
                <div class="card-body">
                     <h2 class="card-title">${elemObj.title}</h2>
                    <p>${elemObj.description}</p>
                </div>
            </div>
            
    `;
};

const removeActivity = () => {
    const clickedElems = document.getElementsByClassName("active");

    for (let elem of clickedElems) {
        elem.classList.remove("active");
    };

};

//FUNCTION called by default while the page reloads
loadCatagories();
