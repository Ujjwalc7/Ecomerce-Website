// importing all the components from the component folder
import header from "./components/header.js";
import navbar from "./components/navbar.js";
import footer from "./components/footer.js";
// importing featured products data from the featured products js file
import { featuredProducts } from "./product-links/featured-product/featuredProducts.js";


// DOMContentLoaded event listener is fired after the html document has completely loaded
document.addEventListener("DOMContentLoaded", function (){
// assigning sildeLeft and sildeRight buttons to the variables using 
// getElementById selector
    const leftBtn = document.getElementById("slideLeft");
    const rightBtn = document.getElementById("slideRight");

    // declaring a variable width and check
    // if screen width of the window is less than equal to 767px,
    // then width = 300 else width = 350
    let width; 
    if(screen.width <= 767){
        width = 300;
    }else{
        width = 350;
    }

    // adding event listeners to the buttons to scroll the element(carouselInner)
    //  left and right according to the value of width variable
    leftBtn.onclick = () => {
    document.getElementById("carouselInner").scrollLeft -= width;
    };

    rightBtn.onclick = () => {
    document.getElementById("carouselInner").scrollLeft += width;
    };

    // injecting data inside the carouselInner <div> using .map() method 
    // which will return the data of each object in the array and will be rendered into the browser
    const carouselInner = document.getElementById("carouselInner");
    carouselInner.innerHTML = featuredProducts.map((item) => {
        return( `<div class="carouselItem" key=${item.id}>
            <img loading="lazy" src="${item.image}" alt="product image">
            <div class="product-details">
                <h5>${item.name}</h5>
                <p>${item.price}</p>
                <p>${item.description}</p>
                <button class="btn btn-warning">
                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
                Add to cart
                </button>
            </div>
        </div>`)}).join("");

    // injecting header, navbar, and footer components into every pages dinamically
    header("./logo/fav.ico");
    navbar();
    footer();

    
})








