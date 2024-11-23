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
            owner:"samyog",
            description: "This project showcases a modern website design.",
            codeLink: "https://github.com/example/project1-code",
            htmlLink: "https://github.com/example/project1-html",
        },
        {
            title: "Project Title 2",
            owner:"samyog",
            description: "A web app to manage tasks efficiently.",
            codeLink: "https://github.com/example/project2-code",
            htmlLink: "https://github.com/example/project2-html",
        },
        {
            title: "Project Title 3",
            owner:"samyog",
            description: "An AI-powered chatbot application.",
            codeLink: "https://github.com/example/project3-code",
            htmlLink: "https://github.com/example/project3-html",
        },
        {
    title: "Employee Salary Dashboard ",
    owner:"samyog",
    description: "A table displaying employee salary details, including basic salary, tax deductions, and total annual salary. Designed for easy payroll management.",
    codeLink: "https://github.com/Mrcoderv/Web-tech-/blob/main/app.html", // Replace with your actual code URL
    htmlLink: "https://mrcoderv.github.io/Web-tech-/app.html" // Replace with the hosted HTML link
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
