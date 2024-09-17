const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = toggleDarkModeBtn.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bx-moon', 'bx-sun');
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
    }
});


const nameDisplay = document.getElementById('name-display');
const nameToType = 'Bojan Ludajić';
let index = 0;

function typeWriter() {
    if (index < nameToType.length) {
        nameDisplay.textContent += nameToType.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

typeWriter();