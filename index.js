const skills = ["art", "writing", "JavaScript", "GitHub", "Adobe Photoshop"];

const skillsList = document.querySelector('#Skills ul');

skills.forEach(function(skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = `© ${thisYear} Kenya Escareno`;
footer.appendChild(copyright);
