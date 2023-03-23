// where our dom content loaded resides
document.addEventListener("DOMContentLoaded",function() {
    fetch("http://localhost:3000/ramens")//fetch the data 
    .then(res => res.json()) // changing the response to json
    .then(ramens =>{
        const ramenMenu = document.querySelector("#ramen-menu")
        for (const element of ramens) {
            let image = document.createElement("img")
            image.src = element.image

            ramenMenu.appendChild(image)
            
        }
    })
    
})
