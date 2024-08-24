const addToCart = document.querySelectorAll("#addto-cart");


function foodCart(food){
    console.log(food);
    alert(food + " is added to cart.")
}

addToCart.forEach(eachButton =>{
    eachButton.addEventListener("click",(event)=>{
        const foodName =  event.target.closest('.food-card').querySelector('#food-id').innerHTML;
        // closest method finds the class in DOM tree in the upper-direction until match
        foodCart(foodName);

    })
})

//subscription starts here
const emailSubBtn = document.getElementById("subscribe-btn");

function showMessage(){
    const emailId = document.querySelector("#subscribe-email");
    if(emailId.value ===""){
        alert("Ops! Type your Email again.")
    }else{
    const subsBox = document.querySelector(".subscribe-box");
    console.log(emailId.value);
    const messageP = document.createElement("P");
    messageP.className = "subscribed";
    messageP.innerHTML =`Your ${emailId.value} subscribed successfully.`;
    subsBox.appendChild(messageP);
    emailId.value ="";
    }
}

emailSubBtn.addEventListener("click",showMessage);