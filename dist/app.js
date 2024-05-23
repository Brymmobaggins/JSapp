
const form = document.querySelector("form")
const closeButton = document.querySelector('#close-button')
const openButton = document.querySelector('#open-button')
const modal = document.querySelector('#modal')
// console.log(modal)

const itemList = document.querySelector("#item-list")


form.addEventListener("submit", function (event) {
    event.preventDefault()
    getExpense()
})


function getExpense() {
    let itemName = document.getElementById("item-name").value.trim()
    let itemCategory = document.getElementById("category").value.trim()
    let itemAmount = document.getElementById("item-amount").value.trim()
    let itemDate = document.getElementById("expense-date").value.trim()
    console.log(itemName)

    let numberList = document.getElementsByClassName("nr");
    for (let i = 0; i < numberList.length; i++) {
        numberList[i].innerHTML = (i + 1) + ".";
    }
    if (itemName && itemCategory && itemAmount && itemDate) {
        const expenseList = {
            itemName,
            itemCategory,
            itemAmount,
            itemDate
        }
        let expenses = JSON.parse(localStorage.getItem("expenses")) || []
        expenses.push(expenseList)

        localStorage.setItem("expenses", JSON.stringify(expenses))




        const itemList = document.querySelector("#item-list")
        const row = document.createElement("tr")
        row.innerHTML = `   
            <td class="nr"></td>
               <td>${itemName}</td>
               <td>${itemAmount}</td>
              <td>${itemDate}</td>
              <td>${itemCategory}</td> 
              <td class="*:px-1.5 *:py-1 *:rounded *:outline-none *:cursor-pointer *:text-white">
                  <a class="border bg-gray-400 text-sm edit">Edit</a>
                  <a class="border bg-red-600 text-sm delete" >Delete</a>
              </td>
            `
        itemList.appendChild(row)

        // close Modal
        closeModal()
        document.querySelectorAll(".edit").forEach(el => {
            el.addEventListener("click", function () {
                openModal()
            })
        })
        document.querySelectorAll(".delete").forEach((el) => {
            el.addEventListener("click", function () {
                el.parentElement.parentElement.remove();
            });
        })


    } else {

    }
    // reset input
    form.reset()


}
// document.addEventListener("DOMContentLoaded", addExpense)


//  store expenses in the local storage
function storeExpenseToLocalStorage() {
    let expenses;
    if (localStorage.getItem("expense") === null) {
        expenses = [];
    } else {
        expenses = JSON.parse(localStorage.getItem("expense"))
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