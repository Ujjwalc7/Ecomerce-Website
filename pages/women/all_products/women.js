// importing all the components from the component folder
import header from "../../../components/header.js";
import navbar from "../../../components/navbar.js";
import footer from "../../../components/footer.js";
import carousel from "../../../components/carousel.js";
// importing data of all products from the product-links womens-products folder
import { allProducts } from "../../../product-links/women-products/allProducts.js";

// DOMContentLoaded event listener is fired after the html document has completely loaded
document.addEventListener("DOMContentLoaded", function (){
    // selecting each button elements in women section and assigning them to declared variables
    const leftMenBtn = document.getElementById('leftDressBtn');
    const rightMenBtn = document.getElementById('rightDressBtn');
    const leftWomenBtn = document.getElementById('leftPantBtn');
    const rightWomenBtn = document.getElementById('rightPantBtn');
    const leftKidBtn = document.getElementById('leftSkirtBtn');
    const rightKidBtn = document.getElementById('rightSkirtBtn');

    // applying a onclick funtion to the buttons to hit the slider function.
    leftMenBtn.onclick = () =>{
        slider("womenDressCarouselInner", "left");
    };
    rightMenBtn.onclick = () =>{
        slider("womenDressCarouselInner", "right");
    };
    leftWomenBtn.onclick = () =>{
        slider("womenPantCarouselInner", "left");
    };
    rightWomenBtn.onclick = () =>{
        slider("womenPantCarouselInner", "right");
    };
    leftKidBtn.onclick = () =>{
        slider("WomenSkirtCarouselInner", "left");
    };
    rightKidBtn.onclick = () =>{
        slider("WomenSkirtCarouselInner", "right");
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
    carousel(allProducts,'women_dress')
    carousel(allProducts,'women_pants')
    carousel(allProducts,'women_skirts')
    
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../../logo/fav.ico");
    navbar();
    footer();
});