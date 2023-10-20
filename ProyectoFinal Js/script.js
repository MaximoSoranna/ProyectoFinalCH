document.addEventListener("DOMContentLoaded", function() {
  
    const products = [
    { name: "Tomb Raider", price: 49.99, image: "juego1.jpg" },
    { name: "WoW", price: 39.99, image: "descarga (1).jpg" },
    { name: "Tetris", price: 59.99, image: "descarga.jpg" }
    ];

    const cart = [];

    const productContainer = document.getElementById("product-list");

 
    const checkoutButton = document.getElementById("checkoutButton");
    checkoutButton.addEventListener("click", processPayment);


    function displayProducts() {
        productContainer.innerHTML = "";
        products.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart">Agregar al carrito</button>
            `;

            productDiv.querySelector(".add-to-cart").addEventListener("click", () => addToCart(index));

            productContainer.appendChild(productDiv);
        });
    }


    function addToCart(index) {
        if (index >= 0 && index < products.length) {
            cart.push(products[index]);
            updateCartDisplay();
        }
    }

  
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }


    function processPayment() {
        const total = calculateTotal();
        alert(`Procesando el pago de $${total.toFixed(2)}. Gracias por su compra.`);
        cart.length = 0; 
        updateCartDisplay();
    }


    function calculateTotal() {
        let total = 0;
        cart.forEach(product => {
            total += product.price;
        });
        return total;
    }


    function updateCartDisplay() {
        const cartList = document.getElementById("cart-list");
        const totalElement = document.getElementById("total");
        totalElement.textContent = `Total: $${calculateTotal().toFixed(2)}`;
        cartList.innerHTML = "";

        cart.forEach((product, index) => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                ${product.name} - $${product.price.toFixed(2)}
                <button class="remove-from-cart">Eliminar</button>
            `;
            cartItem.querySelector(".remove-from-cart").addEventListener("click", () => removeFromCart(index));
            cartList.appendChild(cartItem);
        });
    }
    displayProducts();
});