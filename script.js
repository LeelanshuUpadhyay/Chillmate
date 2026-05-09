// ==========================
// Smooth Scrolling Navbar
// ==========================

const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// ==========================
// FAQ Toggle
// ==========================

const faqCards =
    document.querySelectorAll('.faq-card');

faqCards.forEach(card => {

    card.addEventListener('click', () => {

        card.classList.toggle('active');

        const answer = card.querySelector('p');

        if (answer) {

            if (card.classList.contains('active')) {

                answer.style.display = 'block';

            } else {

                answer.style.display = 'none';

            }

        }

    });

});

// ==========================
// Button Hover Animation
// ==========================

const preorderBtn =
    document.querySelectorAll('.cta-btn');

preorderBtn.forEach(btn => {

    btn.addEventListener('mouseenter', () => {

        btn.style.transform = 'scale(1.1)';
        btn.style.boxShadow = '0 0 40px #00f';

    });

    btn.addEventListener('mouseleave', () => {

        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0 0 20px #00f';

    });

});

// ==========================
// Fade In Sections
// ==========================

const sections =
    document.querySelectorAll('section');

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

            }

        });

    }, {
        threshold: 0.2
    });

sections.forEach(section => {

    observer.observe(section);

});

// ==========================
// Hydration Game
// ==========================

const fillBtn =
    document.getElementById('fill-btn');

const water =
    document.querySelector('.water');

const levelText =
    document.getElementById('level-text');

let level = 0;

if (fillBtn && water && levelText) {

    fillBtn.addEventListener('click', () => {

        if (level < 100) {

            level += 10;

            water.style.height =
                level + '%';

            levelText.textContent =
                `Water Level: ${level}%`;

        }

        if (level >= 100) {

            levelText.textContent =
                "Bottle Full! Stay Hydrated 💧";

        }

    });

}

// ==========================
// Customize Bottle Feature
// ==========================

const bottleImg =
    document.getElementById('bottle-img');

const colorOptions =
    document.querySelectorAll('.color-circle');

const patternButtons =
    document.querySelectorAll('.pattern-options button');

const customTextInput =
    document.getElementById('custom-text');

const applyBtn =
    document.getElementById('apply-custom');

let customOverlay =
    document.getElementById('custom-overlay');

const preview =
    document.querySelector('.bottle-preview');

// Create overlay automatically
if (!customOverlay && preview) {

    customOverlay =
        document.createElement('div');

    customOverlay.id = 'custom-overlay';

    preview.appendChild(customOverlay);

}

let selectedColor = 'black';
let selectedPattern = 'none';

// Color Change
colorOptions.forEach(circle => {

    circle.addEventListener('click', () => {

        selectedColor =
            circle.getAttribute('data-color')
            .toLowerCase();

        updateBottle();

    });

});

// Pattern Change
patternButtons.forEach(button => {

    button.addEventListener('click', () => {

        selectedPattern =
            button.getAttribute('data-pattern');

        updateBottle();

    });

});

// Apply Customization
if (applyBtn) {

    applyBtn.addEventListener('click', () => {

        updateBottle();

        alert(
            'Your customized ChillMate is ready!'
        );

    });

}

// Bottle Update Function
function updateBottle() {

    if (!bottleImg) return;

    // Change Bottle Image
    switch (selectedColor) {

        case 'black':
            bottleImg.src =
                'images/chillmate.png';
            break;

        case 'red':
            bottleImg.src =
                'images/chillmate-red.png';
            break;

        case 'white':
            bottleImg.src =
                'images/chillmate-white.png';
            break;

        case 'blue':
            bottleImg.src =
                'images/chillmate-blue.png';
            break;

        default:
            bottleImg.src =
                'images/chillmate.png';

    }

    // Pattern Overlay
    if (preview) {

        preview.style.background =
            selectedPattern !== 'none'
                ? `url('images/pattern-${selectedPattern}.png') center/cover no-repeat`
                : 'none';

    }

    // Custom Name
    if (customOverlay && customTextInput) {

        customOverlay.innerText =
            customTextInput.value.trim();

    }

}

// ==========================
// Countdown Timer
// ==========================

function countdown() {

    const endDate =
        new Date("October 15, 2025 23:59:59")
        .getTime();

    const now =
        new Date().getTime();

    const distance =
        endDate - now;

    if (distance < 0) {

        const timer =
            document.querySelector('.timer');

        if (timer) {

            timer.innerHTML =
                "Pre-orders have ended!";

        }

        return;
    }

    const days =
        Math.floor(distance /
            (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60));

    const minutes =
        Math.floor((distance %
            (1000 * 60 * 60)) /
            (1000 * 60));

    const seconds =
        Math.floor((distance %
            (1000 * 60)) / 1000);

    const daysEl =
        document.getElementById("days");

    const hoursEl =
        document.getElementById("hours");

    const minutesEl =
        document.getElementById("minutes");

    const secondsEl =
        document.getElementById("seconds");

    if (daysEl)
        daysEl.textContent =
            String(days).padStart(2, '0');

    if (hoursEl)
        hoursEl.textContent =
            String(hours).padStart(2, '0');

    if (minutesEl)
        minutesEl.textContent =
            String(minutes).padStart(2, '0');

    if (secondsEl)
        secondsEl.textContent =
            String(seconds).padStart(2, '0');

}

// Start Timer
setInterval(countdown, 1000);

countdown();