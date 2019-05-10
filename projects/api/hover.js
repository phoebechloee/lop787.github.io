const newspaper = document.getElementById("newspaper");

newspaper.addEventListener("mouseenter", function( event ) {
  event.target.src = "newspaper2.jpg";
});

newspaper.addEventListener("mouseleave", function( event ) {
  event.target.src = "newspaper1.jpg";
});

const train = document.getElementById("train");

train.addEventListener("mouseenter", function( event ) {
  event.target.src = "train2.jpg";
});

train.addEventListener("mouseleave", function( event ) {
  event.target.src = "train1.jpg";
});

const juice = document.getElementById("juice");

juice.addEventListener("mouseenter", function( event ) {
  event.target.src = "milk.jpg";
});

juice.addEventListener("mouseleave", function( event ) {
  event.target.src = "juice.jpg";
});

const hug = document.getElementById("hug");

hug.addEventListener("mouseenter", function( event ) {
  event.target.src = "hug2.jpg";
});

hug.addEventListener("mouseleave", function( event ) {
  event.target.src = "hug1.jpg";
});

function reload(){
  location.reload();
}
