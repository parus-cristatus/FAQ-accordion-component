document.addEventListener("DOMContentLoaded", function() { 

    const buttons = document.getElementsByClassName("faq__button");
    const desc = document.getElementsByClassName("faq__desc");
    const box = document.getElementById("interactive-box-image");


    ["click", "mouseenter", "mouseleave"].forEach(domEvent => {

        for (let button of buttons) {

            button.addEventListener(domEvent, function() {
                
                if (domEvent === "click") {

                    const dataToggle = this.dataset.toggle;
                    const desc = document.getElementById(dataToggle);

                    this.classList.toggle("active");
                    desc.style.maxHeight ? desc.style.maxHeight = null : desc.style.maxHeight = `${desc.scrollHeight}px`;
                } else if (domEvent === "mouseenter") {
                    box.classList.add("moved");
                } else if (domEvent === "mouseleave") {
                    box.classList.remove("moved");
                }
            }, false);
        }
    });


});