
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    document.getElementById("cart-count").innerText = cart.length;

    updateCart();

    alert(name + " added to your cart!");
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    total -= cart[index].price;

    cart.splice(index, 1);

    document.getElementById("cart-count").innerText = cart.length;

    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello! I want to order:\n\n";

    cart.forEach(item => {
        message += item.name + " - ₹" + item.price + "\n";
    });

    message += "\nTotal Amount: ₹" + total;

    alert(message + "\n\nThis is a demo order. Connect a payment or order service to complete purchases.");

    cart = [];
    total = 0;

    document.getElementById("cart-count").innerText = 0;
    updateCart();
}
