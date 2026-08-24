const skills = ["art", "writing", "JavaScript", "GitHub", "Adobe Photoshop"];

const skillsList = document.querySelector('#Skills ul');

for (let i = 0; i < skills.length; i++) {
    const li = document.createElement('li');
    li.textContent = skills[i];
    skillsList.appendChild(li);
}

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = `© ${thisYear} Kenya Escareno`;
footer.appendChild(copyright);
