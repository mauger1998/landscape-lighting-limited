document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

// CMS

let PROJECT_ID = "i3whaemx";
let DATASET = "production";
let QUERY = encodeURIComponent(`*[_type == 'previousWork']{
    previousWorkImag,
    "imageUrl": previousWork.asset->url
  }`);

let URL = `https://i3whaemx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'previousWork'%5D%7B%0A%20%20previousWorkImag%2C%0A%20%20%22imageUrl%22%3A%20previousWork.asset-%3Eurl%0A%7D`;


fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          let grid = document.querySelector(".admin-grid-wrapper")

            result.forEach((result, index) => {
                let gridItem = document.createElement("div")
                let gridImage = document.createElement("img")
                gridImage.src = result.imageUrl
                gridItem.appendChild(gridImage)
                grid.appendChild(gridImage)
            });
            
        })


// Grid Text
let QUERYTWO = encodeURIComponent(`*[_type == 'gridItem']`);

let URLTWO = `https://i3whaemx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'gridItem'%5D%0A%20%20`;

fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
            let firstText = document.querySelector(".first-text")
            let firstHeading = document.querySelector(".first-heading")
            let secondText = document.querySelector(".second-text")
            let secondHeading = document.querySelector(".second-heading")
            let thirdText = document.querySelector(".third-text")
            let thirdHeading = document.querySelector(".third-heading")
            let fourthText = document.querySelector(".fourth-text")
            let fourthHeading = document.querySelector(".fourth-heading")

            firstText.textContent = result[0].paragraph
            firstHeading.textContent = result[0].heading
            secondText.textContent = result[1].paragraph
            secondHeading.textContent = result[1].heading
            thirdText.textContent = result[2].paragraph
            thirdHeading.textContent = result[2].heading
            fourthText.textContent = result[3].paragraph
            fourthHeading.textContent = result[3].heading

            
        })








// Grid Image
let QUERYTHREE = encodeURIComponent(`*[_type == 'gridItem']{
    name,
    "imageUrl": image.asset->url
  }`);

let URLTHREE = `https://i3whaemx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'gridItem'%5D%7B%0A%20%20name%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D%0A%20%20`;

fetch(URLTHREE)
        .then((res) => res.json())
        .then(({ result }) => {
            let firstImg = document.querySelector(".first-img")
            
            let secondImg = document.querySelector(".second-img")
           
            let thirdImg = document.querySelector(".third-img")
         
            let fourthImg = document.querySelector(".fourth-img")

            firstImg.src = result[0].imageUrl
           
            secondImg.src = result[1].imageUrl
            
            thirdImg.src = result[2].imageUrl
           
            fourthImg.src = result[3].imageUrl
           
            
        })


// CARDS

//Card Image
let QUERYFOUR = encodeURIComponent(`*[_type == 'cards']{
    name,
    "imageUrl": image.asset->url
  }`);

let URLFOUR = `https://i3whaemx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'cards'%5D%7B%0A%20%20name%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D%0A%20%20`;


fetch(URLFOUR)
        .then((res) => res.json())
        .then(({ result }) => {
            const cardImgArray = document.querySelectorAll(".card")

            result.forEach((result, index) => {
                cardImgArray[index].style.backgroundImage = `linear-gradient(to bottom, rgba(28, 28, 28, 0), rgba(0, 0, 0, 100%)), url(${result.imageUrl})`
            })
            
        })

//Card Text

let QUERYFIVE = encodeURIComponent(`*[_type == 'cards']`);

let URLFIVE = `https://i3whaemx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'cards'%5D%0A%20%20`;


fetch(URLFIVE)
        .then((res) => res.json())
        .then(({ result }) => {
            const cardTextArray = document.querySelectorAll(".card p")

            result.forEach((result, index) => {
                cardTextArray[index].textContent = result.text
            })
            
        })
