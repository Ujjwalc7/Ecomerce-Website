// importing all the components from the component folder
import header from "../../../components/header.js";
import navbar from "../../../components/navbar.js";
import footer from "../../../components/footer.js";
import carousel from "../../../components/carousel.js";
// importing data of all products from the product-links mens-products folder
import { allProducts } from "../../../product-links/men-products/allProducts.js";
// DOMContentLoaded event listener is fired after the html document has completely loaded
document.addEventListener("DOMContentLoaded", function (){
    // selecting each button elements in men section and assigning them to declared variables
    const leftShirtBtn = document.getElementById('leftShirtBtn');
    const rightShirtBtn = document.getElementById('rightShirtBtn');
    const leftPantBtn = document.getElementById('leftPantBtn');
    const rightPantBtn = document.getElementById('rightPantBtn');
    const leftHoodieBtn = document.getElementById('leftHoodieBtn');
    const rightHoodieBtn = document.getElementById('rightHoodieBtn');
    // applying a onclick funtion to the buttons to hit the slider function.
    leftShirtBtn.onclick = () =>{
        slider("menShirtCarouselInner", "left");
    };
    rightShirtBtn.onclick = () =>{
        slider("menShirtCarouselInner", "right");
    };
    leftPantBtn.onclick = () =>{
        slider("menPantCarouselInner", "left");
    };
    rightPantBtn.onclick = () =>{
        slider("menPantCarouselInner", "right");
    };
    leftHoodieBtn.onclick = () =>{
        slider("menHoodieCarouselInner", "left");
    };
    rightHoodieBtn.onclick = () =>{
        slider("menHoodieCarouselInner", "right");
    };

    // declaring a variable width and check
    // if screen width of the window is less than equal to 767px,
    // then width = 300 else width = 350
    let width;
    if(screen.width <= 767){
        width = 300;
    }else{
        width = 350;
    };
    // slider function takes two arguments name and direction and uses them to target particular 
    // element in the carouselInner <div> to add the functionality of sliding left or right
    const slider = (name, direction) =>{
        if(direction === "left") {
            document.getElementById(`${name}`).scrollLeft -= width;
        } else {
            document.getElementById(`${name}`).scrollLeft += width;
        }
    };
    
    // injecting carousel items into the carouselInner div of particular category sections
    // by passing data of products and category name.
    carousel(allProducts,'men_shirts')
    carousel(allProducts,'men_pants')
    carousel(allProducts,'men_hoodie')
    
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../../logo/fav.ico");
    navbar();
    footer();
});