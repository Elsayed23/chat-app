let D1 = document.querySelector(".D1");
let D2 = document.querySelector(".D2");
let D3 = document.querySelector(".D3");

let showIMG = document.querySelector(".showImg img");
let show = document.querySelector(".showImg");
let imgClose = document.querySelector(".showImg i");


D1.addEventListener("click", () => {
    let src = D1.getAttribute("src");
    showIMG.setAttribute("src", src);
    show.style.display = "block";
    imgClose.addEventListener("click", () => {
        show.style.display = "none";
        showIMG.setAttribute("src", "");
    })
})
D2.addEventListener("click", () => {
    let src = D2.getAttribute("src");
    showIMG.setAttribute("src", src);
    show.style.display = "block";
    imgClose.addEventListener("click", () => {
        show.style.display = "none";
        showIMG.setAttribute("src", "");
    })
})
D3.addEventListener("click", () => {
    let src = D3.getAttribute("src");
    showIMG.setAttribute("src", src);
    show.style.display = "block";
    imgClose.addEventListener("click", () => {
        show.style.display = "none";
        showIMG.setAttribute("src", "");
    })
})