function onLoad() {
    addListeners();
}

function addListeners() {
    var slides = document.getElementsByClassName("accordion__item");
    for (var i = 0; i < slides.length; i++) {
        slides[i].addEventListener("click", function () {
            accordionOpen(this)
        });
    }
}

function accordionOpen(element) {
    element.classList.toggle("accordion__item--active");

    var slides = document.getElementsByClassName("accordion__item");
    for (var i = 0; i < slides.length; i++) {
        if (slides[i] !== element) {
            slides[i].classList.remove("accordion__item--active");
        }
    }
}

function popup() {
    var activeSlide = document.getElementsByClassName("accordion__item--active");
    var popup = document.getElementById("popup");
    var popupWindow = document.getElementById("popup__window");
    var popupHeader = document.getElementById("popup__header");

    popup.classList.toggle("section--popup--closed");

    var name = activeSlide[0].children;
    for (var i = 0; i < name.length; i++) {
        if (name[i].className == "item__header") {
            var header = name[i].children;
            for (var j = 0; j < header.length; j++) {
                if (header[j].className == "accordion__img") {
                    popupWindow.style.backgroundImage = "url(" + header[j].getAttribute("src") + ")";
                }
                if (header[j].className == "item__name") {
                    popupHeader.textContent = header[j].textContent;
                }
            }
        }
    }
}


