const scrollToTopButton = document.getElementById('scrollToTopButton');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; 
    } else {
        scrollToTopButton.style.display = "none";  
    }
};

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
