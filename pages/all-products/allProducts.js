import header from "../../components/header.js";
import navbar from "../../components/navbar.js";
import footer from "../../components/footer.js";
import { allProducts as mensAllProdusts } from "../../product-links/men-products/allProducts.js";
import carousel from "../../components/carousel.js";
import { allProducts as womensAllProducts } from "../../product-links/women-products/allProducts.js";
import { allProducts as kidsAllProducts } from "../../product-links/kids-products/allProducts.js";

document.addEventListener("DOMContentLoaded", function (){
    const leftMenBtn = document.getElementById('leftMenBtn');
    const rightMenBtn = document.getElementById('rightMenBtn');
    const leftWomenBtn = document.getElementById('leftWomenBtn');
    const rightWomenBtn = document.getElementById('rightWomenBtn');
    const leftKidBtn = document.getElementById('leftKidBtn');
    const rightKidBtn = document.getElementById('rightKidBtn');

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
    
    
    carousel(mensAllProdusts,"men");
    carousel(womensAllProducts,"women");
    carousel(kidsAllProducts,"kids");
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../logo/fav.ico");
    navbar();
    footer();
});
