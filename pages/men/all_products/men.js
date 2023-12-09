import header from "../../../components/header.js";
import navbar from "../../../components/navbar.js";
import footer from "../../../components/footer.js";
import carousel from "../../../components/carousel.js";
import { allProducts } from "../../../product-links/men-products/allProducts.js";

document.addEventListener("DOMContentLoaded", function (){
    const leftShirtBtn = document.getElementById('leftShirtBtn');
    const rightShirtBtn = document.getElementById('rightShirtBtn');
    const leftPantBtn = document.getElementById('leftPantBtn');
    const rightPantBtn = document.getElementById('rightPantBtn');
    const leftHoodieBtn = document.getElementById('leftHoodieBtn');
    const rightHoodieBtn = document.getElementById('rightHoodieBtn');

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
    

    carousel(allProducts,'men_shirts')
    carousel(allProducts,'men_pants')
    carousel(allProducts,'men_hoodie')
    
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../../logo/fav.ico");
    navbar();
    footer();
});