// Smooth scrolling for navbar links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// FAQ Toggle
const faqCards = document.querySelectorAll('.faq-card');
faqCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
        const answer = card.querySelector('p');
        if(card.classList.contains('active')){
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

// Pre-order Button Animation
const preorderBtn = document.querySelectorAll('.cta-btn');
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

// Optional: Fade-in sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
// Hydration Game
const fillBtn = document.getElementById('fill-btn');
const water = document.querySelector('.water');
const levelText = document.getElementById('level-text');

let level = 0; // initial water level

fillBtn.addEventListener('click', () => {
    if(level < 100){
        level += 10; // increase 10% per click
        water.style.height = level + '%';
        levelText.textContent = `Water Level: ${level}%`;
    }
    if(level >= 100){
        alert("🎉 Congratulations! Your ChillMate is full. Stay hydrated!");
    }
});
// Customize Bottle Feature
const bottleImg = document.getElementById('bottle-img');
const colorOptions = document.querySelectorAll('.color-circle');
const patternButtons = document.querySelectorAll('.pattern-options button');
const customTextInput = document.getElementById('custom-text');
const applyBtn = document.getElementById('apply-custom');
const customOverlay = document.getElementById('custom-overlay');
const preview = document.querySelector('.bottle-preview');

let selectedColor = 'black';
let selectedPattern = 'none';

colorOptions.forEach(circle => {
    circle.addEventListener('click', () => {
        selectedColor = circle.getAttribute('data-color').toLowerCase();
        updateBottle();
    });
});

patternButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedPattern = button.getAttribute('data-pattern');
        updateBottle();
    });
});

applyBtn.addEventListener('click', () => {
    updateBottle();
    alert(`Your customized ChillMate is ready to preview!`);
});

function updateBottle() {
    // Update color
    switch(selectedColor){
        case 'black':
            bottleImg.src = 'images/chillmate.png';
            break;
        case 'red':
            bottleImg.src = 'images/chillmate-red.png';
            break;
        case 'white':
            bottleImg.src = 'images/chillmate-white.png';
            break;
        case 'blue':
            bottleImg.src = 'images/chillmate-blue.png';
            break;
    }

    // Update pattern overlay
    preview.style.background = selectedPattern !== 'none'
      ? `url('images/pattern-${selectedPattern}.png') no-repeat center/cover`
      : 'none';

    // Add custom text
    let text = customTextInput.value.trim();
    customOverlay.innerText = text;
}
// Countdown Timer for Pre-orders
const countdown = () => {
    const endDate = new Date("October 15, 2025 23:59:59").getTime(); // Set your end date
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0"+days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0"+hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0"+minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0"+seconds : seconds;

    if(distance < 0){
        document.getElementById("countdown").innerHTML = "<h3>Pre-orders have ended!</h3>";
    }
};

// Update every second
setInterval(countdown, 1000);