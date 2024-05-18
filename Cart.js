let cartItems = [];

function addToCart(postId) {
    const post = posts.find(item => item.id === postId);
    if (post) {
        const existingCartItem = cartItems.find(item => item.id === postId);
        if (existingCartItem) {
            existingCartItem.quantity += 1; 
        } else {
            post.quantity = 1; 
            cartItems.push(post);
        }
    } 
}

function increaseQuantity(postId) {
    const cartItem = cartItems.find(item => item.id === postId);
    if (cartItem) {
        cartItem.quantity += 1; 
        updateCart(); 
    }
}

function decreaseQuantity(postId) {
    const cartItem = cartItems.find(item => item.id === postId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1; 
        updateCart(); 
    }
}
function clearCart() {
    cartItems = []; 
    updateCart(); 
}
function updateCart() {
    const cartContent = document.getElementById('cartContent');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    cartContent.innerHTML = '';

    cartItems.forEach(function(item) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" height = "500px" width = "225px">
            <div class="cart-item-details">
                <h4 style="color:black"><b>${item.title}</h4>
                <p style="color:black">${item.price} x ${item.quantity}</p>
                <button onclick="increaseQuantity(${item.id})" style="color:black">+</button>
                <button onclick="decreaseQuantity(${item.id})" style="color:black">-</button>
            </div>
        `;
        cartContent.appendChild(cartItem);

        totalPrice += parseInt(item.price) * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${totalPrice}`;
    totalPriceElement.style.color = "black";  
}

function openCartModal() {
    updateCart(); 
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
    window.location.href = 'index.html'
}
