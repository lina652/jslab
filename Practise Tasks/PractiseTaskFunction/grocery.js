function calculateTotal() {
    // Get values from input fields and convert them to numbers
    let grocery1 = parseFloat(document.getElementById("grocery1").value) || 0;
    let grocery2 = parseFloat(document.getElementById("grocery2").value) || 0;
    let grocery3 = parseFloat(document.getElementById("grocery3").value) || 0;

    // Calculate total
    let total = grocery1 + grocery2 + grocery3;

    // Display the total amount
    document.getElementById("totalAmount").textContent = total.toFixed(2);
}
