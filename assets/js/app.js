const checkBtn = document.querySelector('.header__secondary--checkbtn');
const navbar = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.header__nav--btn');
function responsiveNavbar() {
    //Open navbar
    checkBtn.addEventListener('click', () => {
        navbar.classList.add('active');
    })
    //Close navbar
    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}

responsiveNavbar();