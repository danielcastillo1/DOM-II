import './less/index.less'

// Your code goes here!


// LOAD
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector("h1")
    heading.textContent = "Ready to go !"

    // COPY
    window.addEventListener("copy", () => {
        navigator.clipboard.readText()
            .then(text => {
                console.log(text)
            })
    })

// CLICK
document.body.addEventListener("click", evt => {
    evt.target.classList.toggle("mirror")
})

// DOUBLE CLICK
document.body.addEventListener("dblclick", evt => {
    evt.target.innerHTML = " "
})

// KEYDOWN
window.addEventListener("keydown", evt => {
    if (evt.key == 6) {
        document.body.innerHTML = "<h1>number 6</h1>"
    }
})

// MOUSEMOVE
document.body.addEventListener("mousemove", evt => {
    const { clientX, clientY} = evt
   // console.log(`mouse is at ${clientX}, ${clientY}`)
})

// mouse enter 
// mouse leave
const destinations = document.querySelectorAll(".destination")
for ( let destination of destinations) {
    destination.addEventListener("mouseenter", () => {
        destination.style.fontWeight = "bold"
    })
    destination.addEventListener("mouseleave", () => {
        destination.style.fontWeight = "initial"
    })
}
}