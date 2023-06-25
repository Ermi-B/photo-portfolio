const carousel = document.getElementById("carousel")
const firstImg = carousel.querySelectorAll("img")[0];
const lastImg = carousel.querySelectorAll("img")[-1]
arrowIcons = document.querySelectorAll(".wrapper i")

let firstImgWidth = firstImg.clientWidth +(firstImg.clientWidth*2); //adding margin value
arrowIcons.forEach(icon=>{
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    icon.addEventListener("click",()=>{
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
       if (carousel.scrollLeft >= maxScrollLeft) {
        carousel.scrollLeft = 0; // Reset to the beginning if reached the end
      } else {
        carousel.scrollLeft += firstImgWidth;
      }

    })
})

carousel.addEventListener("mouseenter", () => {
    clearInterval(intervalId); // Stop the interval when the mouse enters the carousel
  });
  
  carousel.addEventListener("mouseleave", () => {
    intervalId = setInterval(() => {
      startSliding()
    }, 7000); // Start the interval when the mouse leaves the carousel
  });
  
 
const startSliding = ()=>{
  // Start the interval initially
intervalId = setInterval(() => {
  const scrollLeft = carousel.scrollLeft;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  if (scrollLeft >= maxScrollLeft) {
    carousel.scrollLeft = 0; // Reset to the beginning if reached the end
  } else {
    carousel.scrollLeft += firstImgWidth;
  }
}, 7000);
}
startSliding();