let index = 0;
const slides = document.getElementById('slides');
const dots = document.getElementById('dots');
const total = 5;


for (let i = 0; i < total; i++) {
    let d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    dots.appendChild(d);
}


function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    [...dots.children].forEach((d, i) => d.classList.toggle('active', i === index));
}


document.getElementById('next').onclick = () => { index = (index + 1) % total; update(); };
document.getElementById('prev').onclick = () => { index = (index - 1 + total) % total; update(); };