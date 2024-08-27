function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById("itemAdded-cart");
    const emptyDisplay = document.getElementById("empty-cart");

    // Clear existing items in the container
    cartItemsContainer.innerHTML = '';

    if (cartItems.length > 0) {
        emptyDisplay.style.display = "none";
        cartItemsContainer.style.display = "grid";
    } else {
        emptyDisplay.style.display = "flex";
        cartItemsContainer.style.display = "none";
    }

    cartItems.forEach((item, index) => {
        const cartFood = document.createElement("div");
        cartFood.className = "foodItem-card";
        cartFood.innerHTML = `
            <div class="foodItemImg-box">
                <img src="${item.foodImg}" alt="" />
            </div>
            <div class="foodItem-description">
                <div class="foodItem-name">
                    <h4 id="foodItem-id">${item.foodName}</h4>
                    <div class="foodItem-review">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <p>${item.foodRating}</p>
                    </div>
                </div>
                <div class="foodItem-cart">
                    <button id="removeItem-btn" data-index="${index}">Remove Item</button>
                    <p>${item.foodPrice}</p>
                </div>
            </div>`;
        cartItemsContainer.appendChild(cartFood);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll("#removeItem-btn").forEach(button => {
        button.addEventListener("click", function() {
            const itemIndex = this.getAttribute("data-index");
            removeCartItem(itemIndex);
        });
    });
}

function removeCartItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //this line keeps the array with element or null 
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems(); // Refresh the cart display
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', displayCartItems);