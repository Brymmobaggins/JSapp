/** @format */

const form = document.querySelector("form");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");
const modal = document.querySelector("#modal");
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
closeButton.addEventListener("click", function () {
  closeModal();
});
openButton.addEventListener("click", function () {
  openModal();
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addExpense();
});

document.addEventListener("DOMContentLoaded", () => {
  displayExpenses();
  document.getElementById("search").addEventListener("input", searchExpenses);
});

// function to get expenses from user
function addExpense() {
  let itemName = document.getElementById("item-name").value.trim();
  let itemCategory = document.getElementById("category").value.trim();
  let itemAmount = document.getElementById("item-amount").value.trim();
  let itemDate = document.getElementById("expense-date").value.trim();

  // convert string a floating point number
  itemAmount = parseFloat(itemAmount);

  if (itemName && itemCategory && itemAmount && itemDate) {
    const expenseList = {
      itemName,
      itemCategory,
      itemAmount,
      itemDate,
    };
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expenseList);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    // display expenses on the DOM
    displayExpenses();

    // clear form input
    form.reset();
  } else {
    const modalParent = document.querySelector("#modal-parent");

    modalParent.classList.toggle("animate-heartbeat");

    // animation disappears after 1 second
    setTimeout(() => {
      modalParent.classList.toggle("animate-heartbeat");
    }, 1000);
  }
}

// function to show all expenses
function displayExpenses() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  const itemList = document.querySelector("#item-list");
  itemList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const row = document.createElement("tr");
    row.setAttribute("class", "rows");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${expense.itemName}</td>
            <td>${expense.itemAmount}</td>
            <td>${expense.itemDate}</td>
            <td>${expense.itemCategory}</td>
            <td class="flex gap-1 *:px-1.5 *:py-1 *:rounded-md *:outline-none *:cursor-pointer *:text-white">
                <a class="border border-gray-400 bg-gray-400 hover:bg-gray-300 text-xs edit">Edit</a>
                <a class="border border-red-600 bg-red-600 hover:bg-red-500 text-xs delete">Delete</a>
            </td>
        `;

    // Append row to table
    itemList.appendChild(row);

    // Close Modal (assuming closeModal function exists)
    closeModal();
  });

  // Edit expense
  document.querySelectorAll(".edit").forEach((el) => {
    el.addEventListener("click", function () {
      openModal(); // Assuming openModa
    });
  });

  // Delete expense per row
  document.querySelectorAll(".delete").forEach((el) => {
    el.addEventListener("click", function () {
      const rowIndex = el.parentElement.parentElement.rowIndex - 1;
      el.parentElement.parentElement.remove();

      // Delete expense from local storage
      const expensesData = JSON.parse(localStorage.getItem("expenses")) || [];
      expensesData.splice(rowIndex, 1);
      localStorage.setItem("expenses", JSON.stringify(expensesData));

      showAlert("Expense deleted successfully", "delete-expenses");

      // Update the display and total expenses after deletion
      displayExpenses();
    });
  });

  // Update total expenses
  updateTotalExpenses(expenses);
}

function updateTotalExpenses(expenses) {
  const totalExpense = document.querySelector("#total-expenses");
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += parseFloat(expenses[i].itemAmount);
  }
  totalExpense.textContent = total.toFixed(2);
}

// function to search expenses
function searchExpenses() {
  const searchInput = document.getElementById("search").value.trim();
  const searchValue = searchInput.toLowerCase();
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const itemList = document.querySelector("#item-list");
  itemList.innerHTML = "";
  expenses.forEach((expense, index) => {
    if (
      expense.itemName.toLowerCase().includes(searchValue) ||
      expense.itemCategory.toLowerCase().includes(searchValue)
    ) {
      const row = document.createElement("tr");
      const rowIndex = document.createElement("ol");
      rowIndex.textContent = index + 1;
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
            `;
      // append row to table
      itemList.appendChild(row, rowIndex);
    }
  });
}
// function to show alert
function showAlert(message, className) {
  let divAlert = document.createElement("div");
  divAlert.className = `delete-expense alert ${className}`;
  divAlert.appendChild(document.createTextNode(message));
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  body.insertBefore(divAlert, main);

  // vanish in 2 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 1000);
}
