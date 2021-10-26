function goToProduct() {
  document
    .getElementById("products_section")
    .scrollIntoView({ block: "center", behavior: "smooth" });
}

function goToContact() {
  document
    .getElementById("contact_footer")
    .scrollIntoView({ block: "center", behavior: "smooth" });
}

document.getElementById("tovary").addEventListener("click", goToProduct, false);
document
  .getElementById("contact")
  .addEventListener("click", goToContact, false);
