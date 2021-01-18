for (var i = 0; i < 5; i++) {
    var title = document.createElement("h2");
    title.textContent = ("Webpage Title");
    title.style.fontSize = "20px";
    title.style.fontWeight = "lighter";
    title.style.fontFamily = "sans-serif";
    title.style.color ="cornflowerblue";
    title.classList.add("border");
    document.body.append(title);
}
