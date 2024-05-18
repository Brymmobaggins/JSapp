

const closeButton = document.querySelector('#close-button')
const openButton = document.querySelector('#open-button')
const modal = document.querySelector('#modal')
console.log(modal)

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

// alert("")