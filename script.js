const searchBar = document.querySelector(".search-bar");
const city = document.querySelector(".city");
const searchBtn = document.querySelector(".search-btn");
// let textAdded = false;

searchBtn.addEventListener("click", () => {
    if (searchBar.value === '') {
        alert("enter the city please!")
    }
    // } else if (textAdded) {
    //     let cityPara = document.createElement("p");
    //     cityPara.textContent = searchBar.value
    // } 
    else {
        let cityPara = document.createElement("p");
        cityPara.innerText = searchBar.value;
        city.appendChild(cityPara);
        // textAdded = true;
    }
    // removePara()

});

// function removePara() {
//     if (cityPara.innerHTML = searchBar.value) {
//         cityPara.innerHTML.remove()
//     }
// };


