/** projects.js
 * Handles SQL query for my projects 
 */

const fetchprojects = async () => {
  try {
    // Get project data
    const response = await fetch('/db/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const projectsData = await response.json();
    // Set up HTML list
    const projectList = document.getElementById('project-list');
    projectsData.forEach(project => {
      // Create list element and append to list
      const li = document.createElement('li');
      li.classList.add('project-item');
      const projectOverview = document.createElement('ul');
      projectOverview.classList.add('project-overview');
      projectList.appendChild(li);
      // Set up content of list element
      titleElement = document.createElement('li');
      titleElement.classList.add('project-title');
      projectImageElement = document.createElement('img');
      projectImageElement.classList.add('project-image');
      projectDescriptionElement = document.createElement('li');
      projectDescriptionElement.classList.add('project-description');
      projectLink = document.createElement('a');
      projectLink.appendChild(projectImageElement);
      projectLink.classList.add('project-link');

      // Add data to spans
      titleElement.textContent = project.project_name;
      projectLink.href = project.project_link;
      projectLink.target = "_blank";
      projectDescriptionElement.textContent = project.project_description;
      projectImageElement.src = project.project_image;
      projectImageElement.alt = `Image representing ${project_name}; also a link to its GitHub repo`

      // Append spans to list item
      li.id = project.project_name;
      li.appendChild(projectLink);
      li.appendChild(projectOverview);
      projectOverview.appendChild(titleElement);
      projectOverview.appendChild(projectDescriptionElement);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchprojects();
