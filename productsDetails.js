const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

function getProductById(idProduct){
    const product = products.find((product) => product.idProduct == idProduct);

    return product;
}

const selectedProduct = getProductById(productId);

function generateOverviewImageCarouselElement(overviewImageCarouselElement, imageIndex){
    let active = '';
    if(imageIndex == 0){
        active = 'active-carousel-img';
    }

    return `
        <div class="carousel-element product-details__overview-image-carousel-element">
            <img src="${overviewImageCarouselElement.imageSource}" class="product-details__product-carousel-img full-img ${active}" draggable="false"/>
        </div>
    `;
}

function generateOverviewImagesCarousel(){
    let overviewImagesCarouselHtml = ``;
    selectedProduct.images.forEach((image, imageIndex) => {
        overviewImagesCarouselHtml += generateOverviewImageCarouselElement(image, imageIndex);
    });

    return overviewImagesCarouselHtml;
}

const productDetailsOverviewImagesCarousel = document.querySelector('.product-details__overview-images-carousel');

productDetailsOverviewImagesCarousel.innerHTML = generateOverviewImagesCarousel();

const productDetailsOverviewSelectedImg = document.querySelector('.product-details__overview-selected-img');

productDetailsOverviewSelectedImg.src =selectedProduct.images[0].imageSource;


const selectedImageHtml = document.querySelector('.product-details__overview-selected-img'),
      productCarouselImages = document.querySelectorAll('.product-details__product-carousel-img');

function removeActiveFromproductCarouselImages(){
    productCarouselImages.forEach(productCarouselImageHtml => {
        productCarouselImageHtml.classList.remove('active-carousel-img');
    });
}

productCarouselImages.forEach(productCarouselImage => {
    productCarouselImage.addEventListener('click', () => {
        ///Remove active class
        removeActiveFromproductCarouselImages();

        productCarouselImage.classList.add('active-carousel-img');

        selectedImageHtml.src = productCarouselImage.src;
    })
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

function initializeCarousel(){
    carousel = document.querySelector('.carousel');

    carousel.addEventListener('mousedown', (e) => {draggingStart(e)});
    carousel.addEventListener('touchstart', (e) => {draggingStart(e)});

    carousel.addEventListener('mousemove', (e) => {dragging(e)});
    carousel.addEventListener('touchmove', (e) => {dragging(e)});

    carousel.addEventListener('mouseup', (e) => {draggingStop(e)});
    carousel.addEventListener('touchend', (e) => {draggingStop(e)});
}

initializeCarousel();

const productQuantityInput = document.querySelector('.form-groupe-quantity-input');

function minusOne(){
    let updatedQuantity = Number(productQuantityInput.value) - 1 ;

    if(updatedQuantity<0){
        productQuantityInput.value = 0;
    }else{
        productQuantityInput.value = updatedQuantity;
    }
}

function plusOne(){
    let updatedQuantity = Number(productQuantityInput.value) + 1 ;
    productQuantityInput.value = updatedQuantity;
}

function addToCart(){
    let quantity = productQuantityInput.value;

    let smallShoppingCartProduct = {
        product: selectedProduct,
        quantity: quantity
    }

    shoppingCart.push(smallShoppingCartProduct);

    saveToLocalStorage();

    document.querySelector('.shopping-cart-action .action-number').innerHTML = Number(getSumQuantity());

    console.log(shoppingCart);
}

function saveToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
}

