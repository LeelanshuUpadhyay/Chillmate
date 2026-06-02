// ===============================
// CHILLMATE PREMIUM JAVASCRIPT
// ===============================

// Smooth Navigation Scroll

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

});

});

// ===============================
// FAQ ACCORDION
// ===============================

const faqCards =
document.querySelectorAll('.faq-card');

faqCards.forEach(card => {

card.addEventListener('click', () => {

faqCards.forEach(item => {

if(item !== card){

item.classList.remove('active');

}

});

card.classList.toggle('active');

});

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const sections =
document.querySelectorAll('section');

const observer =
new IntersectionObserver(

entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('visible');

}

});

},

{
threshold:0.15
}

);

sections.forEach(section => {

observer.observe(section);

});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

const header =
document.querySelector('.header');

window.addEventListener('scroll', () => {

if(window.scrollY > 50){

header.style.boxShadow =
'0 10px 40px rgba(0,191,255,.15)';

}

else{

header.style.boxShadow = 'none';

}

});

// ===============================
// BUTTON GLOW EFFECT
// ===============================

document.querySelectorAll('.cta-btn')
.forEach(btn => {

btn.addEventListener('mouseenter', () => {

btn.style.transform =
'translateY(-4px) scale(1.03)';

});

btn.addEventListener('mouseleave', () => {

btn.style.transform =
'translateY(0) scale(1)';

});

});

// ===============================
// GALLERY IMAGE POPUP
// ===============================

const galleryImages =
document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {

img.addEventListener('click', () => {

const overlay =
document.createElement('div');

overlay.classList.add('image-popup');

overlay.innerHTML =

`

<div class="popup-container">
<img src="${img.src}">
</div>
`;

document.body.appendChild(overlay);

overlay.addEventListener('click', () => {

overlay.remove();

});

});

});

// ===============================
// TEAM CARD ANIMATION
// ===============================

const teamCards =
document.querySelectorAll('.team-card');

teamCards.forEach(card => {

card.addEventListener('mouseenter', () => {

card.style.transform =
'translateY(-12px)';

});

card.addEventListener('mouseleave', () => {

card.style.transform =
'translateY(0px)';

});

});

// ===============================
// PARALLAX HERO EFFECT
// ===============================

window.addEventListener('scroll', () => {

const hero =
document.querySelector('.hero');

const scrolled =
window.pageYOffset;

if(hero){

hero.style.backgroundPositionY =
scrolled * 0.4 + 'px';

}

});

// ===============================
// DYNAMIC YEAR
// ===============================

const footerYear =
document.getElementById('year');

if(footerYear){

footerYear.textContent =
new Date().getFullYear();

}

// ===============================
// CHILLMATE EARLY ACCESS COUNTER
// ===============================

let supporters = 128;

const counter =
document.getElementById('supporters-count');

if(counter){

setInterval(() => {

supporters +=
Math.floor(Math.random() * 3);

counter.textContent =
supporters;

},5000);

}

// ===============================
// PREORDER BUTTON TRACKING
// ===============================

document
.querySelectorAll('.cta-btn')
.forEach(button => {

button.addEventListener('click', () => {

console.log(
'ChillMate Early Access Clicked'
);

});

});

// ===============================
// WELCOME MESSAGE
// ===============================

window.addEventListener('load', () => {

console.log(
'Welcome to ChillMate™'
);

console.log(
'Reimagining Hydration Through Innovation.'
);

});

// ===============================
// IMAGE POPUP CSS INJECTION
// ===============================

const popupStyle =
document.createElement('style');

popupStyle.innerHTML =

`
.image-popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
}

.popup-container img{
max-width:90%;
max-height:90vh;
border-radius:20px;
box-shadow:0 0 40px rgba(0,191,255,.5);
}
`;

document.head.appendChild(
popupStyle
);

// ===============================
// END OF SCRIPT
// ===============================

/*
CHILLMATE TEAM

Founder:
Leelanshu Upadhyay

Operations Manager:
Aditya Patil

Social Media Manager:
Agrani Priya Srivastava

Business Strategist:
Rudrakash Daryani

Marketing Manager:
Roshan Upadhyay

Video Editor & Product Designer:
Ranveer Sharma
*/
// ChillMate Countdown Timer

const launchDate =
new Date("December 31, 2026 23:59:59").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = launchDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor((distance % (1000 * 60 * 60 * 24))
/ (1000 * 60 * 60));

const minutes =
Math.floor((distance % (1000 * 60 * 60))
/ (1000 * 60));

const seconds =
Math.floor((distance % (1000 * 60))
/ 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
},1000);
