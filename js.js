function swapStyleSheet(sheet, image, icon, hrt) {
    document.getElementById("style").setAttribute("href", sheet);
    img = document.getElementById("image").setAttribute("src", image)
    ic = document.getElementById("icon").setAttribute("href", icon)
    # changing the hearts for compatibility
    hrt = document.getElementById("hrt").innerHTML = hrt
    hrtf = document.getElementById("hrtf").innerHTML = hrt
}

function initate() {
    var heart = document.getElementById("hrt");
    var style = document.getElementById("style");
    
    # continuous and seamless
    if ( style.getAttribute("href") == "index.css") {
        heart.onclick = function () { swapStyleSheet("red.css", "images/prprd.webp", "https://discord.com/assets/0483f2b648dcc986d01385062052ae1c.svg", "❤"); };
    } else if (style.getAttribute("href") == "red.css") {
        heart.onclick = function () { swapStyleSheet("cyan.css", "images/prpcy.webp", "https://discord.com/assets/e37c985edda06b7d5f4559bc838c1bde.svg", "💙"); };
    } else if (style.getAttribute("href") == "cyan.css") {
        heart.onclick = function () { swapStyleSheet("index.css", "images/prp.webp", "https://discord.com/assets/46dc70e2608d986da6de64c6ba5a59da.svg", "💛"); };
    }
    
    
}

window.onload = initate;          # Making sure we get functionality on load
window.ontransitionend = initate; # This makes this work overall, otherwise it can't be continuous
