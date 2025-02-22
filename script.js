document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carouselContent = document.querySelector(".carousel-content");
    
    let scrollPosition = 0;
    
    prevButton.addEventListener("click", function() {
        scrollPosition -= 300;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        carouselContent.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", function() {
        scrollPosition += 300;
        if (scrollPosition > carouselContent.scrollWidth - carouselContent.clientWidth) {
            scrollPosition = carouselContent.scrollWidth - carouselContent.clientWidth;
        }
        carouselContent.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    });
});
