function upDate(previewPic) {
    console.log("Mouse over triggered!");
    console.log("Image source: " + previewPic.src);
    console.log("Image alt: " + previewPic.alt);

    // Change background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    // Change the text
    document.getElementById("image").innerHTML = previewPic.alt;
}

function undo() {
    console.log("Mouse out triggered!");

    // Reset background image
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset text
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
