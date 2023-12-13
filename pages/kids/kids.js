// importing all the components from the component folder
import header from "../../../components/header.js";
import navbar from "../../../components/navbar.js";
import footer from "../../../components/footer.js";
// importing data of all products from the product-links kids-products folder
import { allProducts } from "../../../product-links/kids-products/allProducts.js";

// DOMContentLoaded event listener is fired after the html document has completely loaded
document.addEventListener("DOMContentLoaded", function (){

    // selecting element by id main-div and the data of kids-products are accessed through .map() function
    // and displayed in the browser.
    document.getElementById('main-div')
        .innerHTML = allProducts.map((product) => {
            return (`<div class="item" key=${product.id}>
                <div class="img-div">
                <img loading="lazy" src="${product.image}" alt="product image">
                </div>
                <div class="item-details">
                    <h5>${product.name}</h5>
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                    <button class="btn btn-warning">
                    <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    Add to cart
                    </button>
                </div>
            </div>`
            )
    }).join('');

        // injecting header, navbar, and footer components into every pages dinamically
        header("../../../logo/fav.ico");
        navbar();
        footer();
    });