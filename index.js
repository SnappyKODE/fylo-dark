const icon = document.querySelectorAll(".icon");
icon.forEach(element => {
    element.addEventListener("mouseenter",()=>{
        element.firstElementChild.firstElementChild.classList.add("b")
    })
    element.addEventListener("mouseleave",()=>{
        element.firstElementChild.firstElementChild.classList.remove("b")
    })
});

//email validation remaining