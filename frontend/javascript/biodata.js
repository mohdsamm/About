function reveal() {
    var item = document.querySelectorAll(".scroller");
    for (var i = 0; i < item.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = item[i].getBoundingClientRect().top;
        var elementVisible = 0.7 * window.innerHeight;
        const boxBio = document.getElementById(`box-item-biodata-${i}`);
        
        if (boxBio) {  // Ensure the element exists
            if (elementTop < windowHeight - elementVisible) {
                boxBio.classList.add("active");
                if (i === item.length - 1) {
                    scrollerOff(); // Remove indicator only after all sections are revealed
                }
            } else {
                boxBio.classList.remove("active");
            }
        }
    }
}

function scrollerOff() {
    const cond = document.getElementById('scroll-down-biodata');
    if (cond) {
        cond.className = "biodata-scroll-box";
    }
}

function isBiodataActive() {
    try {
        const scrollBox = document.getElementById('scroller-biodata');
        if (scrollBox) {
            scrollBox.addEventListener("scroll", reveal);
        }
    } catch (error) {
        console.error("Error in isBiodataActive:", error);
    }
}

// Run the function on page load
window.onload = () => {
    isBiodataActive();
    reveal(); // Run once initially
};
