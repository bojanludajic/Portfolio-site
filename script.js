const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const body = document.body;
const icon = toggleDarkModeBtn.querySelector('i');

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.replace('bx-moon', 'bx-sun');
} else {
    body.classList.remove('dark-mode');
    icon.classList.replace('bx-sun', 'bx-moon');
}

toggleDarkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
});


const nameDisplay = document.getElementById('name-display');
const nameToType = 'Bojan Ludajić';
let index = 0;

function typeWriter() {
    if(!nameDisplay) {
        return
    }
    if (index < nameToType.length) {
        nameDisplay.textContent += nameToType.charAt(index);
        index++;
        setTimeout(typeWriter, 125);
    }
}

typeWriter();

const footer = document.getElementById("footer").textContent = `© ${new Date().getFullYear()} Bojan Ludajić`