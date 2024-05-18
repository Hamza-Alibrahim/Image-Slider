let scoller = document.querySelector(".gallery"),
    back = document.querySelector(".back"),
    next = document.querySelector(".next");
scoller.addEventListener("wheel", (e) => {
    e.preventDefault();
    scoller.scrollLeft += e.deltaY;
});
next.onclick = () => { scoller.scrollLeft += 900; };
back.onclick = () => { scoller.scrollLeft -= 900; };