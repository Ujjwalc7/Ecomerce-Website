// this component takes 2 arguments, data of products and categories names
const carousel = (Products,category) => {
    let carouselInner = null;
    // this condition checks if the category provided from where they were called
    //  matches the name of the product's category then assign the element of that category
    //  to the carouselInner variable
    if(category === 'men'){
        carouselInner = document.getElementById("menCarouselInner");
    }else if(category === 'women'){
        carouselInner = document.getElementById("womenCarouselInner");
    }else if(category === 'kids'){
        carouselInner = document.getElementById("kidsCarouselInner");
    }else if(category === 'women_dress'){
        carouselInner = document.getElementById("womenDressCarouselInner");
    }else if(category === 'women_pants'){
        carouselInner = document.getElementById("womenPantCarouselInner");
    }else if(category === 'women_skirts'){
        carouselInner = document.getElementById("WomenSkirtCarouselInner");
    }else if(category === 'men_shirts'){
        carouselInner = document.getElementById("menShirtCarouselInner");
    }
    else if(category === 'men_pants'){
        carouselInner = document.getElementById("menPantCarouselInner");
    }else if(category === 'men_hoodie'){
        carouselInner = document.getElementById("menHoodieCarouselInner");
    }
    // after the condition is checked then the data of the products is accessed via .map() function
    // and injected into the browser
        carouselInner.innerHTML = Products.map((item) => {
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

            return carouselInner;
}

export default carousel;
