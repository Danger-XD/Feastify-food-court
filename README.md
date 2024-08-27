# Feastify-food-court
A responsive website with HTML, CSS and Js-DOM.

### Live Deployed Website via Netlify 
- [Feastify](https://feastify-food.netlify.app/)

## Featurs:
- Navigation buttons to navigate to different pages
    - Home
    - Cart 
    - Blog
    - The cart bag in the search box directs to the cart page
- A fully responsive website for different screen size
- Home Page
    - Product section
        - Hovering on the images of the meals, the image zoom out as an animation
        - Add to cart button
            - Buttons for adding food item to the cart page on two conditions
                - If the food already exist in the cart then show "Item already added to cart"
                - If the food does not exist in the cart then show "foodName is added to cart."
        - See More Products button
            - Loads more food items 
            - Show see less products button 
                - Unload the loaded food items
    - Services section
        - Hover effect on the boards
    - Section section
        - If the email form is empty and user clicks on subscribe show "Type your Email, please."
        - If an email is given, then show below "Your Email subscribed successfully." 
- Cart Page
    - Show a default message when the cart is empty
    - If food item added, remove the above message and show the food items that added to the cart
        - For each food item, there is a button to remove food item from the cart
- Blog Page 
    - Show a default message when the blog page is empty
- Add to cart function is made using localStorage object

### Faced a problem with git: 
error: bad signature 0x00000000 <br>
fatal: index file corrupt     

### Solution: 
https://sonjoybarmon.medium.com/github-problem-how-to-resolve-error-bad-signature-0x00000000-fatal-index-file-corrupt-928b9d62c302
