function toggleNavbar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {x.className += " responsive";}
  else {x.className = "navbar";}
}
function openModal(src){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modal-img").src=src;
}
