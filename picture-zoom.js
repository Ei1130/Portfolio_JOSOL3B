
function openImage(image) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src = image.src;
    popup.classList.add("active");
}

function closeImage() {
    document.getElementById("imagePopup")
        .classList.remove("active");
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeImage();
    }
});
