var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;
var checkOut;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] - 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt -= prices[x];

    //Preventing quantity from going below 0
    if (quantities[x] < 0) {
        quantities[x] = 0;
        totals[x] = 0;
    };

    display_all();
};

//Calculating the total amount of all items
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < totals.length; i++) {
        total += totals[i];
    };
    return total;
};

//Updating the total amount of items in the cart
function updateTotal () {
    let totalText = document.getElementById("total");
    totalText.innerHTML = `Your total is R${calculateTotal()}`;
};

//Assigning the function to the chekout button
let checkOutButton = document.getElementById("checkOut");
checkOutButton.addEventListener("click", updateTotal);

//Displaying the total amount in the web page
let totalText = document.getElementById("total");
totalText.innerHTML = `Your total is R${calculateTotal()}`;




function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";

    //Creating a checkout button that will display when the page loads
    let checkOutButton = document.getElementById("checkOut");
    checkOutButton.innerHTML = `<button id="check-out-button">Check Out</button>`;

    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;



}

window.onload = function() {
    display_all();
}