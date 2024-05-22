
const form = document.querySelector("form")
const closeButton = document.querySelector('#close-button')
const openButton = document.querySelector('#open-button')
const modal = document.querySelector('#modal')
// console.log(modal)

const itemList = document.querySelector("#item-list")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    getvalues()
})

function getvalues() {
    let itemName = document.getElementById("item-name").value.trim()
    let itemCategory = document.getElementById("category").value.trim()
    let itemAmount = document.getElementById("item-amount").value.trim()
    let expenseDate = document.getElementById("expense-date").value.trim()
    console.log(itemName)

    let numberList = document.getElementsByClassName("nr")
    for (let i = 0; i < numberList.length; i++) {
        numberList[i].innerHTML = (i + 1) + "."

    }
    // console.log(numberList)


    if (itemName == "" || !itemCategory || !itemAmount || !expenseDate) {
        document.querySelector("#item-name").style.borderColor = "red"



    } else {
        const itemList = document.querySelector("#item-list")
        const row = document.createElement("tr")
        row.innerHTML =
            `  <td class="nr"></td>
               <td>${itemName}</td>
               <td>${itemAmount}</td>
               <td>${expenseDate}</td>
               <td>${itemCategory}</td> 
               <td class="">
                  <a class="border bg-gray-300 text-sm" id="edit-btn">Edit</a>
                  <a class="border bg-red-500 text-sm" id="delete-btn">Delete</a>
               </td>
             `
        itemList.appendChild(row)
        closeModal()


    }

    clearInput()
}

function clearInput() {
    document.getElementById("item-name").value = ""
    document.getElementById("category").value = ""
    document.getElementById("item-amount").value = ""
    document.getElementById("expense-date").value = ""
}




function openModal() {
    modal.style.display = "block"
}
function closeModal() {
    modal.style.display = "none"
}
closeButton.addEventListener("click", function () {
    closeModal()
})
openButton.addEventListener("click", function () {
    openModal()

})

// function 