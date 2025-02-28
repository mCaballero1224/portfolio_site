/** projects.js
 * Handles SQL query for my projects 
 */


const createTitle = (title, link) => {
  /* Create new elements */
  let titleElement = document.createElement('li');
  let linkElement = document.createElement('a');
  /* Add link to title element as a child */
  titleElement.appendChild(linkElement);
  /* Add attributes to title element*/
  titleElement.classList.add('project-title');
  titleElement.id = `${title}-project`
  /* Add attributes to link element*/
  linkElement.href = link
  linkElement.target = "_blank"; /* Opens new window */
  linkElement.textContent = title;

  return titleElement;
}

const createDescription = (description) => {
  let descriptionElement = document.createElement('li');
  descriptionElement.classList.add('project-description');
  descriptionElement.textContent = description;

  return descriptionElement;
}

const createImageLink = (imageUrl, link) => {
  /* Create elements */
  let containerElement = document.createElement('span');
  let imageElement = document.createElement('i');
  let linkElement = document.createElement('a');
  /* Add classes to elements */
  containerElement.classList.add('image-container');
  imageElement.classList.add('project-image');
  imageElement.classList.add('fa-solid');
  imageElement.classList.add('fa-terminal');
  imageElement.classList.add('fa-2xl');
  linkElement.classList.add('image-link');
  /* Append child elements*/
  containerElement.appendChild(linkElement);
  linkElement.appendChild(imageElement);
  /* Add attributes */
  linkElement.href = link;
  linkElement.target = "_blank";

  return containerElement;
}

const createOverview = (title, link, description) => {
  let overview = document.createElement('ul');
  overview.classList.add('project-overview');
  overview.appendChild(createTitle(title, link));
  overview.appendChild(createDescription(description));
  return overview;
}

const fetchprojects = async () => {
  try {
    /* Get project data */
    const response = await fetch('/db/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const projectsData = await response.json();
    /* Set up HTML list */
    const projectList = document.getElementById('project-list');
    projectsData.forEach(project => {
      console.log(project);
      /* Create list element and append to list */
      const li = document.createElement('li');
      /* Add element class */
      li.classList.add('project-item');
      /* Create image link element and append */
      const imageLink = createImageLink(project.project_image, 
        project.project_link);
      li.appendChild(imageLink);
      /* Create overview element and append */
      const overview = createOverview(project.project_name,
        project.project_link, project.project_description);
      li.appendChild(overview);
      /* Append list item to list */
      projectList.appendChild(li);

    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchprojects();
