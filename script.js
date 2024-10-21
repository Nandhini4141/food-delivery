let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    // Add item to the cart
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart items
    cartItemsElement.innerHTML = '';

    // Add the items to the cart display
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItemsElement.appendChild(listItem);
    });

    // Update the total price
    totalPriceElement.textContent = `Total: ₹${total}`;
}

function checkout() {
    alert(`Thank you for your order! Your total is ₹${total}.`);
    cart = []; // Clear the cart
    total = 0; // Reset total
    updateCart(); // Update cart display
}
