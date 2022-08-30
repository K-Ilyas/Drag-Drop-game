
document.addEventListener("DOMContentLoaded", (e) => {

    let dragged = null;
    let countSuccess = 0;
    document.addEventListener("dragstart", event => {
        dragged = event.target;
        event.target.style.zIndex = 1;
    });

    document.addEventListener("dragover", event => {
        event.preventDefault();
    });

    document.addEventListener("drop", event => {
        event.target.style.zIndex = "auto";

        event.preventDefault();
        if (event.target.className.split(" ")[0] === "chart") {
            if (event.target.getAttribute("color") == dragged.getAttribute("color")) {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                dragged.style.margin = "0px";
                dragged.style.position = "static";
                countSuccess++;
            } else {
                event.target.style.border = "2px solid red";
                setTimeout(() => {
                    event.target.style.border = "1px solid black";
                }, 1500);
            }
        }
        if (countSuccess === 31) {
            Array.prototype.forEach.call(document.getElementsByClassName("chart"), function (e) {
                // Do stuff here
                e.classList.add("animation");
            });
        }

    });
});