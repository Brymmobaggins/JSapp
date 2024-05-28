
const form = document.querySelector("form")
const closeButton = document.querySelector('#close-button')
const openButton = document.querySelector('#open-button')
const modal = document.querySelector('#modal')


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

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault()
    addExpense()
})

document.addEventListener("DOMContentLoaded", () => {
    displayExpenses()
    document.getElementById('search').addEventListener('input', searchExpenses)
})


function addExpense() {
    let itemName = document.getElementById("item-name").value.trim()
    let itemCategory = document.getElementById("category").value.trim()
    let itemAmount = document.getElementById("item-amount").value.trim()
    let itemDate = document.getElementById("expense-date").value.trim()

    // convert string a floating point number
    itemAmount = parseFloat(itemAmount)

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

        // display expenses on the DOM
        displayExpenses()

        // clear form input
        form.reset()
    } else {
        const modalParent = document.querySelector('#modal-parent')

        modalParent.classList.toggle('animate-heartbeat')

        // animation disappears after 1 second
        setTimeout(() => {
            modalParent.classList.toggle('animate-heartbeat')
        }, 1000)

    }
}



function displayExpenses() {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || []

    const itemList = document.querySelector("#item-list")
    itemList.innerHTML = ""
    expenses.forEach((expense, index) => {
        const row = document.createElement("tr")
        const rowIndex = document.createElement("ol")
        rowIndex.textContent = index + 1
        row.innerHTML = `
            <td>${rowIndex.innerHTML}</td>
            <td>${expense.itemName}</td>
           <td>${expense.itemAmount}</td>
           <td>${expense.itemDate}</td>
           <td>${expense.itemCategory}</td>
          <td class="flex gap-1 *:px-1.5 *:py-1 *:rounded-md *:outline-none *:cursor-pointer *:text-white">
            <a class="border border-gray-400 bg-gray-400 hover:bg-gray-300 text-xs edit">Edit</a>
            <a class="border border-red-600 bg-red-600 hover:bg-red-500 text-xs delete">Delete</a>
          </td>
        `
        // append row to table
        itemList.appendChild(row, rowIndex)

        // close Modal
        closeModal()

        // edit expense
        document.querySelectorAll(".edit").forEach(el => {
            el.addEventListener("click", function () {
                openModal()
            })
        })
        // delete expense per row
        document.querySelectorAll(".delete").forEach((el) => {
            el.addEventListener("click", function () {
                el.parentElement.parentElement.remove();

                // delete expense from local storage

                // Get expenses from localStorage or initialize as empty array
                const expensesData = JSON.parse(localStorage.getItem("expenses")) || [];

                // Find the index of the expense to remove
                const rowIndex = el.parentElement.parentElement.rowIndex - 1;

                // Remove the expense from the array
                expensesData.splice(rowIndex, 1);

                // Save the updated expenses to localStorage
                localStorage.setItem("expenses", JSON.stringify(expensesData));


                showAlert("Expense deleted successfully", "success")

            });
        })
    })
}

// function showAlert(message, type) {
//     const alert = document.querySelector(".alert")
//     alert.textContent = message
//     alert.classList.remove("hidden")
//     alert.classList.add(`alert-${type}`)
//     setTimeout(() => {
//         alert.classList.remove(`alert-${type}`)
//         setTimeout(() => {
//             alert.classList.add("hidden")
//         }, 1000)
//     }, 3000)
//     if (type === "error") {
//         alert.classList.add("alert-error")
//     } else if (type === "success") {
//         alert.classList.add("alert-success")
//     }
// }

function searchExpenses() {
    const searchInput = document.getElementById('search').value.trim()
    const searchValue = searchInput.toLowerCase()
    const expenses = JSON.parse(localStorage.getItem("expenses")) || []
    const itemList = document.querySelector("#item-list")
    itemList.innerHTML = ""
    expenses.forEach((expense, index) => {
        if (expense.itemName.toLowerCase().includes(searchValue) || expense.itemCategory.toLowerCase().includes(searchValue)) {
            const row = document.createElement("tr")
            const rowIndex = document.createElement("ol")
            rowIndex.textContent = index + 1
            row.innerHTML = `
                <td>${rowIndex.innerHTML}</td>
                <td>${expense.itemName}</td>
               <td>${expense.itemAmount}</td>
               <td>${expense.itemDate}</td>
               <td>${expense.itemCategory}</td>
              <td class="*:px-1.5 *:py-1 *:rounded-md *:outline-none *:cursor-pointer *:text-white">
                 <a class="border bg-gray-400 text-xs edit">Edit</a>
                  <a class="border bg-red-600 text-xs delete">Delete</a>
              </td>
            `
            // append row to table
            itemList.appendChild(row, rowIndex)
        }
    })
}

function showAlert(message, className) {
    let divAlert = document.createElement("div")
    divAlert.className = `alert ${className}`
    divAlert.appendChild(document.createTextNode(message))
    const body = document.querySelector("body")
    const main = document.querySelector("main")
    body.insertBefore(divAlert, main)

    // vanish in 2 seconds
    setTimeout(function () {
        document.querySelector(".alert").remove()
    }, 1000)


}
