let imgs = document.querySelectorAll(".chats .photos img")

let showIMG = document.querySelector(".showImg img");
let show = document.querySelector(".showImg");
let imgClose = document.querySelector(".showImg i");



imgs.forEach((ele) => {
    ele.addEventListener("click", () => {
        let src = ele.getAttribute("src");
        showIMG.setAttribute("src", src);
        show.style.display = "block";
        imgClose.addEventListener("click", () => {
            show.style.display = "none";
            showIMG.setAttribute("src", "");
        })
    })
})
