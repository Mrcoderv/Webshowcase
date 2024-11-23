document.addEventListener("DOMContentLoaded", () => {
    // Create Welcome Popup
    const popup = document.getElementById("welcome-popup");
    popup.innerHTML = `
        <h2>🎉 Welcome to My Project Showcase!</h2>
        <p>Explore my latest projects and feel free to check them out.</p>
    `;

    // Remove the popup after 4 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 4000);

    // Add Projects Dynamically
    const projects = [
        {
            title: "Table.html",
            description: "This project showcases a modern website design.",
            codeLink: "https://github.com/example/project1-code",
            htmlLink: "https://github.com/example/project1-html",
        },
        {
            title: "Project Title 2",
            description: "A web app to manage tasks efficiently.",
            codeLink: "https://github.com/example/project2-code",
            htmlLink: "https://github.com/example/project2-html",
        },
        {
            title: "Project Title 3",
            description: "An AI-powered chatbot application.",
            codeLink: "https://github.com/example/project3-code",
            htmlLink: "https://github.com/example/project3-html",
        },
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.codeLink}" target="_blank">View Code</a>
            <a href="${project.htmlLink}" target="_blank">View HTML</a>
        `;
        projectList.appendChild(projectElement);
    });
});
