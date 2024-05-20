
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
    let itemName = document.getElementById("item-name").value
    let itemCategory = document.getElementById("item-category").value
    let itemAmount = document.getElementById("item-amount").value
    let expenseDate = document.getElementById("expense-date").value
    console.log(itemName)

    if (itemName && itemCategory && itemAmount && expenseDate) {

        itemList.innerHTML =
        `<tr class="*:p-2 *:font-sans">

           <td>${itemName}</td>
           <td>${itemCategory}</td> 
           <td>${itemAmount}</td>
           <td>${expenseDate}</td>

        </tr>
        `

        closeModal()

    }else{
        
    }
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