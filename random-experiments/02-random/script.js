import { awards } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis({
        autoRaf: true,
    });
});

const awardsList = document.querySelector(".awards-list");
const awardPreview = document.querySelector(".awards-preview");

const POSITION = {
    BOTTOM: 0,
    MIDDLE: -80,
    TOP: -160,
};

let lastMousePosition = { x: 0, y: 0 };
let activeAward = null;
let ticking = false;
let mouseTimeout = null;
let isMouseMoving = false;

awards.forEach((award) => {
    const awardsElement = document.createElement("div");
    awardsElement.className = "award";

    awardsElement.innerHTML = `
    <div class="award-wrapper">
        <div class="award-name">
            <h1>${award.name}</h1>
            <h1>${award.type}</h1>
        </div>
        <div class="award-project">
            <h1>${award.project}</h1>    
            <h1>${award.label}</h1> 
        </div>
        <div class="award-name">
            <h1>${award.name}</h1>       
            <h1>${award.type}</h1>  
        </div>
    </div>      
    `;

    awardsList.appendChild(awardsElement);
});

const awardsElement = document.querySelectorAll(".award");

const animatePreview = () => {
    const awardsListRect = awardsList.getBoundingClientRect();
    if (
        lastMousePosition.x < awardsListRect.left ||
        lastMousePosition.x > awardsListRect.right ||
        lastMousePosition.y < awardsListRect.top ||
        lastMousePosition.y > awardsListRect.bottom
    ) {
        const previewImages = awardPreview.querySelectorAll("img");
        previewImages.forEach((img) => {
            gsap.to(img, {
                scale: 0,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => img.remove(),
            });
        });
    }
};

const updateAwards = () => {
    animatePreview();

    if (activeAward) {
        const rect = activeAward.getBoundingClientRect();
        const isStillOver =
            lastMousePosition.x >= rect.left &&
            lastMousePosition.x <= rect.right &&
            lastMousePosition.y >= rect.top &&
            lastMousePosition.y <= rect.bottom;

        if (!isStillOver) {
            const wrapper = activeAward.querySelector(".award-wrapper");
            const leavingFromTop = lastMousePosition.y < rect.top + rect.height / 2;

            gsap.to(wrapper, {
                y: leavingFromTop ? POSITION.TOP : POSITION.BOTTOM,
                duration: 0.4,
                ease: "power2.out",
            });
            activeAward = null;
        }
    }

    awardsElement.forEach((award, index) => {
        if (award === activeAward) return;

        const rect = award.getBoundingClientRect();
        const isMouseOver =
            lastMousePosition.x >= rect.left &&
            lastMousePosition.x <= rect.right &&
            lastMousePosition.y >= rect.top &&
            lastMousePosition.y <= rect.bottom;

        if (isMouseOver) {
            const wrapper = award.querySelector(".award-wrapper");
            const enterFromTop = lastMousePosition.y < rect.top + rect.height / 2;

            gsap.to(wrapper, {
                y: POSITION.MIDDLE,
                duration: 0.4,
                ease: "power2.out",
            });

            activeAward = award;
        }
    });

    ticking = false;
};

document.addEventListener("mousemove", (e) => {
    lastMousePosition.x = e.clientX;
    lastMousePosition.y = e.clientY;

    isMouseMoving = true;
    if (mouseTimeout) {
        clearTimeout(mouseTimeout);
    }

    const awardsListRect = awardsList.getBoundingClientRect();
    const isInsideAwardsList =
        lastMousePosition.x >= awardsListRect.left &&
        lastMousePosition.x <= awardsListRect.right &&
        lastMousePosition.y >= awardsListRect.top &&
        lastMousePosition.y <= awardsListRect.bottom;

    if (isInsideAwardsList) {
        mouseTimeout = setTimeout(() => {
            isMouseMoving = false;
            const images = awardPreview.querySelectorAll("img");
            if (images.length > 1) {
                const lastImage = images[images.length - 1];
                images.forEach((img) => {
                    if (img !== lastImage) {
                        gsap.to(img, {
                            scale: 0,
                            duration: 0.4,
                            ease: "power2.out",
                            onComplete: () => img.remove(),
                        });
                    }
                });
            }
        }, 2000);
    }

    animatePreview();
});

document.addEventListener(
    "scroll",
    () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateAwards();
            });
            ticking = true;
        }
    },
    { passive: true }
);

awardsElement.forEach((award, index) => {
    const wrapper = award.querySelector(".award-wrapper");

    award.addEventListener("mouseenter", (e) => {
        activeAward = award;
        const rect = award.getBoundingClientRect();
        const enterFromTop = e.clientX < rect.top + rect.height / 2;

        gsap.to(wrapper, {
            y: POSITION.MIDDLE,
            duration: 0.4,
            ease: "power2.out",
        });

        const img = document.createElement("img");
        img.src = `assets/${index + 1}.avif`;
        img.style.position = "absolute";
        img.style.top = 0;
        img.style.left = 0;
        img.style.scale = 0;
        img.style.zIndex = Date.now();

        awardPreview.appendChild(img);

        gsap.to(img, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    award.addEventListener("mouseleave", (e) => {
        activeAward = null;
        const rect = award.getBoundingClientRect();
        const leavingFromTop = e.clientY < rect.top + rect.height / 2;

        gsap.to(wrapper, {
            y: leavingFromTop ? POSITION.TOP : POSITION.BOTTOM,
            duration: 0.4,
            ease: "power2.out"
        });

        const images = awardPreview.querySelectorAll("img");
        images.forEach(img => {
            gsap.to(img, {
                scale: 0,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => img.remove()
            });
        });
    });
});
