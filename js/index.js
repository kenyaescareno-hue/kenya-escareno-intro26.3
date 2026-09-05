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

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);
    
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    
    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);
    
    messageForm.reset();
});

fetch("https://api.github.com/users/kenyaescareno-hue/repos")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then((data) => {
        const repositories = data;

        console.log(repositories);

        const projectSection = document.querySelector("#Projects");
        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);

        const projectSection = document.querySelector("#Projects");
        const projectList = projectSection.querySelector("ul");

        const errorMessage = document.createElement("li");
        errorMessage.innerText = "Projects could not be loaded.";
        projectList.appendChild(errorMessage);
    });