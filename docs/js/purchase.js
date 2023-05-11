const decrementButtons = document.querySelectorAll("[data-action='decrement']");
const incrementButtons = document.querySelectorAll("[data-action='increment']");
const quantityInputs = document.querySelectorAll("input[type='number']");
const totalElement = document.querySelector("#total");
decrementButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.nextElementSibling;
        const newValue = parseInt(input.value) - 1;
        input.value = newValue < 0 ? 0 : newValue;
        calculateTotal();
    });
});

incrementButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.previousElementSibling;
        const newValue = parseInt(input.value) + 1;
        input.value = newValue;
        calculateTotal();
    });
});
function calculateTotal() {
    let total = 0;

    quantityInputs.forEach((input, index) => {
        const row = input.closest('tr');
        const nextRow = row.children[2];
        const next = nextRow.childNodes[1];
        const price = next.textContent;
        total += parseInt(input.value) * parseInt(price);
    });
    totalElement.textContent = "$" + total;
}
quantityInputs.forEach((input) => {
    input.addEventListener("input", calculateTotal);
});
