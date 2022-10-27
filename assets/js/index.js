const mainImages = document.querySelectorAll(".images a");
const popup= document.querySelector(".popup")
const sliderImg = document.querySelector(".inner img")
mainImages.forEach((img)=>{
    // console.log(img);
    img.addEventListener("click",function(e){
        e.preventDefault();
        // console.log(this);
        let imgSrc = this.getAttribute("href");
        sliderImg.setAttribute("src", imgSrc)
        popup.style.display= "block";

    })
})

document.addEventListener('click', (e)=>{
if (e.target.classList.contains("popup")) {
 popup.style.display= "none";
}
})