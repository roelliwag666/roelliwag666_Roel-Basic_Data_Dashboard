// Get elements by their IDs
const totalUsers = document.getElementById('totalUsers').innerText;
const totalSales = document.getElementById('totalSales').innerText;

// Add event listener to the button
const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', function () {
    alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
});
