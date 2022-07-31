var imagesArray = ["./images/pic2.png", "./images/pic3.png", "./images/4.png", "./images/6.png", "./images/4.png", "./images/pic2.png", "./images/pic3.png", "./images/6.png"];

function displayImage() {
    var randomIndex = [];
    while (randomIndex.length < 8) {
        var num = Math.floor(Math.random() * 8);
        if (randomIndex.indexOf(num) == -1) {
            randomIndex.push(num);
        }
    }
    for (var i = 0; i < 8; i++) {
        document.getElementById('img' + (i + 1)).src = imagesArray[randomIndex[i]];
    }
}
displayImage();

function play() {
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName("card")[i].onclick = function() {
            this.classList.add("flip-card")
            var flippedElements = [...document.getElementsByClassName("flip-card")]
            if (flippedElements.length == 2) {
                if (flippedElements[0].children[0].children[1].children[0].src === flippedElements[1].children[0].children[1].children[0].src) {
                    setTimeout(() => {
                        flippedElements.forEach(e => {
                            e.classList.remove("flip-card");
                            e.classList.add("hidden");
                        });
                    }, 400);
                } else {
                    setTimeout(() => {
                        flippedElements.forEach(e => {
                            e.classList.remove("flip-card");
                        });
                    }, 600);
                }
            }
        }
    }
}
play();
var cards = [...document.getElementsByClassName("icon")]
console.log(cards);
var count = 3;

for (var j = cards.length; j > 0; j--) {
    // debugger;
    document.getElementById("hint").onclick = function() {
        if (count === 3) {
            cards[2].classList.add("hidden")
        }
        if (count === 2) {
            cards[1].classList.add("hidden")
        }
        if (count === 1) {
            cards[0].classList.add("hidden")
            this.disabled = true;
        }
        count--;
        for (var i = 0; i < 8; i++) {
            var flippedElements = [...document.getElementsByClassName("card")];
            console.log(flippedElements)
            if (flippedElements[i]) {
                setTimeout(() => {
                    flippedElements.forEach(e => {
                        e.classList.remove("flip-card");
                    });
                }, 500)
            }
            setTimeout(() => {
                flippedElements.forEach(e => {
                    e.classList.add("flip-card");
                });
            }, 1000)
            setTimeout(() => {
                flippedElements.forEach(e => {
                    e.classList.remove("flip-card");
                });
            }, 1500)
        }
    }
}
document.getElementById("start").onclick = function() {
    window.location.href = window.location.href;
}