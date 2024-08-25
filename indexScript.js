// add to cart functions
document.addEventListener("DOMContentLoaded", () => {
if(document.body.classList.contains("index-page")){
  console.log('page one done');
function addtoCartButtons() {
  const addToCart = document.querySelectorAll("#addto-cart");
  let flag=0;
  addToCart.forEach((eachButton) => {
    eachButton.addEventListener("click", (event) => {
      const foodCard = event.target.closest(".food-card");
      const foodImg = foodCard.querySelector("#foodImg").src;
      const foodName = foodCard.querySelector("#food-id").innerHTML;
      const foodRating = foodCard.querySelector("#foodRating").innerHTML;
      const foodPrice = foodCard.querySelector("#foodPrice").innerHTML;
      // closest method to find the class in DOM tree in the upper-direction until match
      if(foodCart(foodImg, foodName, foodRating, foodPrice,flag)){
        flag++;
      }
    });
  });
}

function foodCart(foodImg, foodName, foodRating, foodPrice,flag) {
  const emptyDisplay =document.querySelector("#empty-cart");
  const cartDisplay =document.querySelector("#itemAdded-cart");
 
  if(!cartDisplay){
    console.log("elem not found");
    return false;
  }
  
  const cartItems = document.getElementById("itemAdded-cart")
  const existingItem = Array.from(
    cartItems
      .getElementsByClassName("foodItem-card")
      .find(
        item => item.querySelector("#foodItem-id").textContent === foodName
      )
  );
  if (existingItem) {
    alert("Item already added to Cart!");
    return false;
  }

  emptyDisplay.style.display = "none";
  cartDisplay.style.display = "grid";

  const cartFood = document.createElement("div");
  cartFood.className = "foodItem-card";
  cartFood.innerHTML = `<div class="foodItemImg-box">
              <img src="${foodImg}" alt="" />
            </div>
            <div class="foodItem-description">
              <div class="foodItem-name">
                <h4 id="foodItem-id">${foodName}</h4>
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
                  <p>${foodRating}</p>
                </div>
              </div>
              <div class="foodItem-cart">
                <button id="removeItem-btn">Remove Item</button>
                <p>$${foodPrice}</p>
              </div>
            </div>`;
  cartItems.appendChild(cartFood);

  cartFood.querySelector("#removeItem-btn").addEventListener("click",()=>{
    cartFood.remove();
    flag--;
    if(flag == 0){
      emptyDisplay.style.display = "flex";
      cartDisplay.style.display = "none";
    }
  })
}
}
if(document.body.classList.contains("foodCart-page")){
  console.log("page 2 loaded");
}
else{
  console.log("page 2 not working!")
}
addtoCartButtons();




// see more and less buttons functions
const foodItem = [
  {
    src: "./assets/images/taco.png",
    foodId: "Mexican Taco",
    price: "12.05",
    foodReview: "5.00",
  },
  {
    src: "./assets/images/beef-lasanga.png",
    foodId: "Chicken Lasanga",
    price: "20.00",
    foodReview: "4.9",
  },
  {
    src: "./assets/images/shak.png",
    foodId: "Salade Urf",
    price: "33.99",
    foodReview: "3.9",
  },
  {
    src: "./assets/images/shak.png",
    foodId: "Super Salade",
    price: "49.99",
    foodReview: "4.9",
  },
  {
    src: "./assets/images/beef-lasanga.png",
    foodId: "Salmon Lasanga",
    price: "79.99",
    foodReview: "5.0",
  },
  {
    src: "./assets/images/taco.png",
    foodId: "Americano Taco",
    price: "6.05",
    foodReview: "5.00",
  },
];

const seeMoreBtn = document.getElementById("seemore-btn");
const seelessBtn = document.getElementById("seeless-btn");
const productBox = document.getElementById("product-box");

function loadMoreFood() {
  for (let i in foodItem) {
    const foodNewCard = document.createElement("div");
    foodNewCard.className = "food-card loaded-card";
    foodNewCard.innerHTML = `
            <div class="foodImg-box">
              <img src="${foodItem[i].src}" id="foodImg" alt="">
            </div>
            <div class="food-description">
              <div class="food-name">
                <h4 id="food-id">${foodItem[i].foodId}</h4>
                <div class="food-review">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>
                  <p id="foodRating">${foodItem[i].foodReview}</p>                  
                </div>
              </div>
              <div class="food-cart">
                <button id="addto-cart">Add to Cart</button>
                <p id="foodPrice">$${foodItem[i].price}</p>
              </div>
            </div>
        `;
    productBox.appendChild(foodNewCard);
  }
  addtoCartButtons();
  seeMoreBtn.style.display = "none";
  seelessBtn.style.display = "flex";
}
function removeLoadFood() {
  const loadedFoods = document.querySelectorAll(".loaded-card");
  for (let item of loadedFoods) {
    item.remove();
  }
  seeMoreBtn.style.display = "flex";
  seelessBtn.style.display = "none";
}
seelessBtn.addEventListener("click", removeLoadFood);
seeMoreBtn.addEventListener("click", loadMoreFood);

addtoCartButtons();
});
// gpt codes

//subscription email functions
const emailSubBtn = document.getElementById("subscribe-btn");

function showMessage() {
  const emailId = document.querySelector("#subscribe-email");
  if (emailId.value === "") {
    alert("Type your Email, please.");
  } else {
    const subsBox = document.querySelector(".subscribe-box");
    console.log(emailId.value);
    const messageP = document.createElement("P");
    messageP.className = "subscribed";
    messageP.innerHTML = `Your ${emailId.value} subscribed successfully.`;
    subsBox.appendChild(messageP);
    emailId.value = "";
  }
}
emailSubBtn.addEventListener("click", showMessage);


