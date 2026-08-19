const imgCardElmt = document.querySelector("#imgCard")
const badgeColorElmt = document.querySelector("#badgeColor")
const redBTNElmt = document.querySelector("#redBTN")
const greenBTNElmt = document.querySelector("#greenBTN")
const blueBTNElmt = document.querySelector("#blueBTN")
const btnViewElmt = document.querySelector("#btnView") 


function changeToGreen(){
    // console.log("Green btn clicked")
    badgeColorElmt.classList.remove("bg-danger")
    badgeColorElmt.classList.add("bg-success")
    badgeColorElmt.textContent = "Green"

    btnViewElmt.classList.remove("btn-danger")
    btnViewElmt.classList.add("btn-success")

    imgCardElmt.setAttribute("src", "./bikeGreen.jpeg")

}
greenBTNElmt.addEventListener("click", changeToGreen)

function changeToRed(){
    badgeColorElmt.classList.remove("bg-success")
    badgeColorElmt.classList.add("bg-danger")
    badgeColorElmt.textContent = "Red"

    btnViewElmt.classList.remove("btn-success")
    btnViewElmt.classList.add("btn-danger")

    imgCardElmt.setAttribute("src", "./bikered.jpeg")

}

redBTNElmt.addEventListener("click", changeToRed)

function changeToBlue(){
    badgeColorElmt.classList.remove("bg-danger")
    badgeColorElmt.classList.remove("bg-success")
    badgeColorElmt.classList.add("bg-primary")
    badgeColorElmt.textContent = "blue"

    btnViewElmt.classList.remove("btn-danger")
    btnViewElmt.classList.remove("btn-success")
    btnViewElmt.classList.add("btn-primary")

    imgCardElmt.setAttribute("src", "./bikeblue.jpeg")
}

blueBTNElmt.addEventListener("click", changeToBlue)