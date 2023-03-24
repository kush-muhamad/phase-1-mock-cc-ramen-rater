//Task 1
// where our dom content loaded resides
const ramenMenuDIv = document.getElementById("ramen-menu");
const detailImage = document.getElementById("detail-image");
const ramenName = document.getElementById("detail-name");
const restaurantName = document.getElementById("restaurant-name");
const commentDisplay = document.getElementById("comment-display");
const ratingDisplay = document.getElementById("rating-display");
const newRamenForm = document.getElementById("new-ramen");
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => RenderRamens(ramens));
//.catch((error) => console.log("error", error));

function RenderRamens(ramens) {
  ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
  //creates an  image element
  const ramenImageElement = document.createElement("img");
  ramenImageElement.src = ramen.image;
  ramenMenuDIv.append(ramenImageElement);
  //task 2
  ramenImageElement.addEventListener("click", () => addRamenListner(ramen));

  function addRamenListner(ramen) {
    //calls the data  and assigns the image or text content to the specific element
    // ie once clicked add the data to the respective elements in this case ids
    console.log(ramen);
    detailImage.src = ramen.image;
    ramenName.textContent = ramen.name;
    restaurantName.textContent = ramen.restaurant;
    commentDisplay.textContent = ramen.comment;
    ratingDisplay.textContent = ramen.rating;
  }
  newRamenForm.addEventListener("submit", newRamenHandler);

  function newRamenHandler(e) {
    e.preventDefault(); // the page should not refresh once we pass data into it
    // shall create a new varibale which will have an object that will
    // the object keys with their new information and will target the form only as its where we passing data

    const newRamen = {
      comment: e.target["new-comment"].value, // value is the data passed in the key and we use the target keyword
      image: e.target.image.value,
      name: e.target.name.value,
      rating: e.target.rating.value,
      restaurant: e.target.restaurant.value,
    };
    renderRamen(newRamen)
    e.target.reset()
    // we passing this in the renderRamen function because it creates an element for us already
    //once we click on the image give us access to create a new form based on the image and submit
  }
}
