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
            title: "Table example  by samyog",
            description: "table example .",
            codeLink: "https://github.com/example/html&css.html",
            htmlLink: "https://mrcoderv.github.io/Web-tech-/html&css.html",
            owner: { username: "samyog7901", name: "samyog" }, // GitHub username and owner name
        },
        {
            title: "Employee Salary Dashboard by samyog ",
           description: "A table displaying employee salary details, including basic salary, tax deductions, and total annual salary. Designed for easy payroll management.",
          codeLink: "https://github.com/Mrcoderv/Web-tech-/blob/main/app.html", // Replace with your actual code URL
         htmlLink: "https://mrcoderv.github.io/Web-tech-/app.html", // Replace with the hosted HTML link
            owner: { username: "samyog7901", name: "Samyog " }, // GitHub username and owner name
        },  {
            title: "Table.html by raghav",
            description: "This project show that table .",
            codeLink: "https://github.com/Mrcoderv/Web-tech-/blob/main/table.html",
            htmlLink: "https://mrcoderv.github.io/Web-tech-/table.html",
            owner: { username: "Mrcoderv", name: "Raghav" }, // GitHub username and owner name
        },
        {
            title: "table2 by raghav ",
            description: "table example.",
            codeLink: "https://github.com/example/project2-code",
            htmlLink: "https://mrcoderv.github.io/Web-tech-/table2.html",
            owner: { username: "Mrcoderv", name: "Raghav" }, // GitHub username and owner name
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
            <a href="https://github.com/${project.owner.username}" target="_blank" class="owner-link">Visit ${project.owner.name}'s Profile</a>
        `;
        projectList.appendChild(projectElement);
    });
});
