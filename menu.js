const menuItems = [
  {title: "POPCORN CREW", link: "/index.html"}, 
  {title: "DESIGN", link: "/ABOUT/about.html"},
  {title: "THEORY BLOGS", link: "/THEORY BLOGS/theory blogs.html"}, 
  {title: "CONTACT", link: "/CONTACT/contact.html"}, 
];

window.addEventListener ('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    renderMenu();

});

const renderMenu = ()=> {

    let pathPrefix = window.location.pathname === "/WSOA3029A_1388793/" ? "./" : "../"
    
    const navBar = document.querySelector(".menuItems");

    menuItems.forEach(item => {
        
        const newItem = document.createElement("ul");
        const newLink = document.createElement("a");
        newLink.href = item.link;
        newLink.text = item.title;
        newItem.appendChild(newLink);
        navBar.appendChild(newItem);
    
    });
};