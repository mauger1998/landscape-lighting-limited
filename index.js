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