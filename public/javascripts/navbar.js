/** navbar.js 
 * Handles styling for the navbar upon navigation
 */

const highlightNav = () => {
  const navPaths = {
    "/": 0,
    "/about": 1,
    "/contact": 2,
    "/projects": 3
  }
  navItems = document.getElementsByClassName('nav-item');
  let path = window.location.pathname;
  const path_index = navPaths[path];
  navItems[path_index].classList.add('nav-highlight');
};

highlightNav();
