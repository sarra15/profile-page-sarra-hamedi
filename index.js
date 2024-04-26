const btnlinkdin =document.querySelector(".btn-linkedin");
const imgsarra =document.querySelector(".picture_circul");
const audio = document.querySelector("audio");

console.log(btnlinkdin);
console.log(imgsarra);
console.log(audio);

btnlinkdin.addEventListener("click",()=>{
    imgsarra.classList.add("animate__animated");
    imgsarra.classList.add("animate__bounce");
    audio.play();
    setTimeout(() => {
        imgsarra.classList.remove("animate__animated");
        imgsarra.classList.remove("animate__bounce");
    }, 2000);
});