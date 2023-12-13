// importing all the components from the component folder
import header from "../../components/header.js";
import navbar from "../../components/navbar.js";
import footer from "../../components/footer.js";
import carousel from "../../components/carousel.js";
// importing data of all products from the product-links mens-products folder
import { allProducts as mensAllProdusts } from "../../product-links/men-products/allProducts.js";
// importing data of all products from the product-links womens-products folder
import { allProducts as womensAllProducts } from "../../product-links/women-products/allProducts.js";
// importing data of all products from the product-links kids-products folder
import { allProducts as kidsAllProducts } from "../../product-links/kids-products/allProducts.js";

// DOMContentLoaded event listener is fired after the html document has completely loaded
document.addEventListener("DOMContentLoaded", function (){
    // selecting each button elements in men women and kid section and assigning them to declared variables
    const leftMenBtn = document.getElementById('leftMenBtn');
    const rightMenBtn = document.getElementById('rightMenBtn');
    const leftWomenBtn = document.getElementById('leftWomenBtn');
    const rightWomenBtn = document.getElementById('rightWomenBtn');
    const leftKidBtn = document.getElementById('leftKidBtn');
    const rightKidBtn = document.getElementById('rightKidBtn');

    // applying a onclick funtion to the buttons to hit the slider function.
    leftMenBtn.onclick = () =>{
        slider("menCarouselInner", "left");
    };
    rightMenBtn.onclick = () =>{
        slider("menCarouselInner", "right");
    };
    leftWomenBtn.onclick = () =>{
        slider("womenCarouselInner", "left");
    };
    rightWomenBtn.onclick = () =>{
        slider("womenCarouselInner", "right");
    };
    leftKidBtn.onclick = () =>{
        slider("kidsCarouselInner", "left");
    };
    rightKidBtn.onclick = () =>{
        slider("kidsCarouselInner", "right");
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
    carousel(mensAllProdusts,"men");
    carousel(womensAllProducts,"women");
    carousel(kidsAllProducts,"kids");
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../logo/fav.ico");
    navbar();
    footer();
});
