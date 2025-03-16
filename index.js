function openMenuDrawer() {
  document.getElementById('menuDrawer').style.display = "inline";
}

function closeMenuDrawer() {
  document.getElementById('menuDrawer').style.display = "none";
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    document.getElementById('menuDrawer').removeAttribute("style");
  }
});
