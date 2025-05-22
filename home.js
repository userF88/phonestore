const  categories = [
    { 
        idCategory: 1,
        categoryName: "Cameras & videos",
        categoryQuantity: 1,
        categoryImage: '../assets/images/categories/category-1.png' 
    },
    { 
        idCategory: 2,
        categoryName: "Computers & Laptop", 
        categoryQuantity: 3, 
        categoryImage: '../assets/images/categories/category-2.png' 
    },
    { 
        idCategory: 3, 
        categoryName: "Mobiles", 
        categoryQuantity: 3, 
        categoryImage: '../assets/images/categories/category-3.png' 
    },
    { 
        idCategory: 4, 
        categoryName: "Portable Speakers", 
        categoryQuantity: 1, 
        categoryImage: '../assets/images/categories/category-4.png' 
    },
    { 
        idCategory: 5, 
        categoryName: "Headphones", 
        categoryQuantity: 1, 
        categoryImage: '../assets/images/categories/category-5.png' 
    },
    { 
        idCategory: 6, 
        categoryName: "Airpods", 
        categoryQuantity: 1, 
        categoryImage: '../assets/images/categories/category-6.png' 
    },
    { 
        idCategory: 7, 
        categoryName: "Smart watch", 
        categoryQuantity: 1, 
        categoryImage: '../assets/images/categories/category-7.png' 
    },
    { 
        idCategory: 8, 
        categoryName: "Gaming", 
        categoryQuantity: 1, 
        categoryImage: '../assets/images/categories/category-8.png' 
    }
];

const categoriesPresentation = document.querySelector('.categories-presentation');

function generateCategoryHtml(category){
    return `
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xxs-12 category-cart animation fade-up" data-threshold=0.95>
            <div class="category category-${category.idCategory}">
                <div class="category-image">
                    <img src="${category.categoryImage}" class="category-img category-${category.idCategory}-img" />
                </div>
                <div class="category-description">
                    <h6 class="category-name category-${category.idCategory}-name">
                        ${category.categoryName}
                    </h6>
                    <span class="category-quantity category-${category.idCategory}-quantity">
                        ${category.categoryQuantity}
                    </span>
                </div>
            </div>
        </div>

    `
}

function generateAllCategories(){
    let categoriesHtml = ``;
    categories.forEach((category) => {
        categoriesHtml += generateCategoryHtml(category);
    });

    return categoriesHtml;
}

categoriesPresentation.innerHTML = generateAllCategories();


const recentProductsPresentation = document.querySelector('.recent-products-presentation');

function generateProductHtml(product){
    return `
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xxs-12 recent-product-cart animation fade-up" data-threshold=0.95>
            <div class="product product-${product.idProduct}">
                <div class="product-head">
                    <div class="product-image">
                        <img src="${product.images[0].imageSource}" class="product-img product-${product.idProduct}-img">
                    </div>
                    <div class="product-actions">
                        <div class="product-action heart-action">
                            <a href="#" class="product-act heart-act">
                                <i class="fa-solid fa-heart"></i>
                            </a>
                        </div>
                        <div class="product-action shopping-cart-action">
                            <a href="./productDetails.html?id=${product.idProduct}" class="product-act shopping-cart-act">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-description">
                    <a href="" class="product-name">
                        ${product.productName}
                    </a>
                    <h5 class="product-price">
                        ${product.productPrice}
                    </h5>
                </div>
            </div>
        </div>
    `
}

function generateAllProductsHtml(){
    let productsHtml = ``;
    products.forEach((product) => {
        productsHtml += generateProductHtml(product);
    });

    return productsHtml;
}

recentProductsPresentation.innerHTML = generateAllProductsHtml();

const offersAndAd = [
    {
        idOfferAd: 1, 
        offerAdImage: '../assets/images/pubs/pub-1.jpg'
    },
    {
        idOfferAd: 2, 
        offerAdImage: '../assets/images/pubs/pub-2.png'
    }
];

const offersAdPresentation = document.querySelector('.offers-ad-presentation');

function generateOfferAdHtml(offerAd, offerAdIndex){
    let animationClass = '';
    if(offerAdIndex % 2 == 0){
        animationClass = 'fade-right';
    }else{
        animationClass = 'fade-left';
    }
    return `
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12 offer-ad-cart animation ${animationClass}" data-threshold=0.8>
            <div class="offer-ad-image offer-ad-${offerAd.idOfferAd}-image">
                <img src="${offerAd.offerAdImage}" class="full-img offer-ad-img offer-ad-img-${offerAd.idOfferAd}" />
            </div>
        </div>
    `;
}

function generateAllOffersAdHtml(){
    let offersAdHtml = ``;
    offersAndAd.forEach((offerAd, offerAdIndex) => {
        offersAdHtml += generateOfferAdHtml(offerAd, offerAdIndex + 1);
    });

    return offersAdHtml;
}

offersAdPresentation.innerHTML = generateAllOffersAdHtml();


const marks = [
    { idMark: 1, markImage: '../assets/images/marks/1.jpg' },
    { idMark: 2, markImage: '../assets/images/marks/2.jpg' },
    { idMark: 3, markImage: '../assets/images/marks/3.jpg' },
    { idMark: 4, markImage: '../assets/images/marks/4.jpg' },
    { idMark: 5, markImage: '../assets/images/marks/5.jpg' },
    { idMark: 6, markImage: '../assets/images/marks/6.jpg' },
    { idMark: 7, markImage: '../assets/images/marks/7.png' }
];

const marksPresentation = document.querySelector('.marks-presentation');

function generateMarkHtml(mark){
    return `
        <div class="carousel-element marks-carousel-element animation zoom-out" data-threshold=0.8>
            <div class="mark-image" draggable="false">
                <img src="${mark.markImage}" class="mark-img mark-${mark.idMark}-img" draggable="false" />
            </div>
        </div>
    `;
}

function generateAllMarksHtml(){
    let marksHtml = ``;
    marks.forEach((mark) => {
        marksHtml += generateMarkHtml(mark);
    });

    return marksHtml;
}

marksPresentation.innerHTML = generateAllMarksHtml();


window.addEventListener('scroll', function(){
    initializeElementsAnimation();
});


let carousel,
    carouselElementWidth;

let draggingState = false,
    startX,
    startScrollLeft;

function dragging(event){
    if(draggingState == true){
        carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
    }
}

function draggingStart(event){
    draggingState = true;
    startScrollLeft = carousel.scrollLeft;
    startX = event.pageX;
    carousel.classList.add('dragging');
}

function draggingStop(){
    draggingState = false;
    carousel.classList.remove('dragging');
}

function goRight(){    
    carousel.scrollLeft = carousel.scrollLeft +  carouselElementWidth;

    if(carousel.scrollLeft == carousel.scrollWidth - carousel.offsetWidth){
        carousel.scrollLeft = 0;
    }
}

function initializeCarousel(){
    carousel = document.querySelector('.carousel');

    carousel.addEventListener('mousedown', (e) => {draggingStart(e)});
    carousel.addEventListener('touchstart', (e) => {draggingStart(e)});

    carousel.addEventListener('mousemove', (e) => {dragging(e)});
    carousel.addEventListener('touchmove', (e) => {dragging(e)});

    carousel.addEventListener('mouseup', (e) => {draggingStop(e)});
    carousel.addEventListener('touchend', (e) => {draggingStop(e)});

    carouselElementWidth = document.querySelector('.carousel-element').offsetWidth;

    setInterval(function(){
        if(draggingState == false){
            goRight();
        }
    }, 3000);
}


initializeCarousel();





