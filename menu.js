const menuItems = [
  {title: "HOME" , link: "./index.html"}, 
  {title: "ABOUT" , link: "./ABOUT/about.html"},
  {title: "THEORY BLOGS" , link: "./THEORY BLOGS/theory blogs.html"}, 
  {title: "CONTACT" , link: "./CONTACT/contact.html"}, 
];

window.addEventListener ('DOMContentLoaded', (event) => {
    console.log ('DOM fully loaded and parsed');
    renderMenu();

});

const renderMenu =() => {
    const navBar = document.querySelector (".menuItems");
    menuItems.forEach (item => {
        
        const newItem = document.createElement("ul");
        const newLink = document.createElement ("a");
        newLink.href = item.link;
        newLink.text = item.title;
        newItem.appendChild(newLink);
        navBar.appendChild(newItem);

        
    });
};