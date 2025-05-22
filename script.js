var collapseButton = document.querySelector('.collapse');

collapseButton.onclick =  () => {
    let navbarElement = document.querySelector('.navbar');
    navbarElement.parentElement.classList.toggle('d-md-inf-none');
}