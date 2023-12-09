import header from "../../../components/header.js";
import navbar from "../../../components/navbar.js";
import footer from "../../../components/footer.js";
import carousel from "../../../components/carousel.js";
import { allProducts } from "../../../product-links/women-products/allProducts.js";

document.addEventListener("DOMContentLoaded", function (){
    const leftMenBtn = document.getElementById('leftDressBtn');
    const rightMenBtn = document.getElementById('rightDressBtn');
    const leftWomenBtn = document.getElementById('leftPantBtn');
    const rightWomenBtn = document.getElementById('rightPantBtn');
    const leftKidBtn = document.getElementById('leftSkirtBtn');
    const rightKidBtn = document.getElementById('rightSkirtBtn');

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

    
    let width;
    if(screen.width <= 767){
        width = 300;
    }else{
        width = 350;
    };

    const slider = (name, direction) =>{
        if(direction === "left") {
            document.getElementById(`${name}`).scrollLeft -= width;
        } else {
            document.getElementById(`${name}`).scrollLeft += width;
        }
    };
    

    carousel(allProducts,'women_dress')
    carousel(allProducts,'women_pants')
    carousel(allProducts,'women_skirts')
    
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../../logo/fav.ico");
    navbar();
    footer();
});