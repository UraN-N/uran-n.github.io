const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "3cf7eb00b6a8ff854534dc069303558f256244604.jpg@1192w.avif") {
    myImage.setAttribute("src", "698cd7863b11c3d3c4fedf66020a5669256244604.jpg@1192w_1788h.avif");
  } else {
    myImage.setAttribute("src", "3cf7eb00b6a8ff854534dc069303558f256244604.jpg@1192w.avif");
  }
};