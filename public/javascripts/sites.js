/** sites.js
 * Handles SQL query for cool sites that I find
 */

const fetchSites = async () => {
  try {
    // Get site data
    const response = await fetch('/db/sites');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const sitesData = await response.json();
    // Set up HTML list
    const siteList = document.getElementById('site-list');
    sitesData.forEach(site => {
      // Create list element and append to list
      const li = document.createElement('li');
      const siteOverview = document.createElement('ul');
      siteOverview.classList.add('site-overview');
      siteList.appendChild(li);
      // Set up content of list element
      li.classList.add('site-item');
      titleLink = document.createElement('a');
      titleLink.classList.add('title-link');
      titleElement = document.createElement('li');
      titleElement.classList.add('site-title');
      titleElement.appendChild(titleLink);
      authorElement = document.createElement('li');
      authorElement.classList.add('site-author');
      siteImageElement = document.createElement('img');
      siteImageElement.classList.add('site-image');
      siteDescriptionElement = document.createElement('li');
      siteDescriptionElement.classList.add('site-description');
      siteLink = document.createElement('a');
      siteLink.appendChild(siteImageElement);
      siteLink.classList.add('site-link');

      // Add data to spans
      titleLink.textContent = site.site_name;
      titleLink.href = site.site_link;
      siteLink.href = site.site_link;
      siteLink.target = "_blank";
      authorElement.textContent = 'Author: ' + site.site_author;
      siteDescriptionElement.textContent = site.site_description;
      siteImageElement.src = site.site_image_link;
      siteImageElement.alt = `image for ${site.site_name}`;

      // Append spans to list item
      li.appendChild(siteLink);
      li.appendChild(siteOverview);
      siteOverview.appendChild(titleElement);
      siteOverview.appendChild(authorElement);
      siteOverview.appendChild(siteDescriptionElement);
      separator = document.createElement('hr');
      separator.classList.add('site-separator');
      siteList.appendChild(separator);
    });
    siteList.removeChild(siteList.lastElementChild);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchSites();
