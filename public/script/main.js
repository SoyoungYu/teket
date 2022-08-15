var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

var topBtn = document.querySelector('.bxs-upside-down');
topBtn.addEventListener('click', moveToTop);

function moveToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" })
}